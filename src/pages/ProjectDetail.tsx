import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Maximize2,
  Building2,
  Layers,
  CheckCircle2,
  ArrowRight,
  ZoomIn,
} from "lucide-react";
import { PROJECTS } from "../constants";
import { Project, FloorPlan } from "../types";
import { BrutalistButton } from "../components/BrutalistButton";
import { ZoomLightbox } from "../components/ZoomLightbox";
import SEO from "../components/SEO";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isGalleryLightboxOpen, setIsGalleryLightboxOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const foundProject = PROJECTS.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      window.scrollTo(0, 0);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  if (!project) return null;

  const galleryImages = project.images || [project.imageUrl];
  const nextProject =
    PROJECTS[(PROJECTS.findIndex((p) => p.id === id) + 1) % PROJECTS.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-block-gap"
    >
      <SEO
        title={project.title}
        description={
          project.description ||
          `Bu proje MAY MODA YAPI'nın yüksek mühendislik standartları ve yenilikçi tasarım anlayışıyla hayata geçirilmiştir.`
        }
        ogImage={project.imageUrl}
      />
      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Breadcrumb & Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            to="/projeler"
            className="inline-flex items-center gap-4 text-primary hover:text-secondary transition-all group font-label-caps text-xs tracking-widest uppercase"
          >
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowLeft size={16} />
            </div>
            PROJELERE DÖN
          </Link>
          <span className="font-mono text-[10px] text-secondary/40 uppercase tracking-widest">
            {project.id} // SECURE_CONSTRUCTION_LOG
          </span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-gutter mb-20 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-label-caps text-secondary text-sm tracking-[0.2em] mb-4 block uppercase">
              {project.category}
            </span>
            <h1 className="text-[10vw] lg:text-headline-xl text-primary leading-[0.9] uppercase mb-8">
              {project.title.split(" ").map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  <br className={i === 0 ? "hidden lg:block" : ""} />
                </React.Fragment>
              ))}
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 border-l-4 border-primary pl-8 pb-4">
            <p className="text-body-lg text-secondary leading-relaxed">
              {project.description ||
                "Bu proje MAY MODA YAPI'nın yüksek mühendislik standartları ve yenilikçi tasarım anlayışıyla hayata geçirilmiştir."}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-12 gap-gutter mb-block-gap">
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
            <div
              onClick={() => setIsGalleryLightboxOpen(true)}
              className="aspect-[16/9] border-heavy bg-surface-container overflow-hidden group relative cursor-zoom-in"
              title="Tam Ekran ve Zoom için tıklayın"
            >
              {/* Floating Hover Zoom Pill */}
              <div className="absolute top-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/90 text-on-primary text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 flex items-center gap-2 border border-on-primary/10 select-none">
                <ZoomIn size={12} />
                BÜYÜT / ZOOM
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  src={galleryImages[activeImage]}
                  alt={`${project.title} - ${activeImage + 1}`}
                  className="w-full h-full object-cover contrast-110 group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGalleryLightboxOpen(true);
                }}
                className="absolute bottom-8 right-8 bg-primary hover:bg-secondary hover:text-on-secondary text-on-primary px-4 py-2 font-mono text-xs uppercase flex items-center gap-3 transition-colors duration-200 shadow-xl border border-on-primary/10 z-10 cursor-pointer"
              >
                <Maximize2 size={14} />
                {activeImage + 1} / {galleryImages.length}
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-24 md:w-40 aspect-video border-4 transition-all ${activeImage === idx ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-primary text-on-primary p-8 md:p-10 sticky top-32">
              <h3 className="font-serif text-headline-sm uppercase mb-10 border-b border-on-primary/20 pb-4">
                Teknik Detaylar
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 opacity-60" size={20} />
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest opacity-60 block mb-1">
                      LOKASYON
                    </span>
                    <p className="font-sans font-bold text-lg leading-tight">
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Maximize2 className="mt-1 opacity-60" size={20} />
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest opacity-60 block mb-1">
                      TOPLAM ALAN
                    </span>
                    <p className="font-sans font-bold text-lg leading-tight">
                      {project.area}
                    </p>
                  </div>
                </div>

                {project.units && (
                  <div className="flex items-start gap-4">
                    <Building2 className="mt-1 opacity-60" size={20} />
                    <div>
                      <span className="font-label-caps text-[10px] tracking-widest opacity-60 block mb-1">
                        BİRİM SAYISI
                      </span>
                      <p className="font-sans font-bold text-lg leading-tight">
                        {project.units}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <Layers className="mt-1 opacity-60" size={20} />
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest opacity-60 block mb-1">
                      ÖZELLİKLER
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.features.split(",").map((feature, i) => (
                        <span
                          key={i}
                          className="bg-on-primary/10 text-[10px] font-mono px-2 py-1 uppercase"
                        >
                          {feature.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans Section (Kat Planları) */}
        {project.floorPlans && project.floorPlans.length > 0 && (
          <FloorPlansContainer floorPlans={project.floorPlans} />
        )}

        {/* Narrative Section */}
        <div className="max-w-4xl mb-block-gap mt-16">
          <div className="flex items-center gap-6 mb-8 text-primary">
            <div className="h-[2px] flex-grow bg-primary"></div>
            <div className="flex-shrink-0 font-label-caps text-sm tracking-widest uppercase">
              Mimari Yaklaşım
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-body-lg text-primary first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed">
              Mühendisliğin estetikle buluştuğu bu projede, modern dokuların
              gücünü olağanüstü dayanıklılık kriterleriyle birleştirdik. Statik
              hesaplamaların ötesinde, her santimetre karede güveni ve sakinliği
              hissettirmeyi amaçladık.
            </p>
            <div className="space-y-6">
              {project.id === "proj-01" && (
                <>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Betonarme Kalitesi Sınıfı: C30
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Depreme Karşı Dayanıklı Güçlü Bloklar
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Çelik Destekli Ahşap Çatı Sistemi
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Merkezi Uydu ve Görüntülü Diafon Altyapısı
                    </span>
                  </div>
                </>
              )}

              {project.id === "proj-02" && (
                <>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Altyapı Standartı: Komple Yenilenen Sıfır Tesisat
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      A'dan Z'ye Anahtar Teslim İç Mekan Modernizasyonu
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Enerji Tasarruflu Homojen Yerden Isıtma Sistemi
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Entegre Akıllı Ev Otomasyonu & Otomatik Kontroller
                    </span>
                  </div>
                </>
              )}

              {project.id !== "proj-01" && project.id !== "proj-02" && (
                <>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Çelik Taşıyıcı Konstrüksiyon Mukavemeti
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Sürdürülebilirlik: LEED Altın Sertifikalı Yapı
                      Standartları
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Gelişmiş Yağmur Suyu ve Enerji Geri Kazanım Sistemleri
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-sans text-body-md uppercase font-medium">
                      Yüksek Yoğunluklu Isı Köprüsü Engelli Kaplama
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Next Project Teaser */}
        <div className="border-t-4 border-primary pt-20 mt-20">
          <Link to={`/projeler/${nextProject.id}`} className="group block">
            <span className="font-label-caps text-secondary text-sm tracking-widest mb-4 block uppercase">
              Sonraki Proje
            </span>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <h2 className="text-headline-lg md:text-headline-xl text-primary uppercase leading-none group-hover:text-secondary transition-colors">
                {nextProject.title}
              </h2>
              <div className="flex items-center gap-6 text-primary mb-2">
                <span className="font-label-caps text-sm tracking-widest uppercase">
                  Görüntüle
                </span>
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <ZoomLightbox
        isOpen={isGalleryLightboxOpen}
        onClose={() => setIsGalleryLightboxOpen(false)}
        images={galleryImages}
        activeIndex={activeImage}
        onNavigate={setActiveImage}
        title={project.title}
        subtitle={`${project.category} // DETAY GÖRSELLERİ`}
      />
    </motion.div>
  );
};

// Sub-component for interactive floor plan viewing
const FloorPlansContainer: React.FC<{ floorPlans: FloorPlan[] }> = ({
  floorPlans,
}) => {
  const [activePlanIdx, setActivePlanIdx] = useState<number>(0);
  const [activeFloor, setActiveFloor] = useState<"down" | "up">("down");
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [viewerMode, setViewerMode] = useState<"cad" | "image">("cad");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const activePlan = floorPlans[activePlanIdx];

  useEffect(() => {
    if (activePlan?.imageUrl) {
      setViewerMode("image");
    } else {
      setViewerMode("cad");
    }
  }, [activePlanIdx, activePlan]);

  // Coordinates for interactive blueprint visualizer with precise spatial geometry and fixture specifications
  const daire7Rooms = [
    {
      name: "Lavabo + WC",
      area: "2.70 m²",
      x: 10,
      y: 10,
      w: 130,
      h: 60,
      color: "rgba(50, 50, 50, 0.05)",
      type: "toilet",
    },
    {
      name: "Duş (Ebeveyn)",
      area: "6.68 m²",
      x: 10,
      y: 70,
      w: 130,
      h: 60,
      color: "rgba(50, 50, 50, 0.05)",
      type: "shower",
    },
    {
      name: "Yatak Odası",
      area: "21.11 m²",
      x: 10,
      y: 130,
      w: 130,
      h: 140,
      color: "rgba(20, 40, 90, 0.05)",
      type: "bedroom",
    },
    {
      name: "Balkon 2 (Mutfak)",
      area: "6.47 m²",
      x: 10,
      y: 310,
      w: 130,
      h: 80,
      color: "rgba(100, 100, 20, 0.04)",
      type: "balcony",
    },
    {
      name: "Banyo",
      area: "6.68 m²",
      x: 140,
      y: 10,
      w: 140,
      h: 100,
      color: "rgba(50, 50, 50, 0.05)",
      type: "bath",
    },
    {
      name: "Antre",
      area: "17.00 m²",
      x: 140,
      y: 110,
      w: 140,
      h: 100,
      color: "rgba(50, 50, 50, 0.02)",
      type: "corridor",
    },
    {
      name: "Çocuk Odası",
      area: "13.81 m²",
      x: 140,
      y: 210,
      w: 140,
      h: 100,
      color: "rgba(10, 80, 110, 0.05)",
      type: "bedroom_kid",
    },
    {
      name: "Mutfak",
      area: "15.37 m²",
      x: 140,
      y: 310,
      w: 140,
      h: 80,
      color: "rgba(80, 20, 80, 0.05)",
      type: "kitchen",
    },
    {
      name: "Oturma Odası",
      area: "17.80 m²",
      x: 280,
      y: 10,
      w: 180,
      h: 140,
      color: "rgba(90, 60, 20, 0.05)",
      type: "living",
    },
    {
      name: "Salon",
      area: "33.74 m²",
      x: 280,
      y: 150,
      w: 180,
      h: 240,
      color: "rgba(10, 80, 50, 0.05)",
      type: "salon",
    },
    {
      name: "Balkon 1 (Salon/Oda)",
      area: "7.30 m²",
      x: 460,
      y: 10,
      w: 30,
      h: 140,
      color: "rgba(100, 100, 20, 0.04)",
      type: "balcony",
    },
  ];

  const daire21DownRooms = [
    // Left column top: Salon (34.11 m2) - size of a large main lounge room
    {
      name: "Salon",
      area: "34.11 m²",
      x: 25,
      y: 20,
      w: 215,
      h: 140,
      color: "rgba(10, 80, 50, 0.05)",
      type: "salon",
    },

    // Left column middle: Mutfak (14.80 m2) and Balkon 1 (5.30 m2) on the far-left
    {
      name: "Mutfak",
      area: "14.80 m²",
      x: 95,
      y: 170,
      w: 145,
      h: 75,
      color: "rgba(80, 20, 80, 0.05)",
      type: "kitchen",
    },
    {
      name: "Balkon 1",
      area: "5.30 m²",
      x: 25,
      y: 170,
      w: 60,
      h: 75,
      color: "rgba(100, 100, 20, 0.04)",
      type: "balcony",
    },

    // Left column bottom: Oturma Odası (14.12 m2)
    {
      name: "Oturma Odası",
      area: "14.12 m²",
      x: 25,
      y: 255,
      w: 160,
      h: 115,
      color: "rgba(90, 60, 20, 0.05)",
      type: "living",
    },

    // Center column bottom: Antre (11.15 m2) which contains the stairs
    {
      name: "Antre",
      area: "11.15 m²",
      x: 195,
      y: 255,
      w: 110,
      h: 115,
      color: "rgba(50, 50, 50, 0.02)",
      type: "stairs",
    },

    // Right column top: Yatak Odası (Ebeveyn) (18.19 m2) and its private Duş (3.55 m2)
    {
      name: "Yatak Odası (Ebeveyn)",
      area: "18.19 m²",
      x: 250,
      y: 20,
      w: 215,
      h: 110,
      color: "rgba(20, 40, 90, 0.05)",
      type: "bedroom",
    },
    {
      name: "Duş",
      area: "3.55 m²",
      x: 250,
      y: 140,
      w: 120,
      h: 50,
      color: "rgba(50, 50, 50, 0.05)",
      type: "shower",
    },

    // Right column middle: Banyo (5.75 m2) and Balkon 2 (5.75 m2) on the right
    {
      name: "Banyo",
      area: "5.75 m²",
      x: 250,
      y: 200,
      w: 80,
      h: 45,
      color: "rgba(50, 50, 50, 0.05)",
      type: "bath",
    },
    {
      name: "Balkon 2",
      area: "5.75 m²",
      x: 340,
      y: 200,
      w: 125,
      h: 45,
      color: "rgba(100, 100, 20, 0.04)",
      type: "balcony",
    },

    // Right column bottom: Çocuk Odası (9.15 m2) and Lavabo + WC (1.55 m2)
    {
      name: "Çocuk Odası",
      area: "9.15 m²",
      x: 360,
      y: 255,
      w: 105,
      h: 115,
      color: "rgba(10, 80, 110, 0.05)",
      type: "bedroom_kid",
    },
    {
      name: "Lavabo + WC (LVR-WC)",
      area: "1.55 m²",
      x: 310,
      y: 255,
      w: 45,
      h: 65,
      color: "rgba(50, 50, 50, 0.05)",
      type: "toilet",
    },
  ];

  const daire21UpRooms = [
    // Top Left: Üst Kat Salon (45.00 m2) (Includes open dining and lounge furniture renderer)
    {
      name: "Üst Kat Salon",
      area: "45.00 m²",
      x: 95,
      y: 20,
      w: 375,
      h: 170,
      color: "rgba(10, 80, 50, 0.05)",
      type: "salon",
    },

    // Bottom Left: Teras (20.31 m2)
    {
      name: "Teras",
      area: "20.31 m²",
      x: 25,
      y: 200,
      w: 165,
      h: 140,
      color: "rgba(100, 100, 20, 0.04)",
      type: "balcony",
    },

    // Center bottom: Merdiven (Duplex Stairs) leading to Antre downstairs
    {
      name: "Stairs",
      area: "21",
      x: 200,
      y: 200,
      w: 75,
      h: 140,
      color: "rgba(50, 50, 50, 0.02)",
      type: "stairs",
    },

    // Hol / Koridor (8.32 m2)
    {
      name: "Hol / Koridor",
      area: "8.32 m²",
      x: 285,
      y: 200,
      w: 70,
      h: 60,
      color: "rgba(50, 50, 50, 0.02)",
      type: "corridor",
    },

    // Duş (3.33 m2) next to Hol
    {
      name: "Duş",
      area: "3.33 m²",
      x: 285,
      y: 265,
      w: 70,
      h: 75,
      color: "rgba(50, 50, 50, 0.05)",
      type: "shower",
    },

    // Bottom Right: Oda (15.75 m2)
    {
      name: "Oda",
      area: "15.75 m²",
      x: 365,
      y: 200,
      w: 105,
      h: 140,
      color: "rgba(20, 40, 90, 0.05)",
      type: "bedroom",
    },
  ];

  const currentRooms =
    activePlan.layoutType === "flat"
      ? activePlan.rooms
      : activeFloor === "down"
        ? activePlan.downstairsRooms
        : activePlan.upstairsRooms;

  const currentSVGLayout =
    activePlan.layoutType === "flat"
      ? daire7Rooms
      : activeFloor === "down"
        ? daire21DownRooms
        : daire21UpRooms;

  // Renders dynamic interior details like beds, tables, sinks, stove, showers to look like genuine CAD blueprints
  const renderRoomInterior = (room: any) => {
    const { x, y, w, h, type } = room;
    if (!type) return null;

    switch (type) {
      case "bedroom": {
        const bedW = Math.min(80, w - 24);
        const bedH = Math.min(90, h - 24);
        const bedX = x + (w - bedW) / 2;
        const bedY = y + (h - bedH) / 2;
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            {/* Bed outline */}
            <rect x={bedX} y={bedY} width={bedW} height={bedH} rx="2" />
            <line
              x1={bedX}
              y1={bedY + bedH * 0.4}
              x2={bedX + bedW}
              y2={bedY + bedH * 0.4}
            />
            <path
              d={`M ${bedX} ${bedY + bedH * 0.4} Q ${bedX + bedW / 2} ${bedY + bedH * 0.5} ${bedX + bedW} ${bedY + bedH * 0.4}`}
            />
            {/* Pillows */}
            <rect
              x={bedX + 8}
              y={bedY + 8}
              width={bedW * 0.35}
              height={bedH * 0.2}
              rx="1"
            />
            <rect
              x={bedX + bedW - 8 - bedW * 0.35}
              y={bedY + 8}
              width={bedW * 0.35}
              height={bedH * 0.2}
              rx="1"
            />
          </g>
        );
      }
      case "bedroom_kid": {
        const bedW = Math.min(45, w - 16);
        const bedH = Math.min(80, h - 16);
        const bedX = x + 10;
        const bedY = y + 10;
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            <rect x={bedX} y={bedY} width={bedW} height={bedH} rx="2" />
            <line
              x1={bedX}
              y1={bedY + bedH * 0.4}
              x2={bedX + bedW}
              y2={bedY + bedH * 0.4}
            />
            <rect
              x={bedX + 5}
              y={bedY + 5}
              width={bedW - 10}
              height={15}
              rx="1"
            />
          </g>
        );
      }
      case "kitchen": {
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            <rect x={x + 5} y={y + h - 22} width={w - 10} height={17} />
            {/* Sink */}
            <rect x={x + 15} y={y + h - 20} width={25} height={13} rx="1" />
            <circle cx={x + 23} cy={y + h - 13} r="3" />
            {/* Stove/Range */}
            <rect x={x + w - 45} y={y + h - 20} width={30} height={13} rx="1" />
            <circle cx={x + w - 38} cy={y + h - 13} r="2.5" />
            <circle cx={x + w - 22} cy={y + h - 13} r="2.5" />
          </g>
        );
      }
      case "bath":
      case "shower": {
        const boxSize = Math.min(40, w - 16, h - 16);
        const boxX = x + 8;
        const boxY = y + 8;
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            <rect x={boxX} y={boxY} width={boxSize} height={boxSize} />
            <line x1={boxX} y1={boxY} x2={boxX + boxSize} y2={boxY + boxSize} />
            <line x1={boxX + boxSize} y1={boxY} x2={boxX} y2={boxY + boxSize} />
            <ellipse cx={x + w - 24} cy={y + h / 2} rx="12" ry="8" />
            <circle cx={x + w - 24} cy={y + h / 2} r="3" />
          </g>
        );
      }
      case "toilet": {
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            <ellipse cx={x + w / 2} cy={y + 18} rx="10" ry="14" />
            <rect x={x + w / 2 - 12} y={y + 4} width="24" height="6" rx="1" />
            <ellipse cx={x + w / 2} cy={y + h - 14} rx="10" ry="7" />
          </g>
        );
      }
      case "living":
      case "salon": {
        const sofW = w - 40;
        const sofH = h - 60;
        const sofX = x + 20;
        const sofY = y + 20;
        if (sofW < 10 || sofH < 10) return null;
        return (
          <g
            opacity="0.15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="pointer-events-none"
          >
            <path
              d={`M ${sofX} ${sofY} L ${sofX + sofW} ${sofY} L ${sofX + sofW} ${sofY + 25} L ${sofX + 25} ${sofY + 25} L ${sofX + 25} ${sofY + sofH} L ${sofX} ${sofY + sofH} Z`}
            />
            <line x1={sofX + 35} y1={sofY + 5} x2={sofX + 35} y2={sofY + 25} />
            <line x1={sofX + 70} y1={sofY + 5} x2={sofX + 70} y2={sofY + 25} />
            <rect
              x={sofX + 50}
              y={sofY + 50}
              width={Math.min(45, sofW - 30)}
              height="20"
              rx="1"
            />
          </g>
        );
      }
      case "balcony": {
        const interval = 8;
        const lines = [];
        if (w > h) {
          for (let offset = 4; offset < w; offset += interval) {
            lines.push(
              <line
                key={offset}
                x1={x + offset}
                y1={y}
                x2={x + offset}
                y2={y + h}
              />,
            );
          }
        } else {
          for (let offset = 4; offset < h; offset += interval) {
            lines.push(
              <line
                key={offset}
                x1={x}
                y1={y + offset}
                x2={x + w}
                y2={y + offset}
              />,
            );
          }
        }
        return (
          <g
            opacity="0.12"
            stroke="currentColor"
            strokeWidth="0.75"
            className="pointer-events-none"
          >
            {lines}
          </g>
        );
      }
      case "stairs": {
        // Çoklu basamak çizgileri çizer:
        const stepsCount = 10;
        const stepLines = [];
        const stepHeight = h / stepsCount;
        for (let i = 1; i < stepsCount; i++) {
          stepLines.push(
            <line
              key={i}
              x1={x}
              y1={y + i * stepHeight}
              x2={x + w}
              y2={y + i * stepHeight}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.25"
            />,
          );
        }
        return (
          <g className="pointer-events-none">
            {stepLines}
            {/* Çıkışyönünü gösteren kesikli ok çizgisi */}
            <path
              d={`M ${x + w / 2} ${y + h - 10} L ${x + w / 2} ${y + 15}`}
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2 2"
              opacity="0.4"
            />
            {/* Çember içerisindeki 21 No'lu Mimari No Logosu */}
            <circle
              cx={x + w / 2}
              cy={y + h / 2}
              r="15"
              fill="var(--color-primary)"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x={x + w / 2}
              y={y + h / 2 + 4}
              textAnchor="middle"
              fontSize="10"
              className="fill-current text-white font-sans font-black select-none"
            >
              21
            </text>
          </g>
        );
      }
      default:
        return null;
    }
  };

  // Modern CAD architecture doors, window segments overlay based on active items
  const renderDoorsAndWindows = () => {
    if (activePlanIdx === 0) {
      return (
        <>
          {/* Double stroke outer walls */}
          <g opacity="0.15" stroke="currentColor" strokeWidth="4" fill="none">
            <rect x="10" y="10" width="480" height="380" />
          </g>
          {/* Internal partition double lines */}
          <g opacity="0.1" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="140" y1="10" x2="140" y2="390" />
            <line x1="280" y1="10" x2="280" y2="390" />
            <line x1="10" y1="70" x2="140" y2="70" />
            <line x1="10" y1="130" x2="140" y2="130" />
            <line x1="140" y1="110" x2="280" y2="110" />
            <line x1="140" y1="210" x2="280" y2="210" />
            <line x1="140" y1="310" x2="280" y2="310" />
            <line x1="280" y1="150" x2="460" y2="150" />
          </g>
          {/* Double line windows frame */}
          <g opacity="0.2" stroke="currentColor" strokeWidth="1">
            <line x1="10" y1="25" x2="10" y2="55" />
            <line x1="13" y1="25" x2="13" y2="55" />
            <line x1="10" y1="160" x2="10" y2="210" />
            <line x1="13" y1="160" x2="13" y2="210" />
            <line x1="330" y1="10" x2="380" y2="10" />
            <line x1="330" y1="13" x2="380" y2="13" />
            <line x1="460" y1="220" x2="460" y2="280" />
            <line x1="457" y1="220" x2="457" y2="280" />
          </g>
        </>
      );
    } else {
      if (activeFloor === "down") {
        return (
          <>
            <g opacity="0.15" stroke="currentColor" strokeWidth="4" fill="none">
              <rect x="10" y="10" width="480" height="380" />
            </g>
            <g opacity="0.1" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="70" y1="10" x2="70" y2="390" />
              <line x1="220" y1="10" x2="220" y2="390" />
              <line x1="350" y1="10" x2="350" y2="390" />
              <line x1="70" y1="220" x2="220" y2="220" />
              <line x1="220" y1="120" x2="350" y2="120" />
              <line x1="220" y1="220" x2="350" y2="220" />
              <line x1="220" y1="310" x2="350" y2="310" />
              <line x1="350" y1="110" x2="490" y2="110" />
              <line x1="350" y1="210" x2="490" y2="210" />
            </g>
          </>
        );
      } else {
        return (
          <>
            <g opacity="0.15" stroke="currentColor" strokeWidth="4" fill="none">
              <rect x="10" y="10" width="480" height="380" />
            </g>
            <g opacity="0.1" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="240" y1="10" x2="240" y2="390" />
              <line x1="240" y1="135" x2="490" y2="135" />
              <line x1="360" y1="10" x2="360" y2="135" />
            </g>
          </>
        );
      }
    }
  };

  return (
    <div className="mt-20 border-t-4 border-primary pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-label-caps text-secondary text-sm tracking-[0.25em] mb-2 block uppercase">
            Örnek Kat Planları
          </span>
          <h2 className="font-serif text-headline-md text-primary uppercase leading-tight">
            Mekansal Dağılım & Ölçüler
          </h2>
        </div>

        {/* Top level Apartment Selector */}
        <div className="flex border-2 border-primary bg-surface-bright self-start overflow-hidden">
          {floorPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePlanIdx(idx);
                setActiveFloor("down");
                setHoveredRoom(null);
              }}
              className={`px-8 py-3 font-label-caps text-xs tracking-widest transition-all ${activePlanIdx === idx ? "bg-primary text-on-primary" : "hover:bg-primary/5 text-primary"}`}
            >
              {plan.name} ({plan.totalArea})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Rooms List Side */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-primary pb-3 mb-6 bg-primary/5 p-4">
              <div>
                <span className="font-serif text-headline-sm text-primary uppercase block">
                  {activePlan.name}
                </span>
                <span className="font-sans text-xs text-secondary/70 uppercase block tracking-wider">
                  {activePlan.type}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs uppercase block opacity-60">
                  Toplam Brüt Alan
                </span>
                <span className="font-sans font-black text-2xl text-primary">
                  {activePlan.totalArea}
                </span>
              </div>
            </div>

            {/* Duplex Floor Selector */}
            {activePlan.layoutType === "duplex" && (
              <div className="flex border-2 border-primary overflow-hidden p-[2px] bg-primary/5 gap-[2px] mb-6">
                <button
                  onClick={() => {
                    setActiveFloor("down");
                    setHoveredRoom(null);
                  }}
                  className={`flex-1 py-3 text-center font-label-caps text-xs tracking-widest transition-all ${activeFloor === "down" ? "bg-primary text-on-primary" : "hover:bg-primary/10 text-primary"}`}
                >
                  Alt Kat Planı ({activePlan.downstairsArea})
                </button>
                <button
                  onClick={() => {
                    setActiveFloor("up");
                    setHoveredRoom(null);
                  }}
                  className={`flex-1 py-3 text-center font-label-caps text-xs tracking-widest transition-all ${activeFloor === "up" ? "bg-primary text-on-primary" : "hover:bg-primary/10 text-primary"}`}
                >
                  Üst Kat Planı ({activePlan.upstairsArea})
                </button>
              </div>
            )}

            <div className="border border-primary/20 max-h-[420px] overflow-y-auto scrollbar-hide divide-y divide-primary/10">
              {currentRooms?.map((room: any, idx: number) => {
                const isHovered = hoveredRoom === room.name;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredRoom(room.name)}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className={`flex justify-between items-center py-4 px-6 transition-all duration-200 cursor-pointer ${isHovered ? "bg-primary text-on-primary pl-8" : "hover:bg-primary/5 text-primary"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${isHovered ? "bg-on-primary" : "bg-primary"}`}
                      ></div>
                      <span className="font-sans font-semibold text-body-md uppercase tracking-wide">
                        {room.name}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-sm ${isHovered ? "text-on-primary/95 font-bold" : "text-secondary/75"}`}
                    >
                      {room.area}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-l-4 border-primary pl-6 py-2">
            <p className="font-mono text-[10px] text-secondary/40 leading-relaxed uppercase tracking-wider">
              * ÖLÇEKSİZ MİMARİ ETÜT ÇALISMASI / DETAY SÜSLEMELER, MOBİLYALAR,
              DUVAR VE DOSEME KAPLAMALARI GÖRSELLEŞTİRME AMAÇLI OLUP SATIS
              KAPSAMINDA DEĞİLDİR.
            </p>
          </div>
        </div>

        {/* CAD Blueprint Interactive Visualizer Side */}
        <div className="col-span-12 lg:col-span-7">
          <div className="border-4 border-primary bg-surface-bright p-6 md:p-8 relative overflow-hidden group">
            {/* Blueprint Grid Watermark Background */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            ></div>

            {/* Selector bar if original raster image is provided alongside CAD interactive layout */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {activePlan.imageUrl && (
                <div className="flex border-2 border-primary bg-surface-bright p-[2px]">
                  <button
                    onClick={() => setViewerMode("image")}
                    className={`px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest transition-all ${
                      viewerMode === "image"
                        ? "bg-primary text-on-primary"
                        : "text-primary hover:bg-primary/5"
                    }`}
                  >
                    Orijinal Plan (PNG)
                  </button>
                  <button
                    onClick={() => setViewerMode("cad")}
                    className={`px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest transition-all ${
                      viewerMode === "cad"
                        ? "bg-primary text-on-primary"
                        : "text-primary hover:bg-primary/5"
                    }`}
                  >
                    CAD Çizimi
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary px-3 py-1.5 border-2 border-primary font-mono text-[9px] font-bold uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5 cursor-pointer shadow-md select-none"
                title="Büyük Ekran Sürümü"
              >
                <Maximize2 size={10} />
                ZOOM
              </button>
            </div>

            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative border-2 border-dashed border-primary/20 aspect-[500/400] w-full flex items-center justify-center overflow-hidden cursor-zoom-in group/plan"
              title="Kat planını büyük ekranda görmek için tıklayın"
            >
              {/* Hover Fullscreen Overlay */}
              <div className="absolute top-4 left-4 z-10 opacity-0 group-hover/plan:opacity-100 transition-opacity duration-200 bg-primary/95 text-on-primary text-[9px] font-mono px-3 py-1.5 uppercase tracking-widest flex items-center gap-2 border border-on-primary/10 select-none">
                <Maximize2 size={10} />
                TAM EKRAN / ZOOM
              </div>

              <AnimatePresence mode="wait">
                {viewerMode === "image" && activePlan.imageUrl ? (
                  <motion.div
                    key="image-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full p-4 flex items-center justify-center bg-white"
                  >
                    <img
                      src={activePlan.imageUrl}
                      alt={`${activePlan.name} Detaylı Kat Planı`}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 right-4 bg-primary text-on-primary text-[9px] font-mono px-2 py-1 uppercase tracking-widest pointer-events-none opacity-60">
                      DETAYLI_GÖRSEL_MODU
                    </div>
                  </motion.div>
                ) : (
                  <motion.svg
                    key="cad-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    viewBox="0 0 500 400"
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Cad Draw Compass symbol */}
                    <g
                      transform="translate(460, 40)"
                      opacity="0.3"
                      className="pointer-events-none"
                    >
                      <circle
                        r="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <path
                        d="M 0 -25 L -5 -5 L -20 0 L -5 5 L 0 20 L 5 5 L 20 0 L 5 -5 Z"
                        fill="currentColor"
                      />
                      <text
                        x="0"
                        y="-30"
                        textAnchor="middle"
                        fontSize="10"
                        className="font-mono fill-current font-bold"
                      >
                        N
                      </text>
                    </g>

                    {/* Legend/Technical Info */}
                    <g
                      transform="translate(20, 380)"
                      opacity="0.4"
                      className="pointer-events-none font-mono"
                      fontSize="8"
                      letterSpacing="0.1em"
                    >
                      <text x="0" y="0">
                        ALAN ANALİZ TABLOSU // VERIFIED M2
                      </text>
                      <text x="0" y="10">
                        MAY MODA YAPI AR-GE YAPISAL STATİKLİK
                      </text>
                    </g>

                    {/* CAD Grid Lines */}
                    {renderDoorsAndWindows()}

                    {currentSVGLayout.map((room, idx) => {
                      const isHovered = hoveredRoom === room.name;
                      return (
                        <g
                          key={idx}
                          onMouseEnter={() => setHoveredRoom(room.name || null)}
                          onMouseLeave={() => setHoveredRoom(null)}
                          className="cursor-pointer group/room transition-all duration-300"
                        >
                          {/* Interactive block zone */}
                          <rect
                            x={room.x}
                            y={room.y}
                            width={room.w}
                            height={room.h}
                            fill={
                              isHovered
                                ? "rgba(0, 0, 0, 0.08)"
                                : room.color || "rgba(0,0,0,0.02)"
                            }
                            stroke="currentColor"
                            strokeWidth={isHovered ? "2.5" : "1.5"}
                            strokeDasharray={
                              room.name.toLowerCase().includes("balkon") ||
                              room.name.toLowerCase().includes("teras")
                                ? "4 4"
                                : undefined
                            }
                            className="transition-all duration-200"
                            style={{
                              filter: isHovered
                                ? "drop-shadow(0 0 4px rgba(0, 0, 0, 0.15))"
                                : "none",
                            }}
                          />

                          {/* Architectural interior layout elements */}
                          {renderRoomInterior(room)}

                          {/* Room Name label */}
                          <text
                            x={room.x + room.w / 2}
                            y={room.y + room.h / 2 - 4}
                            textAnchor="middle"
                            fontSize={room.w < 100 ? "9" : "11"}
                            className={`font-sans select-none tracking-tight transition-all duration-200 uppercase ${isHovered ? "font-black scale-105 fill-current" : "font-semibold fill-current/80"}`}
                          >
                            {room.name}
                          </text>

                          {/* Area value label */}
                          <text
                            x={room.x + room.w / 2}
                            y={room.y + room.h / 2 + 10}
                            textAnchor="middle"
                            fontSize={room.w < 100 ? "8" : "9"}
                            className={`font-mono select-none tracking-widest transition-all duration-150 ${isHovered ? "font-black fill-current" : "fill-current/60"}`}
                          >
                            {room.area}
                          </text>
                        </g>
                      );
                    })}
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>

            {/* HUD Status label */}
            <div className="absolute top-4 left-4 bg-primary text-on-primary text-[9px] font-mono px-3 py-1 uppercase tracking-widest pointer-events-none">
              {viewerMode === "image"
                ? "HUD_STATUS: DETAILED_PLAN_JPEG"
                : `CAD_VIEWER_LOG: ${hoveredRoom ? `HOVERED_${hoveredRoom.toUpperCase().replace(/ /g, "_")}` : "ACTIVE_LIVE"}`}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Floor Plans containing either the big PNG plan or interactive scalable vector CAD diagram */}
      <ZoomLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={activePlan.name}
        subtitle={`${activePlan.type} // ${viewerMode === "image" ? "DETAYLI ORİJİNAL PLAN" : "İNTERAKTİF CAD MODELİ"}`}
        images={
          viewerMode === "image" && activePlan.imageUrl
            ? [activePlan.imageUrl]
            : undefined
        }
        activeIndex={viewerMode === "image" ? 0 : undefined}
      >
        {viewerMode === "cad" && (
          <div className="w-[500px] h-[400px] max-w-full text-white relative">
            <svg
              viewBox="0 0 500 400"
              className="w-full h-full text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Compass symbol in Lightbox */}
              <g
                transform="translate(460, 40)"
                opacity="0.6"
                className="pointer-events-none text-white"
              >
                <circle
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M 0 -25 L -5 -5 L -20 0 L -5 5 L 0 20 L 5 5 L 20 0 L 5 -5 Z"
                  fill="currentColor"
                />
                <text
                  x="0"
                  y="-30"
                  textAnchor="middle"
                  fontSize="10"
                  className="font-mono fill-white font-bold"
                >
                  N
                </text>
              </g>

              {/* Legend/Technical Info */}
              <g
                transform="translate(20, 380)"
                opacity="0.7"
                className="pointer-events-none font-mono text-white"
                fontSize="8"
                letterSpacing="0.1em"
              >
                <text x="0" y="0">
                  ALAN ANALİZ TABLOSU // VERIFIED M2
                </text>
                <text x="0" y="10">
                  MAY MODA YAPI AR-GE YAPISAL STATİKLİK
                </text>
              </g>

              {/* CAD Grid Lines */}
              {renderDoorsAndWindows()}

              {currentSVGLayout.map((room, idx) => {
                const isHovered = hoveredRoom === room.name;
                return (
                  <g
                    key={idx}
                    onMouseEnter={() => setHoveredRoom(room.name || null)}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer group/room transition-all duration-300"
                  >
                    {/* Interactive block zone */}
                    <rect
                      x={room.x}
                      y={room.y}
                      width={room.w}
                      height={room.h}
                      fill={
                        isHovered
                          ? "rgba(255, 255, 255, 0.15)"
                          : room.color || "rgba(255,255,255,0.03)"
                      }
                      stroke="currentColor"
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray={
                        room.name.toLowerCase().includes("balkon") ||
                        room.name.toLowerCase().includes("teras")
                          ? "4 4"
                          : undefined
                      }
                      className="transition-all duration-200"
                      style={{
                        filter: isHovered
                          ? "drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))"
                          : "none",
                      }}
                    />

                    {/* Architectural interior layout elements */}
                    {renderRoomInterior(room)}

                    {/* Room Name label */}
                    <text
                      x={room.x + room.w / 2}
                      y={room.y + room.h / 2 - 4}
                      textAnchor="middle"
                      fontSize={room.w < 100 ? "9" : "11"}
                      className={`font-sans select-none tracking-tight transition-all duration-200 uppercase ${isHovered ? "font-black scale-105 fill-current text-white" : "font-semibold fill-white/80"}`}
                    >
                      {room.name}
                    </text>

                    {/* Area value label */}
                    <text
                      x={room.x + room.w / 2}
                      y={room.y + room.h / 2 + 10}
                      textAnchor="middle"
                      fontSize={room.w < 100 ? "8" : "9"}
                      className={`font-mono select-none tracking-widest transition-all duration-150 ${isHovered ? "font-black fill-current text-white" : "fill-white/60"}`}
                    >
                      {room.area}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        )}
      </ZoomLightbox>
    </div>
  );
};

export default ProjectDetail;
