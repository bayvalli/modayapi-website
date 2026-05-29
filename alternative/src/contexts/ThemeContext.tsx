import React, { createContext, useContext, useState } from 'react';

type Theme = 'default' | 'alternative';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getSavedTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const query = new URLSearchParams(window.location.search);
      const queryTheme = query.get('theme') as Theme;
      const saved = localStorage.getItem('modayapi-theme') as Theme;
      return queryTheme || saved || 'alternative';
    }
    return 'alternative';
  };

  const [theme] = useState<Theme>(getSavedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'alternative' ? 'default' : 'alternative';
    localStorage.setItem('modayapi-theme', newTheme);
    window.location.href = `/?theme=${newTheme}`;
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
