import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Dev-only: lazy-import the Agentation annotation overlay.
// In production, `import.meta.env.DEV` is statically `false`,
// so Vite/Rollup tree-shakes the dynamic import away.
const DevOverlay = import.meta.env.DEV
  ? lazy(() =>
      import('agentation').then((m) => ({ default: m.Agentation })),
    )
  : null;

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
    {DevOverlay && (
      <Suspense fallback={null}>
        <DevOverlay />
      </Suspense>
    )}
    {DialPanel && (
      <Suspense fallback={null}>
        <DialPanel />
      </Suspense>
    )}
  </StrictMode>,
);
