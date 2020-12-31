const numbers = {
  xs: 340,
  sm: 500,
  md: 800,
  lg: 1280,
  xl: 1920,
};

const media = {
  up: (bp: number) => `@media (min-width: ${numbers[bp]}px)`,
  down: (bp: number) => `@media (max-width: ${numbers[bp]}px)`,
};

export const breakpoints = {
  ...numbers,
  ...media,
};
