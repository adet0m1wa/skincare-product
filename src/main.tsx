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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {DevOverlay && (
      <Suspense fallback={null}>
        <DevOverlay />
      </Suspense>
    )}
  </StrictMode>,
);
