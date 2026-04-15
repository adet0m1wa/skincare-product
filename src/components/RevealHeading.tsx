import { useReveal } from '../hooks/useReveal';

interface Props {
  text?: string;
  lines?: string[];
  tag?: 'h1' | 'h2' | 'h3';
  className?: string;
  id?: string;
  staggerMs?: number;
  externalRevealed?: boolean;
}

export function RevealHeading({
  text,
  lines,
  tag: Tag = 'h2',
  className = '',
  id,
  staggerMs = 60,
  externalRevealed,
}: Props) {
  const internal = useReveal();
  const useExternal = externalRevealed !== undefined;
  const revealed = useExternal ? externalRevealed : internal.revealed;
  const allLines = lines ?? (text ? [text] : []);
  let wordIndex = 0;

  return (
    <div ref={useExternal ? undefined : internal.ref}>
      <Tag id={id} className={className}>
        {allLines.map((line, li) => (
          <span key={li} style={{ display: 'block' }}>
            {line.split(' ').map((word, wi) => {
              const i = wordIndex++;
              return (
                <span
                  key={`${li}-${wi}`}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    verticalAlign: 'bottom',
                    paddingBottom: '0.15em',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      transform: revealed ? 'translateY(0)' : 'translateY(120%)',
                      transition: revealed ? `transform 350ms cubic-bezier(0.23, 1, 0.32, 1) ${i * staggerMs}ms` : 'none',
                    }}
                  >
                    {word}
                  </span>
                  {wi < line.split(' ').length - 1 && '\u00A0'}
                </span>
              );
            })}
          </span>
        ))}
      </Tag>
    </div>
  );
}
