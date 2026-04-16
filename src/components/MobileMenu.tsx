import { useState, useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { label: 'Bestsellers', type: 'link', href: '#bestsellers-title' },
  {
    label: 'Skincare',
    type: 'accordion',
    children: ['Cleansers', 'Serums', 'Moisturizers', 'Eye Care', 'SPF', 'Masks & Treatments'],
  },
  {
    label: 'Body + Hair',
    type: 'accordion',
    children: ['Body Wash', 'Body Lotion', 'Scrubs & Exfoliants', 'Hand Care', 'Shampoo', 'Conditioner', 'Scalp Care'],
  },
  { label: 'Sets', type: 'link', href: '#' },
  {
    label: 'About',
    type: 'accordion',
    children: ['Our Story', 'Ingredients', 'Sustainability', 'Journal', 'Contact'],
  },
] as const;

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setOpenAccordion(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      onClose();
      setTimeout(() => {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      onClose();
    }
  };

  return (
    <div
      id="mobile-menu"
      className={`mobile-menu${isOpen ? ' mobile-menu-open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu-header">
        <div className="mobile-menu-logo">
          <img src={logoBlack} alt="" width={25} height={25} className="nav-logo" draggable={false} />
          <span className="nav-wordmark">us</span>
        </div>
        <button type="button" className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <X size={22} weight="regular" />
        </button>
      </div>

      <nav className="mobile-menu-nav" aria-label="Mobile">
        <ul className="mobile-menu-list">
          {MENU_ITEMS.map((item, i) => (
            <li key={item.label} className="mobile-menu-item">
              {item.type === 'link' ? (
                <a
                  ref={i === 0 ? firstLinkRef : null}
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    className="mobile-menu-link mobile-menu-accordion-trigger"
                    aria-expanded={openAccordion === item.label}
                    onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                  >
                    {item.label}
                    <span className="mobile-menu-chevron" aria-hidden />
                  </button>
                  <div className={`mobile-menu-sub${openAccordion === item.label ? ' expanded' : ''}`}>
                    <div className="mobile-menu-sub-inner">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child}><a href="#" onClick={onClose}>{child}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-menu-footer">
        <button type="button" className="mobile-menu-cta">Build My Regimen</button>
      </div>
    </div>
  );
}
