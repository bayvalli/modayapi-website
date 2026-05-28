import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrutalistButton } from '../components/BrutalistButton';

const Quote: React.FC = () => {
  const [hizmetTuru, setHizmetTuru] = useState('MÜTEAHHİTLİK');
  const [formData, setFormData] = useState({ name: '', location: '', area: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const showProjectLocation = hizmetTuru !== 'YAZILIM FAALİYETLERİ';
  const showTotalArea = hizmetTuru === 'MÜTEAHHİTLİK';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Lütfen Ad Soyad / Unvan alanını doldurun.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload: Record<string, string> = {
        "Katılımcı / Form": "Moda Yapı Teklif Talep Formu",
        "Ad Soyad / Unvan": formData.name,
        "Hizmet Türü": hizmetTuru,
        "Teknik Notlar / İstekler": formData.notes || 'Belirtilmedi'
      };

      if (showProjectLocation && formData.location) {
        payload["Proje Konumu"] = formData.location;
      }
      if (showTotalArea && formData.area) {
        payload["Yapı Alanı (M²)"] = formData.area;
      }

      const response = await fetch("https://formsubmit.co/ajax/info@modayapi.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const randNum = Math.floor(1000 + Math.random() * 9000);
        setTicketId(`TLP-${randNum}`);
        setSubmitted(true);
      } else {
        throw new Error('Talep sunucuya iletilemedi. Lütfen daha sonra tekrar deneyiniz.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Lütfen internet bağlantınızı kontrol ediniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap px-margin"
    >
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-block-gap">
          <h1 className="font-serif text-headline-xl text-primary leading-none tracking-tighter uppercase">
            TEKNİK TALEP<br />MERKEZİ.
          </h1>
          <p className="mt-8 text-body-lg text-secondary max-w-2xl font-sans">
            Projenizin ölçeği ne olursa olsun, mimari bütünlüğü ve yapısal güvenliği sağlamak için 
            teknik detayları mühendislik standartlarımız çerçevesinde değerlendiriyoruz.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-asymmetric items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-surface-container border-4 border-primary p-8 md:p-12 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center">
              <ShieldCheck className="text-on-primary" size={24} />
            </div>
            
            <div className="flex justify-between items-center mb-12 border-b-4 border-primary pb-6">
              <h2 className="font-serif text-headline-md text-primary uppercase">Proje Teklif Formu</h2>
              <span className="hidden md:block font-label-caps text-[10px] bg-primary text-on-primary px-3 py-1">MÜHENDİSLİK STANDARTLARI</span>
            </div>

            {submitted ? (
              <div className="flex flex-col text-left py-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-emerald-600 animate-pulse rounded-full"></div>
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold">Mühendislik Talebi Kaydedildi</span>
                </div>
                <h2 className="font-serif text-headline-md text-primary mb-8 uppercase leading-tight">MÜHENDİSLİK ANALİZ TALEBİ ALINDI.</h2>
                
                <div className="bg-surface border-2 border-primary p-6 font-mono text-xs space-y-4 mb-8">
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-secondary">TALEP ID //</span>
                    <span className="font-bold text-primary">{ticketId}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-secondary">TALEP SAHİBİ //</span>
                    <span className="font-bold text-primary uppercase">{formData.name}</span>
                  </div>
                  {showProjectLocation && formData.location && (
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-secondary">KONUM //</span>
                      <span className="font-bold text-primary uppercase">{formData.location}</span>
                    </div>
                  )}
                  {showTotalArea && formData.area && (
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-secondary">YAPISAL ALAN //</span>
                      <span className="font-bold text-primary">{formData.area} M²</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-secondary">HİZMET KATEGORİSİ //</span>
                    <span className="font-bold text-primary">{hizmetTuru}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-secondary">SİSTEM KAYIT TARIHİ //</span>
                    <span className="font-bold text-primary">{new Date().toLocaleString('tr-TR')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">İŞLEM ÖNCELİĞİ //</span>
                    <span className="font-bold px-2 py-[2px] bg-primary text-on-primary">DÜŞÜK_VOLT_YAPISAL_ANALİZ</span>
                  </div>
                </div>

                <p className="text-body-md text-secondary mb-8 font-sans">
                  Proje detaylarınız statik ve mimari departmanımıza yönlendirilmiştir. Belirtiğiniz teknik notlar ve mühendislik parametreleri incelenerek fiyatlandırma & fizibilite raporu hazırlanacaktır.
                </p>

                <BrutalistButton 
                  variant="primary" 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', location: '', area: '', notes: '' });
                  }}
                  className="w-full md:w-fit py-4 px-8 mt-4 font-mono text-xs font-bold uppercase tracking-widest text-center"
                >
                  YENİ TALEP OLUŞTUR
                </BrutalistButton>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:border-b-4 transition-all">
                    <label className="font-label-caps text-secondary text-xs uppercase tracking-widest">AD SOYAD / UNVAN</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none" 
                      placeholder="İsim veya Kurum Giriniz" 
                    />
                  </div>
                  {showProjectLocation && (
                    <div className="flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:border-b-4 transition-all">
                      <label className="font-label-caps text-secondary text-xs uppercase tracking-widest">PROJE KONUMU</label>
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none" 
                        placeholder="Şehir / İlçe" 
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {showTotalArea && (
                    <div className="flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:border-b-4 transition-all">
                      <label className="font-label-caps text-secondary text-xs uppercase tracking-widest">TOPLAM ALAN (M²)</label>
                      <input 
                        type="number" 
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim font-sans outline-none" 
                        placeholder="Örn: 2500" 
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:border-b-4 transition-all">
                    <label className="font-label-caps text-secondary text-xs uppercase tracking-widest">HİZMET TÜRÜ</label>
                    <select 
                      value={hizmetTuru}
                      onChange={(e) => setHizmetTuru(e.target.value)}
                      className="bg-transparent border-none p-0 text-body-lg focus:ring-0 font-sans cursor-pointer outline-none"
                    >
                      <option value="MÜTEAHHİTLİK">MÜTEAHHİTLİK</option>
                      <option value="İNŞAAT MALZEMELERİ">İNŞAAT MALZEMELERİ</option>
                      <option value="KÖMÜR SATIŞI">KÖMÜR SATIŞI</option>
                      <option value="YAZILIM FAALİYETLERİ">YAZILIM FAALİYETLERİ</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-b-2 border-primary pb-2 focus-within:border-b-4 transition-all">
                  <label className="font-label-caps text-secondary text-xs uppercase tracking-widest">TEKNİK NOTLAR</label>
                  <textarea 
                    rows={4} 
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="bg-transparent border-none p-0 text-body-lg focus:ring-0 placeholder:text-surface-dim resize-none font-sans outline-none" 
                    placeholder="Projenizle ilgili özel gereksinimleri belirtiniz..." 
                  />
                </div>

                {submitError && (
                  <div className="p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs">
                    HATA // {submitError}
                  </div>
                )}

                <BrutalistButton 
                  type="submit" 
                  variant="primary" 
                  disabled={isSubmitting}
                  className="w-full md:w-fit py-4 px-12 flex items-center justify-center gap-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  {isSubmitting ? 'GÖNDERİLİYOR...' : 'TALEBİ GÖNDER'} <ArrowRight size={20} className={isSubmitting ? "animate-pulse" : ""} />
                </BrutalistButton>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div className="bg-primary text-on-primary p-12 border-4 border-primary">
              <h3 className="font-serif text-headline-md mb-8 uppercase">Merkez Ofis</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="shrink-0" size={24} />
                  <p className="font-sans text-body-md opacity-90">
                    Leblebiciler Mah. Hastane Cad. No:54<br />
                    Yalvaç, Isparta<br />
                    Türkiye, 32400
                  </p>
                </div>

                <div className="border-t border-on-primary/20 pt-6">
                  <h4 className="font-serif text-headline-sm mb-4 uppercase">İrtibat</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Phone className="shrink-0" size={24} />
                      <p className="font-sans text-body-md opacity-90">+90 532 311 82 10</p>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="shrink-0" size={24} />
                      <p className="font-sans text-body-md opacity-90">info@modayapi.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px] border-4 border-primary bg-surface-dim relative group overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiiWPn8Cr0hOyufo-f_x7S3g-CCc0WmV07MoZCbbRbp4lLKL-JO9fggh5pt8pUvgz4G5U-Ih6uFarJgWejLHkWGO-nR4uLRfOf_6_ZTjbPfms66JsK4OAR7gAmdqJ6nP6X_oQtnwmtDdN-5RM4vsAW-lFZYIvVXP8sgwKN5Q_r1XFMx_xj11taFBLGzSEWLe9LwfyqD8uRX0v2IbADwDFCGqfTDVLn7wU8H_eU_zEGU3Cj__iPes8BiXqSkDJ_bEygmrC30SfbLdgU" 
                alt="Map View" 
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 border-[20px] border-surface/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;
