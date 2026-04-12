import { lazy, Suspense, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { BTN_DIAL_DEFAULTS, type BtnDials } from './components/btn-dials';
import './App.css';

const BtnDialsHost = import.meta.env.DEV
  ? lazy(() => import('./components/btn-dials-dev'))
  : null;

export default function App() {
  const [btnDials, setBtnDials] = useState<BtnDials>(BTN_DIAL_DEFAULTS);

  return (
    <div className="app-root">
      <div className="page-frame">
        {BtnDialsHost && (
          <Suspense fallback={null}>
            <BtnDialsHost onChange={setBtnDials} />
          </Suspense>
        )}
        <Nav btnDials={btnDials} />
        <main>
          <Hero btnDials={btnDials} />
        </main>
      </div>
    </div>
  );
}
