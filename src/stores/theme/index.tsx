import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { Theme, DarkTheme, accents } from '~/design';

interface Context {
  selectedAccent?: {
    solid: string;
    transparent: string;
  };
  theme?: DefaultTheme;
  setTheme?: (isDark: boolean) => void;
  setAccent?: (solid: string, transparent: string) => void;
}

const context = createContext<Context>({});

export const ThemeSwitcherProvider: React.FC = ({ children }) => {
  const selectedColor = localStorage.getItem('selectedAccent');
  const [theme, setSelectedTheme] = useState<typeof Theme>(
    localStorage.getItem('isDark') === 'yes' ? DarkTheme : Theme,
  );
  const [selectedAccent, setSelectedAccent] = useState(
    selectedColor
      ? JSON.parse(selectedColor)
      : {
          solid: accents.blue,
          transparent: accents.transparentBlue,
        },
  );

  useEffect(() => {
    if (selectedAccent) {
      localStorage.setItem('selectedAccent', JSON.stringify(selectedAccent));
    }
  }, [selectedAccent]);

  return (
    <context.Provider
      value={useMemo(
        () => ({
          selectedAccent,
          theme,
          setAccent: (solid: string, transparent: string) =>
            setSelectedAccent({
              solid,
              transparent,
            }),
          setTheme: (isDark: boolean) => {
            localStorage.setItem('isDark', isDark ? 'yes' : 'no');
            setSelectedTheme(isDark ? DarkTheme : Theme);
          },
        }),
        [theme, selectedAccent],
      )}
    >
      {children}
    </context.Provider>
  );
};

export const useTheme = () => {
  return useContext(context);
};
