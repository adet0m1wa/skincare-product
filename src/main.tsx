import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Dev-only: lazy-import the DialKit panel (UI for live-tuning animation
// parameters). The hooks that read DialKit values live in each component's
// own dial file (see components/nav-dials.ts). Same tree-shake guarantee
// as above — no `dialkit` references in the prod bundle.
const DialPanel = import.meta.env.DEV
  ? lazy(async () => {
      await import('dialkit/styles.css');
      const m = await import('dialkit');
      return { default: m.DialRoot };
    })
  : null;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {DialPanel && (
      <Suspense fallback={null}>
        <DialPanel />
      </Suspense>
    )}
  </StrictMode>,
);
