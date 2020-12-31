import 'styled-components';
import { Theme } from '~/design';

declare module 'styled-components' {
  type ThemeType = typeof Theme;
  export interface DefaultTheme {
    colors: typeof Theme.colors;
  }
}
