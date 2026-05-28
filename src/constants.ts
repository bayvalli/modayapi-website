import { Service, Project, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Müteahhitlik',
    description: 'Kentsel dönüşümden endüstriyel tesislere kadar, her ölçekteki projede yüksek mühendislik standartları ve iş güvenliği prensipleriyle anahtar teslim çözümler sunuyoruz.',
    icon: 'Engineering',
    category: 'İNŞAAT',
    colorClass: 'bg-surface-container-high'
  },
  {
    id: '02',
    title: 'İnşaat Malzemeleri',
    description: 'Projenizin temelinden çatısına kadar ihtiyaç duyacağınız tüm kaba ve ince inşaat malzemelerini, kalite standartlarından ödün vermeden tedarik ediyoruz.',
    icon: 'Inventory',
    category: 'TEDARİK',
    colorClass: 'bg-tertiary-fixed'
  },
  {
    id: '03',
    title: 'Kömür Satışı',
    description: 'Yüksek kalorili ve çevre dostu yerli ve ithal kömür çeşitlerimizle, ısınma ihtiyaçlarınız için güvenilir ve ekonomik enerji çözümleri sağlıyoruz.',
    icon: 'Flame',
    category: 'ENERJİ',
    colorClass: 'bg-surface-container'
  },
  {
    id: '04',
    title: 'Yazılım Faaliyetleri',
    description: 'Dijital dönüşüm yolculuğunuzda Tutar.io Muhasebe Yazılımı ve CloudBook gibi profesyonel yönetim araçlarıyla iş süreçlerinizi modernize ediyoruz.',
    icon: 'Terminal',
    category: 'DİJİTAL',
    colorClass: 'bg-surface-variant'
  }
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
    description: 'Yalvaç Isparta\'da yükselen Hacı Salih Apartmanı (Monolitik Konut), üstün yapı standartları ve kaliteli mühendislik prensipleriyle tasarlandı. C30 dayanıklılık sınıfı yüksek mukavemetli hazır beton teknolojisinin kullanıldığı projede, çelik destekli ahşap çatı konstrüksiyonu, modern ortak merkezi uydu altyapısı ve her dairede entegre görüntülü diafon güvenlik sistemleri standart olarak sunulmaktadır. 21 bağımsız birimden oluşan projemiz, deprem güvenliğini brütalist modern estetikle birleştirmektedir.',
    images: [
      '/assets/h_salih_1.png',
      '/assets/h_salih_2.png',
      '/assets/h_salih_3.png',
      '/assets/h_salih_4.png',
      '/assets/h_salih_5.png',
      '/assets/h_salih_6.png',
      '/assets/h_salih_7.png'
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
          { name: 'Lavabo + WC', area: '2.70 m²' }
        ]
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
          { name: 'Lavabo + WC (LVR-WC)', area: '1.55 m²' }
        ],
        upstairsArea: '92.71 m²',
        upstairsRooms: [
          { name: 'Üst Kat Salon', area: '45.00 m²' },
          { name: 'Oda', area: '15.75 m²' },
          { name: 'Hol / Koridor', area: '8.32 m²' },
          { name: 'Teras', area: '20.31 m²' },
          { name: 'Duş', area: '3.33 m²' }
        ]
      }
    ]
  },
  {
    id: 'proj-02',
    title: 'Beton Kanopi Tesisi',
    location: 'Dilovası, Kocaeli',
    area: '35.000 m²',
    features: 'Öngerilmeli Betonarme, 20m Açıklık',
    category: 'ENDÜSTRİYEL TESİS 02',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000',
    description: 'Endüstriyel verimliliği estetikle birleştiren Beton Kanopi Tesisi, 20 metrelik geniş açıklıkları öngerilmeli betonarme teknolojisi ile geçerek kolon sayısını minimize etmiş, böylece maksimum operasyonel alan sağlamıştır.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1517089535819-3d853344960b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'proj-03',
    title: 'Endüstriyel Pavyon',
    location: 'Ankara Merkez',
    area: '50.000 m²',
    features: 'Çelik Konstrüksiyon, LEED Altın Sertifikası',
    category: 'KAMU ALTYAPI TAAHHÜDÜ 03',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000',
    description: 'Çelik konstrüksiyonun hızı ve modülerliğini kamu altyapı projeleriyle buluşturan bu pavyon, LEED Altın sertifikası kriterlerine uygun olarak inşa edilmiştir. Enerji geri kazanımı ve yağmur suyu toplama sistemleri projenin kalbini oluşturmaktadır.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1504917595217-d4dc5f649776?auto=format&fit=crop&q=80&w=2000'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Planlama',
    description: 'Mimari vizyonun temellerinin atıldığı ilk aşama. Kavramsal tasarımdan detaylı mühendislik çizimlerine kadar her unsur, çevresel etki ve sürdürülebilirlik ilkeleri gözetilerek titizlikle kurgulanır.',
    items: ['Konsept Tasarım', 'Fizibilite', 'Bütçelendirme']
  },
  {
    id: 2,
    title: 'Uygulama',
    description: 'Çizgilerin gerçeğe dönüştüğü an. Alanında uzman ekiplerimiz, seçkin malzemeler ve ileri yapım teknikleri kullanarak projeyi hayata geçirir. Sahadaki her hareket, milimetrik bir hassasiyetle yönetilir.',
    items: ['Temel Atma', 'Kaba İnşaat', 'İnce İşçilik']
  },
  {
    id: 3,
    title: 'Kalite Kontrol',
    description: 'Teslimat öncesi son ve en kritik dokunuş. Yapının her detayı, uluslararası standartlar ve kendi katı kriterlerimiz doğrultusunda denetlenir. Kusursuzluk onaylanmadan süreç tamamlanmaz.',
    items: ['Performans Testleri', 'Son Muayene', 'Anahtar Teslim']
  }
];
