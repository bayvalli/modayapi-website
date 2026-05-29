import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { SEO } from '../../components/alternative/SEO';
import { BrutalistButton } from '../../components/alternative/BrutalistButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Yalvaç Leblebiciler Coordinates for map
  const position = { lat: 38.2949, lng: 31.1784 };

  // Dynamic API Key extraction
  const mapsApiKey =
    (process.env.GOOGLE_MAPS_PLATFORM_KEY as string) ||
    (import.meta.env.VITE_GOOGLE_MAPS_PLATFORM_KEY as string) ||
    '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Direct FormSubmit integration for secure client-side delivery without backends
      const response = await fetch('https://formsubmit.co/ajax/info@modayapi.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Ad_Soyad: formData.name,
          Eposta: formData.email,
          Telefon: formData.phone,
          Mesaj: formData.message,
          _subject: `Moda Yapı Web İletişim - ${formData.name}`,
        }),
      });

      if (response.ok) {
        // Generate random message ticket (MSG-XXXXX) as specified in README
        const randId = `MSG-${Math.floor(10000 + Math.random() * 90000)}`;
        setTicketId(randId);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Submit failed');
      }
    } catch (err) {
      console.error(err);
      setSubmitError(true);
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
        title="Bize Ulaşın - Yalvaç İrtibat Ofisimiz"
        description="MAY MODA YAPI Yalvaç Genel Ofisimiz ile irtibata geçin. Adres, telefon numaraları, e-posta adresleri ve canlı harita konumu."
      />

      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Title */}
        <div className="border-b-4 border-primary pb-8 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-secondary uppercase block mb-3">
            // 24/7 İLETİŞİM HATLARI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-primary leading-none">
            İRTİBAT KANALLARI
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-gutter mb-20">
          {/* Form & Info */}
          <div className="col-span-12 lg:col-span-7 border-4 border-primary p-8 md:p-12 bg-white flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary uppercase mb-8">
                İLETİŞİM FORMU
              </h2>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
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
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-2 border-primary p-3 font-sans text-sm focus:bg-primary/5 focus:outline-none transition-colors"
                        placeholder="Örn. Ahmet Yılmaz"
                      />
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
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 font-sans text-sm focus:bg-primary/5 focus:outline-none transition-colors"
                          placeholder="ahmet@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                        >
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-2 border-primary p-3 font-sans text-sm focus:bg-primary/5 focus:outline-none transition-colors"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-mono text-xs font-bold text-primary uppercase block mb-2"
                      >
                        Mesajınız *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-2 border-primary p-3 font-sans text-sm focus:bg-primary/5 focus:outline-none transition-colors resize-none"
                        placeholder="İnşaat, tadilat veya diğer taleplerinizi buraya yazabilirsiniz..."
                      ></textarea>
                    </div>

                    {submitError && (
                      <div className="border-4 border-red-600 bg-red-50 text-red-900 p-4 font-mono text-xs flex gap-3 items-center">
                        <AlertTriangle size={18} className="text-red-700" />
                        <span>
                          Bağlantı hatası: Mesaj iletilemedi, lütfen info@modayapi.com adresini
                          deneyin.
                        </span>
                      </div>
                    )}

                    <BrutalistButton
                      id="contact-submit-btn"
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-between items-center py-4"
                    >
                      <span>{isSubmitting ? 'MESAJ GÖNDERİLİYOR...' : 'MESAJI İLETİN'}</span>
                      <Send size={16} />
                    </BrutalistButton>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="border-4 border-green-600 bg-green-50 text-green-900 p-8 text-center"
                  >
                    <div className="flex justify-center mb-4 text-green-600">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase text-green-900 mb-2">
                      İLETİNİZ ALINDI!
                    </h3>
                    <p className="text-sm font-sans mb-6">
                      Mesajınız doğrudan info@modayapi.com ekibimize başarıyla ulaştırılmıştır. Kısa
                      süre içinde dönüş sağlanacaktır.
                    </p>

                    <div className="border-t border-dashed border-green-200 pt-6 mt-6 max-w-sm mx-auto font-mono text-xs">
                      <span className="opacity-60 block">İŞLEM NUMARASI // TICKET:</span>
                      <span className="font-bold text-lg text-primary">{ticketId}</span>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 text-xs font-mono font-bold uppercase underline hover:no-underline text-primary cursor-pointer"
                    >
                      YENİ MESAJ GÖNDER
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Location details */}
          <div className="col-span-12 lg:col-span-5 bg-primary text-on-primary p-8 md:p-12 flex flex-col justify-between border-4 border-primary">
            <div>
              <span className="font-mono text-xs text-on-primary/60 block mb-2">
                // GENEL MERKEZ
              </span>
              <h2 className="font-serif text-3xl font-bold text-white uppercase mb-8">
                İRTİBAT MERKEZİ
              </h2>

              <div className="space-y-8 font-sans">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 mt-1">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
                      Adres Bilgisi
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Leblebiciler Mah. Hastane Cad. No: 54
                      <br />
                      Yalvaç / Isparta
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 mt-1">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
                      Telefon Numarası
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <a href="tel:+905323118210" className="hover:underline">
                        +90 532 311 82 10
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
                      E-Posta Kanalları
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <a href="mailto:info@modayapi.com" className="hover:underline">
                        info@modayapi.com
                      </a>
                      <br />
                      <a href="mailto:destek@modayapi.com" className="hover:underline">
                        destek@modayapi.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-on-primary/10 pt-8 mt-12">
              <span className="font-mono text-[10px] tracking-widest text-on-primary/40 uppercase block mb-3">
                ÇALIŞMA SAATLERİ
              </span>
              <div className="flex justify-between font-mono text-xs opacity-75">
                <span>PAZARTESİ - CUMARTESİ:</span>
                <span>08:30 - 18:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="border-4 border-primary bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="border-b-4 border-primary p-6 bg-surface-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono text-xs text-secondary mb-1 block">
                // HARİTA RESMİ KOORDİNATLARI
              </span>
              <h3 className="font-serif text-2xl font-bold uppercase text-primary">
                YALVAÇ MERKEZ OFİS KONUMUMUZ
              </h3>
            </div>

            <a
              href="https://maps.google.com/?q=38.2949,31.1784"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-4 py-2 bg-primary text-on-primary font-mono text-xs uppercase hover:bg-neutral-800 transition-all font-bold"
            >
              <span>HARİTADA AÇ (DIŞ LİNK)</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Conditional Map Rendering based on active API Keys */}
          <div className="w-full h-[450px] relative bg-neutral-100">
            {mapsApiKey ? (
              <APIProvider apiKey={mapsApiKey}>
                <Map
                  defaultCenter={position}
                  defaultZoom={15}
                  gestureHandling={'cooperative'}
                  disableDefaultUI={false}
                >
                  <Marker position={position} />
                </Map>
              </APIProvider>
            ) : (
              // Stunning Blueprint Fallback Map
              <div className="w-full h-full bg-[#121212] flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div
                  className="absolute w-[400px] h-[400px] border border-dashed border-white/15 rounded-full pointer-events-none animate-spin"
                  style={{ animationDuration: '60s' }}
                ></div>
                <div className="absolute w-[200px] h-[200px] border border-dashed border-white/20 rounded-full pointer-events-none"></div>

                <div className="z-10 max-w-md bg-[#1a1a1a]/95 border-2 border-white/20 p-8 shadow-2xl relative">
                  <div className="absolute top-0 left-4 bg-white text-black font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 -translate-y-1/2">
                    COORDINATE RADAR
                  </div>

                  <span className="font-mono text-xs text-white/50 block mb-2">
                    GPS: 38.2938° N, 31.1856° E
                  </span>
                  <h4 className="font-serif text-white text-2xl uppercase mb-4 font-bold tracking-tight">
                    BRÜTALİST HARİTA DEKLARESİ
                  </h4>
                  <p className="text-xs text-white/70 font-sans leading-relaxed mb-6">
                    Mülkiyet sınır hassasiyetleri gereği ve statik Google Haritalar API
                    kısıtlamalarını aşmak adına, ofis adresimizi doğrudan gerçek uydu konumlarıyla
                    dış harita sistemleri üzerinden ziyaret edebilirsiniz.
                  </p>

                  <a
                    href="https://maps.google.com/?q=38.2938,31.1856"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BrutalistButton variant="secondary" className="w-full text-xs font-mono py-3">
                      <span>GERÇEK COĞRAFİ KONUMA GİT</span>
                      <ExternalLink size={14} />
                    </BrutalistButton>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
