// Dev-only DialKit host for button hover animation.
// Statically imports dialkit — MUST only be loaded in dev via lazy import.
import { useEffect } from 'react';
import { useDialKit } from 'dialkit';
import type { BtnDials } from './btn-dials';

type Slider = [number, number, number];

export default function BtnDialsHost({
  onChange,
}: {
  onChange: (dials: BtnDials) => void;
}) {
  const dials = useDialKit('Button Hover', {
    fillDuration: [500, 100, 1500] as Slider,
    fillEasing: {
      type: 'select' as const,
      options: [
        'cubic-bezier(0.77, 0, 0.175, 1)',
        'ease-out',
        'ease-in-out',
        'ease',
        'cubic-bezier(0.4, 0, 0.2, 1)',
        'cubic-bezier(0.25, 1, 0.5, 1)',
        'linear',
      ],
      default: 'cubic-bezier(0.77, 0, 0.175, 1)',
    },
  });

  useEffect(() => {
    onChange({
      fillDuration: dials.fillDuration,
      fillEasing: dials.fillEasing,
    });
  }, [dials.fillDuration, dials.fillEasing, onChange]);

  return null;
}
