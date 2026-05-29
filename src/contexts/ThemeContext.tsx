import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'default' | 'alternative';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  toggleTheme: () => void;
  toggleMode: () => void;
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

  const getSavedMode = (): Mode => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('modayapi-mode') as Mode;
      return saved || 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getSavedTheme);
  const [mode, setMode] = useState<Mode>(getSavedMode);

  // Apply theme and mode to HTML element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.setAttribute('data-mode', mode);
    }
  }, [theme, mode]);

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'alternative' : 'default';
    localStorage.setItem('modayapi-theme', newTheme);
    setTheme(newTheme);
    // Optional: Also update URL for shareable links
    window.history.replaceState({}, '', `/?theme=${newTheme}`);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('modayapi-mode', newMode);
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
