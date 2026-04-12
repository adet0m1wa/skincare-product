// Dev-only DialKit host for Hero spacing + body color.
// Statically imports dialkit — MUST only be loaded in dev via a lazy
// dynamic import guarded by import.meta.env.DEV.
import { useEffect } from 'react';
import { useDialKit } from 'dialkit';
import type { HeroDials } from './hero-dials';

type Slider = [number, number, number];

export default function HeroDialsHost({
  onChange,
}: {
  onChange: (dials: HeroDials) => void;
}) {
  const dials = useDialKit('Hero Copy', {
    headlineToBody: [40, 16, 80] as Slider,
    bodyToButton: [40, 16, 80] as Slider,
    bodyColor: { type: 'color' as const, default: '#6B6B65' },
  });

  useEffect(() => {
    onChange({
      headlineToBody: dials.headlineToBody,
      bodyToButton: dials.bodyToButton,
      bodyColor: dials.bodyColor,
    });
  }, [dials.headlineToBody, dials.bodyToButton, dials.bodyColor, onChange]);

  return null;
}
