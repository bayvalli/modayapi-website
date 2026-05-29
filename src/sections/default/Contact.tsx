import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';
import { validateContactFields } from '../../utils/validation';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const isModern = theme === 'alternative';
  const borderClass = isModern ? 'border-4' : 'border-2';
  const borderLgClass = isModern ? 'border-4' : 'border-4';
  const officeLocation = COMPANY_INFO.gpsCoordinates;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Unified Validation Call
    const validation = validateContactFields(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      language
    );

    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(COMPANY_INFO.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Ad_Soyad: trimmedName,
          Eposta: trimmedEmail,
          Telefon: trimmedPhone,
          Mesaj: trimmedMessage,
          _required: 'Ad_Soyad,Eposta,Telefon,Mesaj',
          _subject: `${COMPANY_INFO.shortName} Web İletişim - ${trimmedName}`,
        }),
      });

      if (response.ok) {
        const randNum = Math.floor(10000 + Math.random() * 90000);
        setTicketId(`MSG-${randNum}`);
        setSubmitted(true);
      } else {
        throw new Error(
          language === 'tr'
            ? 'Form sunucuya iletilemedi. Lütfen daha sonra tekrar deneyiniz.'
            : 'Form could not be sent to server. Please try again later.'
        );
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      setSubmitError(
        error.message ||
          (language === 'tr'
            ? 'Lütfen internet bağlantınızı kontrol ediniz.'
            : 'Please check your internet connection.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`w-full max-w-[1440px] mx-auto px-margin pt-block-gap pb-block-gap overflow-hidden ${isModern ? 'bg-gradient-to-b from-surface-container/10 to-transparent' : ''}`}
    >
      {/* Header Section */}
      <div className="grid grid-cols-12 gap-gutter mb-block-gap">
        <div className="col-span-12 md:col-span-11 md:col-start-2 text-left">
          <h1
            className={`font-serif text-headline-xl text-primary break-words ${isModern ? 'tracking-tighter' : ''}`}
          >
            {t('contact.title')}
          </h1>
        </div>
      </div>

      {/* Asymmetric Grid Content */}
      <div className={`grid grid-cols-12 gap-gutter relative ${isModern ? 'gap-6' : ''}`}>
        {/* Map Area */}
        <div
          className={`col-span-12 md:col-span-5 md:col-start-1 h-[600px] bg-secondary-container ${borderClass} border-primary relative z-0 mb-asymmetric md:mb-0 overflow-hidden ${isModern ? 'shadow-md' : ''}`}
        >
          {!hasValidKey ? (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-surface-container font-sans">
              <h3 className="text-headline-sm text-primary mb-4">
                {language === 'tr'
                  ? 'Google Maps API Anahtarı Gerekli'
                  : 'Google Maps API Key Required'}
              </h3>
              <p className="text-body-md text-secondary mb-6 max-w-xs">
                {language === 'tr'
                  ? 'Haritayı görüntülemek için lütfen GOOGLE_MAPS_PLATFORM_KEY anahtarını ayarlara ekleyin.'
                  : 'To view the map, please add the GOOGLE_MAPS_PLATFORM_KEY secret in settings.'}
              </p>
              <div className="text-left text-sm space-y-2 opacity-70">
                <p>
                  {language === 'tr'
                    ? '1. Ayarlar (Gear simgesi) ve ardından Secrets panelini açın.'
                    : '1. Open settings and select the Secrets panel.'}
                </p>
                <p>
                  {language === 'tr'
                    ? '2. "GOOGLE_MAPS_PLATFORM_KEY" adında bir secret oluşturun.'
                    : '2. Create a secret named "GOOGLE_MAPS_PLATFORM_KEY".'}
                </p>
                <p>
                  {language === 'tr'
                    ? '3. API anahtarınızı yapıştırın ve kaydedin.'
                    : '3. Paste your API key and save.'}
                </p>
              </div>
            </div>
          ) : (
            <APIProvider apiKey={API_KEY} version="weekly">
              <div className="w-full h-full grayscale contrast-125 opacity-90">
                <Map
                  defaultCenter={officeLocation}
                  defaultZoom={17}
                  mapId="DEMO_MAP_ID"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%' }}
                  disableDefaultUI={true}
                >
                  <AdvancedMarker position={officeLocation}>
                    <Pin background="#000" glyphColor="#fff" borderColor="#000" />
                  </AdvancedMarker>
                </Map>
              </div>
            </APIProvider>
          )}
        </div>

        {/* Contact Information Block */}
        <div className="col-span-12 md:col-span-4 md:col-start-7 z-10 mt-asymmetric flex flex-col gap-12">
          <div className="border-t-4 border-primary pt-6">
            <h3 className="font-label-caps text-secondary mb-2 tracking-widest uppercase">
              {t('contact.infoTitle')}
            </h3>
            <p className="text-body-lg text-primary font-sans">
              {COMPANY_INFO.addressLine1}
              <br />
              {COMPANY_INFO.addressLine2}
              <br />
              {COMPANY_INFO.country}, {COMPANY_INFO.postalCode}
            </p>
          </div>

          <div className="border-t-4 border-primary pt-6">
            <h3 className="font-label-caps text-secondary mb-2 tracking-widest uppercase">
              {language === 'tr' ? 'İrtibat' : 'Contact'}
            </h3>
            <p className="text-body-lg text-primary font-sans">
              <a href={`tel:${COMPANY_INFO.phoneCall}`} className="hover:underline">
                {COMPANY_INFO.phone}
              </a>
              <br />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>

          <div className="border-t-4 border-primary pt-6">
            <h3 className="font-label-caps text-secondary mb-4 tracking-widest uppercase">
              {language === 'tr' ? 'Ağlar' : 'Networks'}
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-headline-md text-primary hover:text-secondary transition-colors underline decoration-2 underline-offset-4 uppercase"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Minimal Form */}
      <div className={`grid grid-cols-12 gap-gutter mt-block-gap ${isModern ? 'gap-6' : ''}`}>
        <div
          className={`col-span-12 md:col-span-6 md:col-start-4 bg-surface-container ${borderLgClass} border-primary p-margin relative ${isModern ? 'shadow-md' : ''}`}
        >
          <div
            className={`absolute ${isModern ? '-top-3 -left-3' : '-top-4 -left-4'} ${isModern ? 'w-10 h-10 border-t-4 border-l-4' : 'w-12 h-12 border-t-4 border-l-4'} border-primary bg-surface z-10`}
          ></div>

          {submitted ? (
            <div className="flex flex-col text-left py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-emerald-600 animate-pulse rounded-full"></div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold">
                  {language === 'tr' ? 'Transaksiyon Başarılı' : 'Transaction Success'}
                </h3>
              </div>
              <h2 className="font-serif text-headline-md text-primary mb-8 uppercase leading-tight">
                {t('contact.successTitle')}
              </h2>

              <div className="bg-surface border-2 border-primary p-6 font-mono text-xs space-y-4 mb-8">
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">{t('contact.ticketLabel')}</span>
                  <span className="font-bold text-primary">{ticketId}</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">
                    {language === 'tr' ? 'GÖNDEREN //' : 'SENDER //'}
                  </span>
                  <span className="font-bold text-primary uppercase">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">
                    {language === 'tr' ? 'İLETİŞİM //' : 'CONTACT //'}
                  </span>
                  <span className="font-bold text-primary">
                    {formData.email} / {formData.phone}
                  </span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">
                    {language === 'tr' ? 'ALICI //' : 'RECIPIENT //'}
                  </span>
                  <span className="font-bold text-primary">{COMPANY_INFO.shortNameUpper} A.Ş.</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">
                    {language === 'tr' ? 'TARIH //' : 'DATE //'}
                  </span>
                  <span className="font-bold text-primary">
                    {new Date().toLocaleString(language === 'tr' ? 'tr-TR' : 'en-US')}
                  </span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-secondary">
                    {language === 'tr' ? 'DURUM //' : 'STATUS //'}
                  </span>
                  <span className="font-bold px-2 py-[2px] bg-primary text-on-primary">
                    {language === 'tr' ? 'MÜHENDİS_ONAYI_BEKLİYOR' : 'AWAITING_ENGINEER_APPROVAL'}
                  </span>
                </div>
              </div>

              <p className="text-body-md text-secondary mb-8 font-sans">
                {t('contact.successDesc')}
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
                className="w-full border-4 border-primary bg-surface py-4 font-mono text-xs font-bold text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200 uppercase tracking-widest"
              >
                {t('contact.newMsgBtn')}
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-headline-md text-primary mb-12 uppercase">
                {t('contact.formTitle')}
              </h2>
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="flex flex-col relative group">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    {t('contact.fullName')}
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.placeholderName')}
                  />
                </div>
                <div className="flex flex-col relative group">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    {t('contact.email')}
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.placeholderEmail')}
                  />
                </div>
                <div className="flex flex-col relative group">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    {t('contact.phone')}
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.placeholderPhone')}
                  />
                </div>
                <div className="flex flex-col relative group mb-8">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    {t('contact.message')}
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none resize-none"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.placeholderMessage')}
                  />
                </div>
                {submitError && (
                  <div className="mb-6 p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs">
                    HATA // {submitError}
                  </div>
                )}
                <button
                  disabled={isSubmitting}
                  className={`w-full border-4 border-primary bg-surface py-6 font-serif text-headline-md text-primary transition-colors duration-300 uppercase ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed bg-primary/5'
                      : 'hover:bg-primary hover:text-on-primary'
                  }`}
                  type="submit"
                >
                  {isSubmitting ? t('contact.submitting') : t('contact.submitBtn')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
