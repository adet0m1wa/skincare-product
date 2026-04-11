// Dev-only DialKit host for the Nav underline animation.
//
// This file imports `dialkit` statically, so it MUST only be loaded in dev.
// It's lazy-imported from Nav.tsx inside an `import.meta.env.DEV` branch,
// which means in prod this entire module (and therefore the whole dialkit
// graph) is dead code that Rollup eliminates.
//
// The component renders nothing — it exists purely to host the DialKit
// panel for the Nav underline. The values flow out via `setDials`.
import { useEffect } from 'react';
import { useDialKit } from 'dialkit';
import type { NavDials } from './nav-dials';

type Slider = [number, number, number];

export default function NavDialsHost({
  onChange,
}: {
  onChange: (dials: NavDials) => void;
}) {
  // [default, min, max] per DialKit slider convention
  const dials = useDialKit('Nav Underline', {
    duration: [0.25, 0.05, 1.0] as Slider,
    scaleFrom: [0, 0, 1] as Slider,
    scaleTo: [1, 0, 1.5] as Slider,
    lineHeight: [1.5, 0.5, 4] as Slider,
    lineOffset: [0, -20, 20] as Slider,
  });

  // Flow values up to Nav on every change. useEffect deps track the
  // individual numbers so we don't re-run on object-identity churn.
  useEffect(() => {
    onChange(dials);
  }, [
    dials.duration,
    dials.scaleFrom,
    dials.scaleTo,
    dials.lineHeight,
    dials.lineOffset,
    onChange,
  ]);

  return null;
}
