import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Hash, ShieldAlert } from 'lucide-react';
import { SEO } from '../../components/alternative/SEO';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';
import { COMPANY_INFO } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { validateQuoteFields } from '../../utils/validation';

export const Quote: React.FC = () => {
  const { t, language } = useLanguage();
  const [sector, setSector] = useState<'construction' | 'materials' | 'coal' | 'software'>(
    'construction'
  );
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    // sector specific:
    areaSize: '',
    constructionType: 'Kat Karşılığı Taahhüt',
    materialRequest: '',
    coalAmount: '',
    softwarePackage: 'Tutar.io Standard',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Unified Validation Call
    const validation = validateQuoteFields(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
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
    const trimmedNotes = formData.notes.trim();

    setIsSubmitting(true);

    try {
      const payload: Record<string, unknown> = {
        _subject: `${COMPANY_INFO.shortName} Teklif Talebi [${sector.toUpperCase()}] - ${trimmedName}`,
        'Form Source': `${COMPANY_INFO.shortName} Alternative Quote`,
        Talep_Turu: sector.toUpperCase(),
        Ad_Soyad: trimmedName,
        Sirket_Kurum: formData.company || 'Bireysel',
        Eposta: trimmedEmail,
        Telefon: trimmedPhone,
      };

      if (sector === 'construction') {
        payload['Yapı_Taahhüt_Modeli'] = formData.constructionType;
        payload['Proje_Alanı_M2'] = formData.areaSize;
      } else if (sector === 'materials') {
        payload['Talep_Edilen_Malzeme_Sınıfı'] = formData.materialRequest;
      } else if (sector === 'coal') {
        payload['Kömür_Miktarı'] = formData.coalAmount;
      } else if (sector === 'software') {
        payload['Yazılım_Paketi'] = formData.softwarePackage;
      }

      payload['Ozel_Notlar'] = trimmedNotes;
      payload['_required'] = 'Ad_Soyad,Eposta,Telefon,Ozel_Notlar';

      // Send payload via FormSubmit to {COMPANY_INFO.email}
      const res = await fetch(COMPANY_INFO.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Create custom proposal code TLP-XXXX as specified in README
        const randId = `TLP-${Math.floor(1000 + Math.random() * 9000)}`;
        setTicketId(randId);
        setSubmitSuccess(true);
        // reset
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          areaSize: '',
          constructionType: 'Kat Karşılığı Taahhüt',
          materialRequest: '',
          coalAmount: '',
          softwarePackage: 'Tutar.io Standard',
          notes: '',
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title={t('quote.title')}
        description={
          language === 'tr'
            ? 'Müteahhitlik, hazır inşaat malzemesi tedariki, toptan kömür tedariki ve Tutar.io / CloudBook lisansları için anlık teklif talep formu.'
            : 'Dynamic budgeting and price specifications for contracting, raw building supply, high-calorie coal, and digital licenses.'
        }
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Header */}
        <div className="border-b-4 border-primary pb-8 mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // {language === 'tr' ? 'OTOMATİK MALİYET ANALİZİ' : 'AUTOMATED STATIC BUDGETING'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none font-sans">
            {t('quote.title')}
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-gutter items-stretch">
          {/* Main Form container */}
          <div className="col-span-12 lg:col-span-8 border-4 border-primary p-8 md:p-12 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.div key="quote-inputs">
                  {/* Selector Tabs */}
                  <div className="mb-10">
                    <span className="font-mono text-xs text-secondary font-bold uppercase mb-3 block">
                      {t('quote.sectorTitle')}:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 border-4 border-primary bg-primary gap-1">
                      <button
                        type="button"
                        onClick={() => setSector('construction')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'construction' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        {t('quote.construction')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('materials')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'materials' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        {t('quote.materials')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('coal')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'coal' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        {t('quote.coal')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('software')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'software' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        {t('quote.software')}
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                        >
                          {t('contact.fullName')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder={t('contact.placeholderName')}
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                        >
                          {t('quote.fields.companyName')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder={t('quote.fields.companyPlaceholder')}
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                        >
                          {t('contact.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder={t('contact.placeholderEmail')}
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                        >
                          {t('contact.phone')} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder={t('contact.placeholderPhone')}
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Sector Specifics */}
                    <div className="border-l-4 border-primary pl-6 py-2 space-y-6">
                      {sector === 'construction' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="constructionType"
                              className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                            >
                              {t('quote.fields.taahhutModel')}
                            </label>
                            <select
                              id="constructionType"
                              name="constructionType"
                              value={formData.constructionType}
                              onChange={handleChange}
                              className="w-full border-2 border-primary p-3 bg-white focus:outline-none font-sans text-sm"
                            >
                              <option value="Kat Karşılığı Taahhüt">
                                {t('quote.models.katKarsiligi')}
                              </option>
                              <option value="Anahtar Teslim İnşaat">
                                {t('quote.models.anahtarTeslim')}
                              </option>
                              <option value="Kentsel Dönüşüm">
                                {language === 'tr' ? 'Kentsel Dönüşüm' : 'Urban Renewal'}
                              </option>
                              <option value="Komple Daire / Bina Tadilatı">
                                {language === 'tr'
                                  ? 'Komple Daire / Bina Tadilatı'
                                  : 'Full Apartment / Building Renovation'}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="areaSize"
                              className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                            >
                              {t('quote.fields.projectArea')}
                            </label>
                            <input
                              type="number"
                              id="areaSize"
                              name="areaSize"
                              placeholder={t('quote.fields.projectAreaPlaceholder')}
                              value={formData.areaSize}
                              onChange={handleChange}
                              className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                            />
                          </div>
                        </div>
                      )}

                      {sector === 'materials' && (
                        <div>
                          <label
                            htmlFor="materialRequest"
                            className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                          >
                            {t('quote.fields.materialType')}
                          </label>
                          <textarea
                            id="materialRequest"
                            name="materialRequest"
                            rows={3}
                            placeholder={
                              language === 'tr'
                                ? 'Kaba İnşaat Malzemeleri, Demir, C30 Hazır Beton numuneleri vb...'
                                : 'Raw Concrete, Corrugated Steel, C30 Ready-mix specimens...'
                            }
                            value={formData.materialRequest}
                            onChange={handleChange}
                            className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm resize-none"
                          ></textarea>
                        </div>
                      )}

                      {sector === 'coal' && (
                        <div>
                          <label
                            htmlFor="coalAmount"
                            className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                          >
                            {t('quote.fields.quantity')}
                          </label>
                          <input
                            type="number"
                            id="coalAmount"
                            name="coalAmount"
                            placeholder={t('quote.fields.quantityPlaceholder')}
                            value={formData.coalAmount}
                            onChange={handleChange}
                            className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm"
                          />
                        </div>
                      )}

                      {sector === 'software' && (
                        <div>
                          <label
                            htmlFor="softwarePackage"
                            className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                          >
                            {t('quote.fields.softwareApp')}
                          </label>
                          <select
                            id="softwarePackage"
                            name="softwarePackage"
                            value={formData.softwarePackage}
                            onChange={handleChange}
                            className="w-full border-2 border-primary p-3 bg-white focus:outline-none font-sans text-sm"
                          >
                            <option value="Tutar.io Muhasebe Standard">
                              {t('quote.softwaresList.tutario')}
                            </option>
                            <option value="Tutar.io Pro Multi-Company">
                              {language === 'tr'
                                ? 'Tutar.io Pro - Çoklu Şirket Yönetimi'
                                : 'Tutar.io Pro - Multi-Company Management'}
                            </option>
                            <option value="CloudBook Enterprise">
                              {t('quote.softwaresList.cloudbook')}
                            </option>
                            <option value="Tutar + Cloudbook Premium Kombin">
                              {language === 'tr'
                                ? 'Tutar & CloudBook - Tam Dijital Çözüm Paketi'
                                : 'Tutar & CloudBook - Complete Digital Suite'}
                            </option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                      >
                        {t('quote.fields.notes')} *
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        required
                        placeholder={t('quote.fields.notesPlaceholder')}
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full border-2 border-primary p-3 focus:bg-primary/5 focus:outline-none transition-colors font-sans text-sm resize-none"
                      ></textarea>
                    </div>

                    <BrutalistButton
                      id="quote-submit-btn"
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-between items-center py-4"
                    >
                      <span>{isSubmitting ? t('quote.submitting') : t('quote.submitBtn')}</span>
                      <ChevronRight size={16} />
                    </BrutalistButton>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="quote-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-4 border-green-600 bg-green-50 text-green-950 p-8 text-center"
                >
                  <div className="flex justify-center text-green-600 mb-4">
                    <CheckCircle2 size={48} />
                  </div>

                  <h3 className="font-serif text-3xl font-bold uppercase mb-2 text-green-900">
                    {t('quote.successTitle')}
                  </h3>
                  <p className="text-sm font-sans mb-8">
                    {t('quote.successDesc').replace('{email}', COMPANY_INFO.email)}
                  </p>

                  <div className="border-4 border-green-200 bg-white p-6 max-w-sm mx-auto shadow-sm">
                    <div className="flex items-center gap-2 justify-center text-secondary font-mono text-xs mb-1">
                      <Hash size={14} className="opacity-40" />
                      <span>{t('quote.ticketLabel')}</span>
                    </div>
                    <span className="font-mono font-bold text-2xl text-primary">{ticketId}</span>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 text-xs font-mono font-bold uppercase underline hover:no-underline text-primary cursor-pointer"
                  >
                    {t('quote.newBtn')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guidelines Sidebar */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <div className="bg-primary text-on-primary p-8 md:p-10 border-4 border-primary pb-block-gap">
              <span className="font-mono text-xs text-on-primary/50 block mb-2">
                // {language === 'tr' ? 'TEKLİF REHBERİ' : 'PROPOSAL GUIDELINE'}
              </span>
              <h4 className="font-serif text-2xl uppercase font-bold text-white mb-6 font-sans">
                {t('quote.infoTitle')}
              </h4>
              <p className="text-sm opacity-80 leading-relaxed mb-6 font-sans">
                {t('quote.infoDesc')}
              </p>

              <ul className="space-y-4 text-xs font-mono opacity-90">
                <li className="flex gap-2">
                  <span className="font-bold text-white">[01]</span>
                  <span>{t('quote.feature1').replace('[01] ', '')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">[02]</span>
                  <span>{t('quote.feature2').replace('[02] ', '')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">[03]</span>
                  <span>{t('quote.feature3').replace('[03] ', '')}</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-primary p-8 bg-surface-container relative">
              <div className="flex items-start gap-4 text-primary">
                <ShieldAlert size={24} className="flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] text-secondary tracking-widest block mb-1 uppercase">
                    {t('quote.safetyTitle')}
                  </span>
                  <h5 className="font-mono text-xs font-bold uppercase mb-2">
                    {language === 'tr' ? 'FORM GÜVENLİĞİ' : 'DATA PROTECTION'}
                  </h5>
                  <p className="text-xs text-secondary leading-relaxed font-sans">
                    {t('quote.safetyDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;
