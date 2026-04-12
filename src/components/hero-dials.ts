// Shared types + prod defaults for Hero spacing / color parameters.
// NO dialkit import — this file ships to prod.

export type HeroDials = {
  headlineToBody: number;
  bodyToButton: number;
  bodyColor: string;
};

export const HERO_DIAL_DEFAULTS: HeroDials = {
  headlineToBody: 40,
  bodyToButton: 40,
  bodyColor: '#6B6B65',
};
