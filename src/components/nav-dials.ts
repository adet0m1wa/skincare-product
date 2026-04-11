// Shared types + prod defaults for Nav underline animation parameters.
// NOTE: do NOT import `dialkit` from this file — it's included in prod and
// any reference would pull the entire DialKit store into the bundle. The
// live-tuning hook lives in `./nav-dials-dev.ts` and is lazy-loaded only
// in dev via `./Nav.tsx`.

export type NavDials = {
  duration: number;
  scaleFrom: number;
  scaleTo: number;
  lineHeight: number;
  lineOffset: number;
};

export const NAV_DIAL_DEFAULTS: NavDials = {
  duration: 0.25,
  scaleFrom: 0,
  scaleTo: 1,
  lineHeight: 1.5,
  lineOffset: 0,
};
