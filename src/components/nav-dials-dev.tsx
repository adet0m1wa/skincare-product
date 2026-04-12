// Dev-only DialKit host for Nav hover underline animation.
// Statically imports dialkit — MUST only be loaded in dev via a lazy
// dynamic import guarded by import.meta.env.DEV.
import { useEffect } from 'react';
import { useDialKit } from 'dialkit';
import type { NavDials } from './nav-dials';

type Slider = [number, number, number];

export default function NavDialsHost({
  onChange,
}: {
  onChange: (dials: NavDials) => void;
}) {
  const dials = useDialKit('Nav Hover', {
    duration: [0.19, 0.05, 1.0] as Slider,
    lineThickness: [1.5, 0.5, 4] as Slider,
    lineOffsetY: [0, -10, 10] as Slider,
    easing: {
      type: 'select' as const,
      options: [
        'ease-out',
        'ease-in-out',
        'ease',
        'linear',
        'cubic-bezier(0.4, 0, 0.2, 1)',
      ],
      default: 'ease-in-out',
    },
  });

  useEffect(() => {
    onChange({
      duration: dials.duration,
      lineThickness: dials.lineThickness,
      lineOffsetY: dials.lineOffsetY,
      easing: dials.easing,
    });
  }, [dials.duration, dials.lineThickness, dials.lineOffsetY, dials.easing, onChange]);

  return null;
}
