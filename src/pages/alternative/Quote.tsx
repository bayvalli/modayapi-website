import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Hash, ShieldAlert } from 'lucide-react';
import { SEO } from '../../components/alternative/SEO';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';

export const Quote: React.FC = () => {
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
    setIsSubmitting(true);

    try {
      // Send payload via FormSubmit to info@modayapi.com
      const res = await fetch('https://formsubmit.co/ajax/info@modayapi.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Talep_Turu: sector.toUpperCase(),
          Ad_Soyad: formData.name,
          Sirket_Kurum: formData.company || 'Bireysel',
          Eposta: formData.email,
          Telefon: formData.phone,
          Detaylar: {
            ...formData,
          },
          _subject: `Moda Yapı Teklif Talebi [${sector.toUpperCase()}] - ${formData.name}`,
        }),
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
        title="Dinamik Teklif ve Keşif Yönetimi"
        description="Müteahhitlik, hazır inşaat malzemesi tedariki, toptan kömür tedariki ve Tutar.io / CloudBook lisansları için anlık teklif talep formu."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Header */}
        <div className="border-b-4 border-primary pb-8 mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // OTOMATİK MALİYETE ANALİZİ
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
            TEKLİF KEŞİF TALEBİ
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
                      HİZMET ALANINI SEÇİNİZ:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 border-4 border-primary bg-primary gap-1">
                      <button
                        type="button"
                        onClick={() => setSector('construction')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'construction' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        Taahhüt
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('materials')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'materials' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        Malzeme
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('coal')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'coal' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        Kömür Tedarik
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('software')}
                        className={`p-4 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${sector === 'software' ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-neutral-800'}`}
                      >
                        Dijital / Yazılım
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
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Adınız Soyadınız"
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
                          Şirket / Kurum Adı
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Opsiyonel (Örn. Yapı Ltd.)"
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
                          E-Posta Adresi *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="ornek@alanadi.com"
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
                          Telefon Numarası *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+90 5XX XXX XX XX"
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
                              YAPI TAAHHÜT MODELİ
                            </label>
                            <select
                              id="constructionType"
                              name="constructionType"
                              value={formData.constructionType}
                              onChange={handleChange}
                              className="w-full border-2 border-primary p-3 bg-white focus:outline-none font-sans text-sm"
                            >
                              <option value="Kat Karşılığı Taahhüt">Kat Karşılığı Taahhüt</option>
                              <option value="Anahtar Teslim İnşaat">Anahtar Teslim İnşaat</option>
                              <option value="Kentsel Dönüşüm">Kentsel Dönüşüm</option>
                              <option value="Komple Daire / Bina Tadilatı">
                                Komple Daire / Bina Tadilatı
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="areaSize"
                              className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                            >
                              PROJE ALANI (m²)
                            </label>
                            <input
                              type="number"
                              id="areaSize"
                              name="areaSize"
                              placeholder="Örn: 450"
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
                            İSTEDİĞİNİZ MALZEME DETAYI
                          </label>
                          <textarea
                            id="materialRequest"
                            name="materialRequest"
                            rows={3}
                            placeholder="Kaba İnşaat Malzemeleri, Demir, C30 Hazır Beton numuneleri vb..."
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
                            TALEP EDİLEN REZERV (TON)
                          </label>
                          <input
                            type="number"
                            id="coalAmount"
                            name="coalAmount"
                            placeholder="Toptan alım tonaj miktarını belirtiniz (Örn. 24)"
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
                            DİJİTAL SÜRÜM / LİSANS
                          </label>
                          <select
                            id="softwarePackage"
                            name="softwarePackage"
                            value={formData.softwarePackage}
                            onChange={handleChange}
                            className="w-full border-2 border-primary p-3 bg-white focus:outline-none font-sans text-sm"
                          >
                            <option value="Tutar.io Muhasebe Standard">
                              Tutar.io Muhasebe - Solo Lisans
                            </option>
                            <option value="Tutar.io Pro Multi-Company">
                              Tutar.io Pro - Çoklu Şirket Yönetimi
                            </option>
                            <option value="CloudBook Enterprise">
                              CloudBook - Çok Katmanlı Enterprise Bulut Sistemi
                            </option>
                            <option value="Tutar + Cloudbook Premium Kombin">
                              Tutar & CloudBook - Tam Dijital Çözüm Paketi
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
                        Özel Notlar / Ek Şartnameler
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        placeholder="Örn: Zemin etüdü yapıldı, imar izinleri alındı..."
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
                      <span>
                        {isSubmitting ? 'TEKLİF ŞABLONU ÜRETİLİYOR...' : 'TEKLİF TALEBİNİ GÖNDER'}
                      </span>
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
                    SİSTEM KEŞFİ YAPILDI
                  </h3>
                  <p className="text-sm font-sans mb-8">
                    Teklif ve şartname ön-talebiniz info@modayapi.com idaresine başarıyla
                    iletilmiştir. Yapı mühendislerimiz detayları en kısa sürede analiz ederek size
                    e-posta ve telefon üzerinden bir teklif tablosu gönderecektir.
                  </p>

                  <div className="border-4 border-green-200 bg-white p-6 max-w-sm mx-auto shadow-sm">
                    <div className="flex items-center gap-2 justify-center text-[#111111] font-mono text-xs mb-1">
                      <Hash size={14} className="opacity-40" />
                      <span>TEKLİF PROTOKOL NO:</span>
                    </div>
                    <span className="font-mono font-bold text-2xl text-primary">{ticketId}</span>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 text-xs font-mono font-bold uppercase underline hover:no-underline text-primary cursor-pointer"
                  >
                    YENİ BİR TEKLİF TALEBİ GÖNDER
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guidelines Sidebar */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <div className="bg-primary text-on-primary p-8 md:p-10 border-4 border-primary pb-block-gap">
              <span className="font-mono text-xs text-on-primary/50 block mb-2">
                // TEKLİF REHBERİ
              </span>
              <h4 className="font-serif text-2xl uppercase font-bold text-white mb-6">
                MÜHENDİSLİK KEŞİFLERİ
              </h4>
              <p className="text-sm opacity-80 leading-relaxed mb-6 font-sans">
                Tüm tekliflerimiz yerinde teknik analiz yapıldıktan sonra kesinlik kazanır. Form
                üzerinden gönderilen veriler bir ön-şablon oluşturmak için kullanılır.
              </p>

              <ul className="space-y-4 text-xs font-mono opacity-90">
                <li className="flex gap-2">
                  <span className="font-bold text-white">[01]</span>
                  <span>Şeffaf maliyet hesaplamaları.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">[02]</span>
                  <span>Zemin koşullarına uygun statik bütçeleme.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">[03]</span>
                  <span>Yazılım lisansları anında teslim edilir.</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-primary p-8 bg-surface-container relative">
              <div className="flex items-start gap-4 text-primary">
                <ShieldAlert size={24} className="flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] text-secondary tracking-widest block mb-1 uppercase">
                    ÖNEMLİ BİLGİLENDİRME
                  </span>
                  <h5 className="font-mono text-xs font-bold uppercase mb-2">FORM GÜVENLİĞİ</h5>
                  <p className="text-xs text-secondary leading-relaxed">
                    Bizimle paylaştığınız tüm kişisel ve kurumsal bilgiler Kişisel Verileri Koruma
                    Kanunu (KVKK) uyarınca kesinlikle gizli tutulur ve şifrelenmiş sunucularımızda
                    saklanır.
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
