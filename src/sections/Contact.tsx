import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export const Contact: React.FC = () => {
  const officeLocation = { lat: 38.294812, lng: 31.178438 };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Lütfen Ad Soyad ve E-posta alanlarını doldurun.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@modayapi.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Katılımcı / Form': 'Moda Yapı İletişim Formu',
          'Ad Soyad': formData.name,
          'E-posta': formData.email,
          Mesaj: formData.message || 'Mesaj belirtilmedi.',
        }),
      });

      if (response.ok) {
        const randNum = Math.floor(10000 + Math.random() * 90000);
        setTicketId(`MSG-${randNum}`);
        setSubmitted(true);
      } else {
        throw new Error('Form sunucuya iletilemedi. Lütfen daha sonra tekrar deneyiniz.');
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      setSubmitError(error.message || 'Lütfen internet bağlantınızı kontrol ediniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1440px] mx-auto px-margin pt-block-gap pb-block-gap overflow-hidden"
    >
      {/* Header Section */}
      <div className="grid grid-cols-12 gap-gutter mb-block-gap">
        <div className="col-span-12 md:col-span-11 md:col-start-2 text-left">
          <h1 className="font-serif text-headline-xl text-primary break-words">İLETİŞİM</h1>
        </div>
      </div>

      {/* Asymmetric Grid Content */}
      <div className="grid grid-cols-12 gap-gutter relative">
        {/* Map Area */}
        <div className="col-span-12 md:col-span-5 md:col-start-1 h-[600px] bg-secondary-container border-2 border-primary relative z-0 mb-asymmetric md:mb-0 overflow-hidden">
          {!hasValidKey ? (
            <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-surface-container font-sans">
              <h3 className="text-headline-sm text-primary mb-4">
                Google Maps API Anahtarı Gerekli
              </h3>
              <p className="text-body-md text-secondary mb-6 max-w-xs">
                Haritayı görüntülemek için lütfen GOOGLE_MAPS_PLATFORM_KEY anahtarını ayarlara
                ekleyin.
              </p>
              <div className="text-left text-sm space-y-2 opacity-70">
                <p>1. Ayarlar (Gear simgesi) ve ardından Secrets panelini açın.</p>
                <p>2. "GOOGLE_MAPS_PLATFORM_KEY" adında bir secret oluşturun.</p>
                <p>3. API anahtarınızı yapıştırın ve kaydedin.</p>
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
              Merkez Ofis
            </h3>
            <p className="text-body-lg text-primary font-sans">
              Leblebiciler Mah. Hastane Cad. No:54
              <br />
              Yalvaç, Isparta
              <br />
              Türkiye, 32400
            </p>
          </div>

          <div className="border-t-4 border-primary pt-6">
            <h3 className="font-label-caps text-secondary mb-2 tracking-widest uppercase">
              İrtibat
            </h3>
            <p className="text-body-lg text-primary font-sans">
              +90 532 311 82 10
              <br />
              info@modayapi.com
            </p>
          </div>

          <div className="border-t-4 border-primary pt-6">
            <h3 className="font-label-caps text-secondary mb-4 tracking-widest uppercase">Ağlar</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/modayapias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
      <div className="grid grid-cols-12 gap-gutter mt-block-gap">
        <div className="col-span-12 md:col-span-6 md:col-start-4 bg-surface-container border-4 border-primary p-margin relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary bg-surface z-10"></div>

          {submitted ? (
            <div className="flex flex-col text-left py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-emerald-600 animate-pulse rounded-full"></div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold">
                  Transaksiyon Başarılı
                </h3>
              </div>
              <h2 className="font-serif text-headline-md text-primary mb-8 uppercase leading-tight">
                MESAJINIZ ALINDI.
              </h2>

              <div className="bg-surface border-2 border-primary p-6 font-mono text-xs space-y-4 mb-8">
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">TİKET NO //</span>
                  <span className="font-bold text-primary">{ticketId}</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">GÖNDEREN //</span>
                  <span className="font-bold text-primary uppercase">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">ALICI //</span>
                  <span className="font-bold text-primary">MODA YAPI A.Ş.</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-2">
                  <span className="text-secondary">TARIH //</span>
                  <span className="font-bold text-primary">
                    {new Date().toLocaleString('tr-TR')}
                  </span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-secondary">DURUM //</span>
                  <span className="font-bold px-2 py-[2px] bg-primary text-on-primary">
                    MÜHENDİS_ONAYI_BEKLİYOR
                  </span>
                </div>
              </div>

              <p className="text-body-md text-secondary mb-8 font-sans">
                Mesajınız teknik veri tabanımıza kaydedildi. Mühendislerimiz projeyi inceledikten
                sonra en kısa sürede sizinle iletişime geçecektir.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="w-full border-4 border-primary bg-surface py-4 font-mono text-xs font-bold text-primary hover:bg-primary hover:text-on-primary transition-colors duration-200 uppercase tracking-widest"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-headline-md text-primary mb-12 uppercase">
                Mesaj Bırakın
              </h2>
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="flex flex-col relative group">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    Ad Soyad
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                  />
                </div>
                <div className="flex flex-col relative group">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    E-posta
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                  />
                </div>
                <div className="flex flex-col relative group mb-8">
                  <label className="font-label-caps text-secondary mb-2 uppercase tracking-widest text-xs">
                    Proje Detayı
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b-2 border-primary px-0 py-2 text-body-lg text-primary focus:ring-0 focus:border-b-4 focus:border-primary transition-all outline-none resize-none"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
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
                  {isSubmitting ? 'İletiliyor...' : 'GÖNDER'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
