import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrutalistButton } from '../../components/BrutalistButton';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPANY_INFO } from '../../constants';

const Quote: React.FC = () => {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const isModern = theme === 'alternative';
  const borderClass = isModern ? 'border-4' : 'border-4';
  const shadowClass = isModern ? 'shadow-md' : 'shadow-lg';
  const [sector, setSector] = useState<'construction' | 'materials' | 'coal' | 'software'>(
    'construction'
  );
  const [formData, setFormData] = useState({ name: '', location: '', area: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const showProjectLocation = sector !== 'software';
  const showTotalArea = sector === 'construction';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert(
        language === 'tr'
          ? 'Lütfen Ad Soyad / Unvan alanını doldurun.'
          : 'Please fill in the Name / Title field.'
      );
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload: Record<string, string> = {
        'Form / Source': `${COMPANY_INFO.shortName} Quote Request`,
        'Name / Title': formData.name,
        'Service Category': sector.toUpperCase(),
        'Technical Notes': formData.notes || 'None',
      };

      if (showProjectLocation && formData.location) {
        payload['Location'] = formData.location;
      }
      if (showTotalArea && formData.area) {
        payload['Area (M²)'] = formData.area;
      }

      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        setTicketId(`TLP-${randNum}`);
        setSubmitted(true);
      } else {
        throw new Error(
          language === 'tr'
            ? 'Talep sunucuya iletilemedi. Lütfen daha sonra tekrar deneyiniz.'
            : 'Request could not be sent. Please try again later.'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-48 pb-block-gap px-margin ${isModern ? 'bg-gradient-to-b from-surface via-surface-container/10 to-surface' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-block-gap">
          <h1
            className={`font-serif text-headline-xl text-primary leading-none tracking-tighter uppercase ${isModern ? 'text-2xl' : ''}`}
          >
            {language === 'tr' ? (
              <>
                TEKNİK TALEP
                <br />
                MERKEZİ.
              </>
            ) : (
              <>
                TECHNICAL REQUEST
                <br />
                CENTER.
              </>
            )}
          </h1>
          <p
            className={`mt-8 text-body-lg text-secondary max-w-2xl font-sans ${isModern ? 'text-sm' : ''}`}
          >
            {language === 'tr'
              ? 'Projenizin ölçeği ne olursa olsun, mimari bütünlüğü ve yapısal güvenliği sağlamak için teknik detayları mühendislik standartlarımız çerçevesinde değerlendiriyoruz.'
              : 'Regardless of the scale of your project, we evaluate technical details within the framework of our engineering standards to ensure architectural integrity and structural safety.'}
          </p>
        </header>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-gutter ${isModern ? 'gap-6' : 'lg:gap-asymmetric'} items-start`}
        >
          {/* Form Side */}
          <div
            className={`lg:col-span-7 bg-surface-container ${borderClass} border-primary p-8 md:p-12 relative ${shadowClass}`}
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center">
              <ShieldCheck className="text-on-primary" size={24} />
            </div>

            <div className="flex justify-between items-center mb-12 border-b-4 border-primary pb-6">
              <h2 className="font-serif text-headline-md text-primary uppercase">
                {language === 'tr' ? 'Proje Teklif Formu' : 'Project Proposal Form'}
              </h2>
              <span className="hidden md:block font-label-caps text-[10px] bg-primary text-on-primary px-3 py-1">
                {language === 'tr' ? 'MÜHENDİSLİK STANDARTLARI' : 'ENGINEERING STANDARDS'}
              </span>
            </div>

            {submitted ? (
              <div className={`flex flex-col text-left py-4 ${isModern ? 'py-3' : ''}`}>
                <div className={`flex items-center gap-3 mb-6 ${isModern ? 'mb-5' : ''}`}>
                  <div
                    className={`w-3 h-3 bg-emerald-600 animate-pulse rounded-full ${isModern ? 'w-2 h-2' : ''}`}
                  ></div>
                  <span
                    className={`font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold ${isModern ? 'text-[10px] tracking-[0.2em]' : ''}`}
                  >
                    {language === 'tr'
                      ? 'Mühendislik Talebi Kaydedildi'
                      : 'Engineering Request Saved'}
                  </span>
                </div>
                <h2
                  className={`font-serif text-headline-md text-primary mb-8 uppercase leading-tight ${isModern ? 'text-lg mb-6' : ''}`}
                >
                  {language === 'tr'
                    ? 'MÜHENDİSLİK ANALİZ TALEBİ ALINDI.'
                    : 'ENGINEERING ANALYSIS REQUEST RECEIVED.'}
                </h2>

                <div
                  className={`bg-surface border-2 border-primary p-6 font-mono text-xs space-y-4 mb-8 ${isModern ? 'border-[3px] p-4 text-[10px] mb-6' : ''}`}
                >
                  <div
                    className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                  >
                    <span className="text-secondary">{t('quote.ticketLabel')}</span>
                    <span className="font-bold text-primary">{ticketId}</span>
                  </div>
                  <div
                    className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                  >
                    <span className="text-secondary">
                      {language === 'tr' ? 'TALEP SAHİBİ //' : 'REQUEST OWNER //'}
                    </span>
                    <span className="font-bold text-primary uppercase">{formData.name}</span>
                  </div>
                  {showProjectLocation && formData.location && (
                    <div
                      className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                    >
                      <span className="text-secondary">
                        {language === 'tr' ? 'KONUM //' : 'LOCATION //'}
                      </span>
                      <span className="font-bold text-primary uppercase">{formData.location}</span>
                    </div>
                  )}
                  {showTotalArea && formData.area && (
                    <div
                      className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                    >
                      <span className="text-secondary">
                        {language === 'tr' ? 'YAPISAL ALAN //' : 'STRUCTURAL AREA //'}
                      </span>
                      <span className="font-bold text-primary">{formData.area} M²</span>
                    </div>
                  )}
                  <div
                    className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                  >
                    <span className="text-secondary">
                      {language === 'tr' ? 'HİZMET KATEGORİSİ //' : 'SERVICE CATEGORY //'}
                    </span>
                    <span className="font-bold text-primary">
                      {sector === 'construction' && t('quote.construction')}
                      {sector === 'materials' && t('quote.materials')}
                      {sector === 'coal' && t('quote.coal')}
                      {sector === 'software' && t('quote.software')}
                    </span>
                  </div>
                  <div
                    className={`flex justify-between border-b border-primary/10 pb-2 ${isModern ? 'pb-1' : ''}`}
                  >
                    <span className="text-secondary">
                      {language === 'tr' ? 'SİSTEM KAYIT TARİHİ //' : 'SYSTEM RECORD DATE //'}
                    </span>
                    <span className="font-bold text-primary">
                      {new Date().toLocaleString(language === 'tr' ? 'tr-TR' : 'en-US')}
                    </span>
                  </div>
                  <div className={`flex justify-between ${isModern ? '' : ''}`}>
                    <span className="text-secondary">
                      {language === 'tr' ? 'İŞLEM ÖNCELİĞİ //' : 'PROCESS PRIORITY //'}
                    </span>
                    <span
                      className={`font-bold px-2 py-[2px] bg-primary text-on-primary ${isModern ? 'px-1 py-[1px] text-[9px]' : ''}`}
                    >
                      {language === 'tr'
                        ? 'DÜŞÜK_VOLT_YAPISAL_ANALİZ'
                        : 'LOW_VOLT_STRUCTURAL_ANALYSIS'}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-body-md text-secondary mb-8 font-sans ${isModern ? 'text-sm mb-6' : ''}`}
                >
                  {language === 'tr'
                    ? 'Proje detaylarınız statik ve mimari departmanımıza yönlendirilmiştir. Belirtiğiniz teknik notlar ve mühendislik parametreleri incelenerek fiyatlandırma & fizibilite raporu hazırlanacaktır.'
                    : 'Your project details have been forwarded to our structural and architectural department. A pricing & feasibility report will be prepared by examining the technical notes and engineering parameters you specified.'}
                </p>

                <BrutalistButton
                  variant="primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', location: '', area: '', notes: '' });
                  }}
                  className={`w-full md:w-fit py-4 px-8 mt-4 font-mono text-xs font-bold uppercase tracking-widest text-center ${isModern ? 'py-3 px-6 mt-2' : ''}`}
                >
                  {t('quote.newBtn')}
                </BrutalistButton>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${isModern ? 'gap-8' : ''}`}
                >
                  <div
                    className={`flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:${isModern ? 'border-b-4' : 'border-b-4'} ${isModern ? 'duration-200' : 'duration-300'}`}
                  >
                    <label
                      className={`font-label-caps text-secondary text-xs uppercase tracking-widest ${isModern ? 'text-[10px]' : ''}`}
                    >
                      {language === 'tr' ? 'AD SOYAD / UNVAN' : 'FULL NAME / TITLE'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none ${isModern ? 'text-sm' : ''}`}
                      placeholder={
                        language === 'tr' ? 'İsim veya Kurum Giriniz' : 'Enter Name or Organization'
                      }
                    />
                  </div>
                  {showProjectLocation && (
                    <div
                      className={`flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:${isModern ? 'border-b-4' : 'border-b-4'} ${isModern ? 'duration-200' : 'duration-300'}`}
                    >
                      <label
                        className={`font-label-caps text-secondary text-xs uppercase tracking-widest ${isModern ? 'text-[10px]' : ''}`}
                      >
                        {language === 'tr' ? 'PROJE KONUMU' : 'PROJECT LOCATION'}
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none ${isModern ? 'text-sm' : ''}`}
                        placeholder={language === 'tr' ? 'Şehir / İlçe' : 'City / Town'}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${isModern ? 'gap-8' : ''}`}
                >
                  {showTotalArea && (
                    <div
                      className={`flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:${isModern ? 'border-b-4' : 'border-b-4'} ${isModern ? 'duration-200' : 'duration-300'}`}
                    >
                      <label
                        className={`font-label-caps text-secondary text-xs uppercase tracking-widest ${isModern ? 'text-[10px]' : ''}`}
                      >
                        {language === 'tr' ? 'TOPLAM ALAN (M²)' : 'TOTAL AREA (SQM)'}
                      </label>
                      <input
                        type="number"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className={`bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none ${isModern ? 'text-sm' : ''}`}
                        placeholder="Örn: 2500"
                      />
                    </div>
                  )}
                  <div
                    className={`flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:${isModern ? 'border-b-4' : 'border-b-4'} ${isModern ? 'duration-200' : 'duration-300'}`}
                  >
                    <label
                      className={`font-label-caps text-secondary text-xs uppercase tracking-widest ${isModern ? 'text-[10px]' : ''}`}
                    >
                      {language === 'tr' ? 'HİZMET TÜRÜ' : 'SERVICE TYPE'}
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className={`bg-transparent border-none p-0 text-body-lg focus:ring-0 font-sans cursor-pointer outline-none ${isModern ? 'text-sm' : ''}`}
                    >
                      <option value="construction">{t('quote.construction')}</option>
                      <option value="materials">{t('quote.materials')}</option>
                      <option value="coal">{t('quote.coal')}</option>
                      <option value="software">{t('quote.software')}</option>
                    </select>
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:${isModern ? 'border-b-4' : 'border-b-4'} ${isModern ? 'duration-200' : 'duration-300'}`}
                >
                  <label
                    className={`font-label-caps text-secondary text-xs uppercase tracking-widest ${isModern ? 'text-[10px]' : ''}`}
                  >
                    {language === 'tr' ? 'TEKNİK NOTLAR' : 'TECHNICAL NOTES'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim resize-none font-sans outline-none ${isModern ? 'text-sm' : ''}`}
                    placeholder={
                      language === 'tr'
                        ? 'Projenizle ilgili özel gereksinimleri belirtiniz...'
                        : 'Specify custom requirements regarding your project...'
                    }
                  />
                </div>

                {submitError && (
                  <div
                    className={`p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs ${isModern ? 'p-3 text-[10px]' : ''}`}
                  >
                    HATA // {submitError}
                  </div>
                )}

                <BrutalistButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className={`w-full md:w-fit py-4 px-12 flex items-center justify-center gap-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isModern ? 'duration-200 py-3 px-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]' : 'transition-all'}`}
                >
                  {isSubmitting ? t('quote.submitting') : t('quote.submitBtn')}{' '}
                  <ArrowRight size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                </BrutalistButton>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className={`lg:col-span-4 lg:col-start-9 space-y-12 ${isModern ? 'space-y-8' : ''}`}>
            <div
              className={`bg-primary text-on-primary p-12 border-4 border-primary ${isModern ? 'p-8 shadow-sm' : 'shadow-lg'}`}
            >
              <h3
                className={`font-serif text-headline-md mb-8 uppercase ${isModern ? 'text-base mb-6' : ''}`}
              >
                {language === 'tr' ? 'Merkez Ofis' : 'Head Office'}
              </h3>
              <div className={`space-y-8 ${isModern ? 'space-y-6' : ''}`}>
                <div className={`flex gap-4 ${isModern ? 'gap-3' : ''}`}>
                  <MapPin className={`shrink-0 ${isModern ? 'size-5' : 'size-6'}`} size={24} />
                  <p className={`font-sans text-body-md opacity-90 ${isModern ? 'text-sm' : ''}`}>
                    {COMPANY_INFO.addressLine1}
                    <br />
                    {COMPANY_INFO.addressLine2}
                    <br />
                    {COMPANY_INFO.country}, {COMPANY_INFO.postalCode}
                  </p>
                </div>

                <div className={`border-t border-on-primary/20 pt-6 ${isModern ? 'pt-4' : ''}`}>
                  <h4
                    className={`font-serif text-headline-sm mb-4 uppercase ${isModern ? 'text-xs mb-3' : ''}`}
                  >
                    {language === 'tr' ? 'İrtibat' : 'Contact'}
                  </h4>
                  <div className={`space-y-4 ${isModern ? 'space-y-3' : ''}`}>
                    <div className={`flex gap-4 ${isModern ? 'gap-3' : ''}`}>
                      <Phone className={`shrink-0 ${isModern ? 'size-5' : 'size-6'}`} size={24} />
                      <p
                        className={`font-sans text-body-md opacity-90 ${isModern ? 'text-sm' : ''}`}
                      >
                        <a href={`tel:${COMPANY_INFO.phoneCall}`} className="hover:underline">
                          {COMPANY_INFO.phone}
                        </a>
                      </p>
                    </div>
                    <div className={`flex gap-4 ${isModern ? 'gap-3' : ''}`}>
                      <Mail className={`shrink-0 ${isModern ? 'size-5' : 'size-6'}`} size={24} />
                      <p
                        className={`font-sans text-body-md opacity-90 ${isModern ? 'text-sm' : ''}`}
                      >
                        <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                          {COMPANY_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`w-full h-[400px] border-4 border-primary bg-surface-dim relative group overflow-hidden ${isModern ? 'h-[300px] shadow-sm' : 'shadow-lg'}`}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiiWPn8Cr0hOyufo-f_x7S3g-CCc0WmV07MoZCbbRbp4lLKL-JO9fggh5pt8pUvgz4G5U-Ih6uFarJgWejLHkWGO-nR4uLRfOf_6_ZTjbPfms66JsK4OAR7gAmdqJ6nP6X_oQtnwmtDdN-5RM4vsAW-lFZYIvVXP8sgwKN5Q_r1XFMx_xj11taFBLGzSEWLe9LwfyqD8uRX0v2IbADwDFCGqfTDVLn7wU8H_eU_zEGU3Cj__iPes8BiXqSkDJ_bEygmrC30SfbLdgU"
                alt="Map View"
                className={`w-full h-full object-cover grayscale mix-blend-multiply opacity-80 ${isModern ? 'opacity-70' : ''}`}
              />
              <div
                className={`absolute inset-0 border-[20px] border-surface/10 pointer-events-none ${isModern ? 'border-[16px]' : ''}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;
