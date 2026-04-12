// Shared types + prod defaults for Nav hover underline animation.
// NO dialkit import — this file ships to prod.

export type NavDials = {
  duration: number;
  lineThickness: number;
  lineOffsetY: number;
  easing: string;
};

export const NAV_DIAL_DEFAULTS: NavDials = {
  duration: 0.19,
  lineThickness: 1.5,
  lineOffsetY: 0,
  easing: 'ease-in-out',
};
