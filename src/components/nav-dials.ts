// Shared types + prod defaults for Nav underline animation parameters.
// NOTE: do NOT import `dialkit` from this file — it's included in prod and
// any reference would pull the entire DialKit store into the bundle. The
// live-tuning hook lives in `./nav-dials-dev.tsx` and is lazy-loaded only
// in dev via `./Nav.tsx`.

export type NavDials = {
  duration: number;
  lineThickness: number;
  easing: string;
};

export const NAV_DIAL_DEFAULTS: NavDials = {
  duration: 0.25,
  lineThickness: 1.5,
  easing: 'ease-out',
};
