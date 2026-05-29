export interface ContactValidationData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteValidationData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^[+0-9\s-()]{7,20}$/;

export const validateContactFields = (
  data: ContactValidationData,
  language: 'tr' | 'en'
): { isValid: boolean; error?: string } => {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const message = data.message.trim();

  if (name.length < 2) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen en az 2 karakterden oluşan geçerli bir Ad Soyad giriniz.'
          : 'Please enter a valid Full Name with at least 2 characters.',
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen geçerli bir e-posta adresi giriniz.'
          : 'Please enter a valid email address.',
    };
  }

  if (!phoneRegex.test(phone)) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen geçerli bir telefon numarası giriniz (örn: +90 555 555 5555).'
          : 'Please enter a valid phone number (e.g. +90 555 555 5555).',
    };
  }

  if (message.length < 5) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen daha detaylı bir mesaj giriniz (en az 5 karakter).'
          : 'Please enter a more detailed message (at least 5 characters).',
    };
  }

  return { isValid: true };
};

export const validateQuoteFields = (
  data: QuoteValidationData,
  language: 'tr' | 'en'
): { isValid: boolean; error?: string } => {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const notes = data.notes.trim();

  if (name.length < 2) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen en az 2 karakterden oluşan geçerli bir Ad Soyad giriniz.'
          : 'Please enter a valid Full Name with at least 2 characters.',
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen geçerli bir e-posta adresi giriniz.'
          : 'Please enter a valid email address.',
    };
  }

  if (!phoneRegex.test(phone)) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen geçerli bir telefon numarası giriniz (örn: +90 555 555 5555).'
          : 'Please enter a valid phone number (e.g. +90 555 555 5555).',
    };
  }

  if (notes.length < 5) {
    return {
      isValid: false,
      error:
        language === 'tr'
          ? 'Lütfen detaylı notlar giriniz (en az 5 karakter).'
          : 'Please enter detailed notes (at least 5 characters).',
    };
  }

  return { isValid: true };
};
