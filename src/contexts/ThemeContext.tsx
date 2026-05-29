import React, { createContext, useContext, useState, useEffect } from 'react';

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
      return queryTheme || saved || 'default';
    }
    return 'default';
  };

  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  // Apply theme to HTML element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'alternative' : 'default';
    localStorage.setItem('modayapi-theme', newTheme);
    setTheme(newTheme);
    // Optional: Also update URL for shareable links
    window.history.replaceState({}, '', `/?theme=${newTheme}`);
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
