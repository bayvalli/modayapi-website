# Moda Yapı — Organic Brutalist Showcase & Engineering Portal

Moda Yapı'nın brütalist estetik, monolitik tasarımlar ve yapısal dürüstlük felsefesiyle geliştirdiği kurumsal web sitesi ve teknoloji portalı. Bu proje; şirketin vizyonunu, mimari ve mühendislik projelerini, şeffaf iş süreçlerini ve dinamik teklif/iletişim sistemlerini barındıran modern, yüksek performanslı bir single-page web uygulamasıdır (SPA).

---

## 🎨 Tasarım Felsefesi & Özellikler

- **Brütalist & Monolitik Estetik:** Mimari formların yalınlığını ve dürüstlüğünü yansıtan yüksek kontrastlı tipografi, net çizgiler ve geniş negatif boşluklar içeren modern brutalist tasarım.
- **Akıcı Animasyonlar:** Sayfa geçişleri, form elemanları ve akordeon yapılarında `motion` (Framer Motion) kütüphanesi ile üretilmiş yumuşak mikro etkileşimler.
- **Responsive Uyum:** Mobil ekranlardan ultra-geniş masaüstü ekranlara kadar tam uyumlu akıcı yerleşim düzeni.

---

## 🚀 Teknolojik Altyapı

- **Framework:** React 19 (TypeScript ile tam tip güvenliği)
- **Derleyici & Sunucu:** Vite 6
- **Stil Yönetimi:** Tailwind CSS v4 (Modern ve yüksek performanslı CSS motoru)
- **Yönlendirme (Routing):** React Router DOM v7 (Clean URL yapısı ile SPA yönlendirmeleri)
- **İkon Seti:** Lucide React
- **Animasyon:** Motion (`motion/react`)

---

## 📂 Dosya ve Sayfa Yapısı

Uygulama modüler ve sürdürülebilir bir mimaride tasarlanmıştır:

- `/src/pages` altında yer alan ana modüller:
  - **Home (Anasayfa):** Şirket vizyonu, öne çıkan projeler ve brütalist tasarım ögeleri.
  - **Projects (Projeler):** Tamamlanan ve devam eden projelerin filtreleme özellikli vitrini.
  - **ProjectDetail (Proje Detay):** Detaylı teknik özellikler, zemin planları ve yüksek kaliteli galeri görselleri.
  - **Process (Süreç):** Moda Yapı'nın tasarım, onay, planlama ve üretim süreçlerini gösteren adım adım şematik akış.
  - **FAQ (Sıkça Sorulan Sorular):** Mühendislik ve inşaat süreçlerine dair dinamik akordeon soru-cevap alanı.
  - **Quote (Teklif Al):** Müteahhitlik ve yazılım faaliyetlerine özel dinamik girdiler içeren, FormSubmit entegrasyonlu teklif talep formu.
  - **Contact (İletişim):** Harita entegrasyonu ve info@modayapi.com adresine bağlı anlık mesaj formu.
  - **KVKK & PrivacyPolicy (Yasal Sayfalar):** Kişisel verilerin korunması kanunu ve gizlilik politikaları metinleri.

---

## 📧 Form Gönderim Altyapısı

İletişim sayfasındaki form alanı ile "Teklif Talep" sayfasındaki form, sunucu veya veritabanı kurulumuna ihtiyaç duymadan **FormSubmit** API'si aracılığıyla doğrudan **info@modayapi.com** adresine güvenli bir şekilde iletilir.

- Form gönderimi esnasında dinamik yükleme durumları (`isSubmitting`) yönetilir.
- Olası ağ hatalarında kullanıcıya açıklayıcı hata mesajları sunulur.
- Başarılı gönderimlerde rastgele üretilen ve takip kolaylığı sağlayan bilet numaraları (`MSG-XXXXX` ve `TLP-XXXX`) oluşturulur.

---

## 🖼️ Görsel Yönetimi (Hacı Salih Apartmanı)

Hacı Salih Apartmanı projesi için yüksek çözünürlüklü gerçek çekimler ve 3D render görselleri projenin yerel kaynaklarından yüklenmektedir. Görselleri güncellemek veya yerleştirmek için aşağıdaki adımları izleyin:

1. `/public/assets` dizinini oluşturun.
2. Görsellerinizi sırasıyla aşağıdaki dosya adlarıyla bu dizine kaydedin:
   - `h_salih_1.jpg` (Dış cephe ana görsel)
   - `h_salih_2.jpg` (Bina Lobisi / Giriş asansör görünümü)
   - `h_salih_3.jpg` (Giriş Vestiyer / Dolap Görseli)
   - `h_salih_4.jpg` (Lobi Merdiven / Asansör Görseli)
   - `h_salih_5.jpg` (Giriş Kapısı / Posta Kutuları)
   - `h_salih_6.jpg` (Alternatif Lobi Görseli)
   - `h_salih_7.jpg` (Modern Mutfak İçi)

_Sistem, `constants.ts` dosyasında yapılandırılan yerel yollardan (`/assets/h_salih_x.jpg`) bu görselleri otomatik olarak eşleştirecektir._

---

## ☁️ Cloudflare Pages Yayınlama Rehberi

Statik Router yapıları barındıran React SPA uygulamaları Cloudflare Pages gibi statik barındırma platformlarında yayınlandığında alt sayfalara (örn: `/iletisim`, `/teklif`) doğrudan erişimde **404 Not Found** hatası verebilir.

Bunu önlemek için projenin kök dizinine otomatik yönlendirme kurallarını barındıran dosya dahil edilmiştir:

- `/public/_redirects` dosyası içerisinde yer alan `/* /index.html 200` kuralı sayesinde, Cloudflare Pages tüm alt sayfa isteklerini otomatik olarak ana istemciye yönlendirir ve React Router'ın kararlı çalışmasını sağlar.

### Yayınlama Adımları:

1. Projeyi bir Git deposuna (GitHub, GitLab vb.) yükleyin.
2. Cloudflare Pages paneline gidin ve **"Direct Upload"** veya **"Connect to Git"** seçeneğini kullanın.
3. Derleme ayarlarını aşağıdaki şekilde yapılandırın:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
4. Yayına Al (Deploy) butonuna tıklayın.

---

## 🛠️ Yerel Geliştirme (Local Development)

### Gereksinimler

- Node.js (v18+)
- npm

### Adımlar

1. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

2. Geliştirme sunucusunu (Port 3000) başlatın:

   ```bash
   npm run dev
   ```

3. Üretim (Production) derlemesi oluşturun:

   ```bash
   npm run build
   ```

4. TypeScript tip kontrolü ve Linter çalıştırın:
   ```bash
   npm run lint
   ```

---

Moda Yapı projesinin teknik geliştirme ve mimari vizyonuna katkılarınız için teşekkür ederiz.
