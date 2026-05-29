import { Service, Project, ProcessStep, CompanyInfo } from './types';

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Müteahhitlik',
    description:
      'Kentsel dönüşümden endüstriyel tesislere kadar, her ölçekteki projede yüksek mühendislik standartları ve iş güvenliği prensipleriyle anahtar teslim çözümler sunuyoruz.',
    icon: 'Engineering',
    category: 'İNŞAAT',
    colorClass: 'bg-surface-container-high',
  },
  {
    id: '02',
    title: 'İnşaat Malzemeleri',
    description:
      'Projenizin temelinden çatısına kadar ihtiyaç duyacağınız tüm kaba ve ince inşaat malzemelerini, kalite standartlarından ödün vermeden tedarik ediyoruz.',
    icon: 'Inventory',
    category: 'TEDARİK',
    colorClass: 'bg-tertiary-fixed',
  },
  {
    id: '03',
    title: 'Kömür Satışı',
    description:
      'Yüksek kalorili ve çevre dostu yerli ve ithal kömür çeşitlerimizle, ısınma ihtiyaçlarınız için güvenilir ve ekonomik enerji çözümleri sağlıyoruz.',
    icon: 'Flame',
    category: 'ENERJİ',
    colorClass: 'bg-surface-container',
  },
  {
    id: '04',
    title: 'Yazılım Faaliyetleri',
    description:
      'Dijital dönüşüm yolculuğunuzda Tutar.io Muhasebe Yazılımı ve CloudBook gibi profesyonel yönetim araçlarıyla iş süreçlerinizi modernize ediyoruz.',
    icon: 'Terminal',
    category: 'DİJİTAL',
    colorClass: 'bg-surface-variant',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Hacı Salih Apartmanı',
    location: 'Yalvaç, Isparta',
    area: '4.500 m²',
    units: '21 Bağımsız Bölüm',
    features: 'C30 Beton, Çelik - Ahşap Çatı, Merkezi Uydu, Görüntülü Diafon',
    category: 'TAAHHÜT PROJESİ 01 - MONOLİTİK KONUT',
    imageUrl: '/assets/h_salih_1.png',
    description:
      "Yalvaç Isparta'da yükselen Hacı Salih Apartmanı (Monolitik Konut), üstün yapı standartları ve kaliteli mühendislik prensipleriyle tasarlandı. C30 dayanıklılık sınıfı yüksek mukavemetli hazır beton teknolojisinin kullanıldığı projede, çelik destekli ahşap çatı konstrüksiyonu, modern ortak merkezi uydu altyapısı ve her dairede entegre görüntülü diafon güvenlik sistemleri standart olarak sunulmaktadır. 21 bağımsız birimden oluşan projemiz, deprem güvenliğini brütalist modern estetikle birleştirmektedir.",
    images: [
      '/assets/h_salih_1.png',
      '/assets/h_salih_2.png',
      '/assets/h_salih_3.png',
      '/assets/h_salih_4.png',
      '/assets/h_salih_5.png',
      '/assets/h_salih_6.png',
      '/assets/h_salih_7.png',
    ],
    floorPlans: [
      {
        name: 'Daire: 7',
        type: '3+1 Örnek Daire',
        totalArea: '162 m²',
        layoutType: 'flat',
        imageUrl: '/assets/h_salih_daire7.png',
        rooms: [
          { name: 'Salon', area: '33.74 m²' },
          { name: 'Yatak Odası', area: '21.11 m²' },
          { name: 'Oturma Odası', area: '17.80 m²' },
          { name: 'Antre', area: '17.00 m²' },
          { name: 'Mutfak', area: '15.37 m²' },
          { name: 'Çocuk Odası', area: '13.81 m²' },
          { name: 'Balkon 1 (Salon/Oda)', area: '7.30 m²' },
          { name: 'Balkon 2 (Mutfak)', area: '6.47 m²' },
          { name: 'Banyo', area: '6.68 m²' },
          { name: 'Duş (Ebeveyn)', area: '6.68 m²' },
          { name: 'Lavabo + WC', area: '2.70 m²' },
        ],
      },
      {
        name: 'Daire: 21',
        type: 'Örnek Daire Dubleks Tipi',
        totalArea: '216.13 m²',
        layoutType: 'duplex',
        imageUrl: '/assets/h_salih_daire21.png',
        rooms: [], // Combined fallback, detailed split into downstairs & upstairs below
        downstairsArea: '123.42 m²',
        downstairsRooms: [
          { name: 'Salon', area: '34.11 m²' },
          { name: 'Oturma Odası', area: '14.12 m²' },
          { name: 'Yatak Odası (Ebeveyn)', area: '18.19 m²' },
          { name: 'Mutfak', area: '14.80 m²' },
          { name: 'Antre', area: '11.15 m²' },
          { name: 'Çocuk Odası', area: '9.15 m²' },
          { name: 'Balkon 1', area: '5.30 m²' },
          { name: 'Balkon 2', area: '5.75 m²' },
          { name: 'Banyo', area: '5.75 m²' },
          { name: 'Duş', area: '3.55 m²' },
          { name: 'Lavabo + WC (LVR-WC)', area: '1.55 m²' },
        ],
        upstairsArea: '92.71 m²',
        upstairsRooms: [
          { name: 'Üst Kat Salon', area: '45.00 m²' },
          { name: 'Oda', area: '15.75 m²' },
          { name: 'Hol / Koridor', area: '8.32 m²' },
          { name: 'Teras', area: '20.31 m²' },
          { name: 'Duş', area: '3.33 m²' },
        ],
      },
    ],
  },
  {
    id: 'proj-02',
    title: 'Celalbey Apartmanı Tadilatı',
    location: 'Muratpaşa, Antalya',
    area: '150 m²',
    features:
      "Akıllı Ev Otomasyonu, Yerden Isıtma Sistemi, Özel Tasarım Ada Tezgah, A'dan Z'ye Komple Anahtar Teslim Modernizasyon, Premium Lüks Segment Malzeme & İşçilik",
    category: 'TADİLAT PROJESİ 02',
    imageUrl: '/assets/celalbey-tadilat-1.JPG',
    description:
      "Antalya Muratpaşa'da yer alan Celalbey Apartmanı dairesinde, mevcut yıpranmış ve eskiyen iç mekân dokusu A'dan Z'ye tamamen yenilenerek modern mimari tasarım trendlerine ve lüks segment standartlara uygun olarak baştan inşa edilmiştir. Altyapı, sıhhi tesisat ve elektrik hatlarının modern regülasyonlara göre bütünüyle sıfırlanıp yenilendiği projede; entegre akıllı ev otomasyon sistemi, homojen ısı konforu sunan gelişmiş yerden ısıtma altyapısı ve fonksiyonel estetiği buluşturan özel tasarım geniş ada tezgahlı mutfak konsepti hayata geçirilmiştir. Lüks segment kaliteli malzeme seçimleri ve üstün işçilik standartlarıyla tamamlanan bu anahtar teslim daire tadilatı, modern ve prestijli bir yaşam alanı sunmaktadır.",
    images: [
      '/assets/celalbey-tadilat-1.JPG',
      '/assets/celalbey-tadilat-2.JPG',
      '/assets/celalbey-tadilat-3.JPG',
      '/assets/celalbey-tadilat-4.JPG',
      '/assets/celalbey-tadilat-5.JPG',
      '/assets/celalbey-tadilat-6.JPG',
      '/assets/celalbey-tadilat-7.JPG',
      '/assets/celalbey-tadilat-8.JPG',
      '/assets/celalbey-tadilat-9.JPG',
      '/assets/celalbey-tadilat-10.JPG',
      '/assets/celalbey-tadilat-11.JPG',
      '/assets/celalbey-tadilat-12.JPG',
      '/assets/celalbey-tadilat-13.JPG',
      '/assets/celalbey-tadilat-14.JPG',
      '/assets/celalbey-tadilat-15.JPG',
      '/assets/celalbey-tadilat-16.JPG',
      '/assets/celalbey-tadilat-17.JPG',
    ],
  },
  {
    id: 'proj-03',
    title: 'Moda Kızılca',
    location: 'Yalvaç, Isparta',
    area: '770 m²',
    features: 'Asmolen Döşeme Sistemi, Kapalı Garaj, Bahçe Kullanımı, Kat Karşılığı Yapı Taahhüdü',
    category: 'TAAHHÜT PROJESİ 03',
    imageUrl: '/assets/moda-kizilca-1.JPG',
    description:
      'Isparta Yalvaç’ta hayata geçirilen Moda Kızılca projesi, kat karşılığı sözleşmesi doğrultusunda inşa edilmiş modern ve kapsamlı bir konut taahhüt projesidir. Toplam 770 m² proje alanına sahip olan yapı, yapısal dayanıklılığı ve üstün akustik-termal konforu garanti eden modern asmolen döşeme sistemiyle tasarlanmıştır. Sakinlerine her mevsim kullanım kolaylığı sağlayan kapalı garaj alanı ve geniş bahçe/yeşil alan entegrasyonu sunan projede, tüm mühendislik ve uygulama aşamaları kurumsal kalite standartlarımıza bağlı kalınarak tamamlanmıştır.',
    images: [
      '/assets/moda-kizilca-1.JPG',
      '/assets/moda-kizilca-2.JPG',
      '/assets/moda-kizilca-3.JPG',
      '/assets/moda-kizilca-4.JPG',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Planlama',
    description:
      'Mimari vizyonun temellerinin atıldığı ilk aşama. Kavramsal tasarımdan detaylı mühendislik çizimlerine kadar her unsur, çevresel etki ve sürdürülebilirlik ilkeleri gözetilerek titizlikle kurgulanır.',
    items: ['Konsept Tasarım', 'Fizibilite', 'Bütçelendirme'],
  },
  {
    id: 2,
    title: 'Uygulama',
    description:
      'Çizgilerin gerçeğe dönüştüğü an. Alanında uzman ekiplerimiz, seçkin malzemeler ve ileri yapım teknikleri kullanarak projeyi hayata geçirir. Sahadaki her hareket, milimetrik bir hassasiyetle yönetilir.',
    items: ['Temel Atma', 'Kaba İnşaat', 'İnce İşçilik'],
  },
  {
    id: 3,
    title: 'Kalite Kontrol',
    description:
      'Teslimat öncesi son ve en kritik dokunuş. Yapının her detayı, uluslararası standartlar ve kendi katı kriterlerimiz doğrultusunda denetlenir. Kusursuzluk onaylanmadan süreç tamamlanmaz.',
    items: ['Performans Testleri', 'Son Muayene', 'Anahtar Teslim'],
  },
];

export const COMPANY_INFO: CompanyInfo = {
  legalName: '2017 May Moda Yapı İnşaat Anonim Şirketi',
  legalNameUpper: 'MAY MODA YAPI İNŞAAT ANONİM ŞİRKETİ',
  legalNameShortUpper: 'MAY MODA YAPI',
  shortName: 'Moda Yapı',
  shortNameUpper: 'MODA YAPI',
  phone: '+90 532 311 82 10',
  phoneCall: '+905323118210',
  email: 'info@modayapi.com',
  addressLine1: 'Leblebiciler Mah. Hastane Cad. No:54',
  addressLine2: 'Yalvaç, Isparta',
  addressFull: 'Leblebiciler Mah. Hastane Cad. No:54 Yalvaç / Isparta',
  postalCode: '32400',
  country: 'Türkiye',
  workingHours: '08:30 - 18:30',
  workingDays: 'Pazartesi - Cumartesi',
  instagramUrl:
    'https://www.instagram.com/modayapias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  gpsCoordinates: { lat: 38.294812, lng: 31.178438 },
  formEndpoint: 'https://formspree.io/info@modayapi.com',
};
