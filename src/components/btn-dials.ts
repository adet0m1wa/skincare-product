// Shared types + prod defaults for button hover animation.
// NO dialkit import — this file ships to prod.

export type BtnDials = {
  fillDuration: number;
  fillEasing: string;
};

export const BTN_DIAL_DEFAULTS: BtnDials = {
  fillDuration: 500,
  fillEasing: 'cubic-bezier(0.77, 0, 0.175, 1)',
};
