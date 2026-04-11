// Dev-only DialKit host for the Nav underline animation.
//
// This file imports `dialkit` statically, so it MUST only be loaded in dev.
// It's lazy-imported from Nav.tsx inside an `import.meta.env.DEV` branch,
// which means in prod this entire module (and therefore the whole dialkit
// graph) is dead code that Rollup eliminates.
//
// The component renders nothing — it exists purely to host the DialKit
// panel for the Nav underline. The values flow out via `onChange`.
import { useEffect } from 'react';
import { useDialKit } from 'dialkit';
import type { NavDials } from './nav-dials';

// Slider tuple shape: [default, min, max]. TS widens inline numeric tuples
// to `number[]`, which breaks DialKit's conditional type mapping — cast so
// the inferred return type stays narrow.
type Slider = [number, number, number];

export default function NavDialsHost({
  onChange,
}: {
  onChange: (dials: NavDials) => void;
}) {
  const dials = useDialKit('Nav Underline', {
    duration: [0.25, 0.05, 1.0] as Slider,
    lineThickness: [1.5, 0.5, 4] as Slider,
    easing: {
      type: 'select' as const,
      options: [
        'ease-out',
        'ease-in-out',
        'ease',
        'linear',
        'cubic-bezier(0.4, 0, 0.2, 1)',
      ],
      default: 'ease-out',
    },
  });

  // Flow values up to Nav on every change. useEffect deps track the
  // individual fields so we don't re-run on object-identity churn.
  useEffect(() => {
    onChange({
      duration: dials.duration,
      lineThickness: dials.lineThickness,
      easing: dials.easing,
    });
  }, [dials.duration, dials.lineThickness, dials.easing, onChange]);

  return null;
}
