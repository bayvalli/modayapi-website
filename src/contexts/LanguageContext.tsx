import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string, data?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('modayapi-lang');
    if (saved === 'tr' || saved === 'en') {
      return saved as Language;
    }
    // Default to browser language if available and matches, else fallback to 'tr'
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('modayapi-lang', language);
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, data?: Record<string, string | number>): string => {
    const parts = key.split('.');
    let current: unknown = translations[language];

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = (current as Record<string, unknown>)[part];
      } else {
        // Fallback to Turkish if translation is missing in English
        let fallback: unknown = translations['tr'];
        for (const fbPart of parts) {
          if (fallback && typeof fallback === 'object' && fbPart in fallback) {
            fallback = (fallback as Record<string, unknown>)[fbPart];
          } else {
            fallback = null;
            break;
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }

    if (typeof current !== 'string') {
      return key;
    }

    let result = current;
    if (data) {
      Object.entries(data).forEach(([k, v]) => {
        result = result.replace(new RegExp(`{${k}}`, 'g'), String(v));
      });
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
