import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Move } from 'lucide-react';

interface ZoomLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  activeIndex?: number;
  onNavigate?: (index: number) => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ZoomLightbox: React.FC<ZoomLightboxProps> = ({
  isOpen,
  onClose,
  images,
  activeIndex,
  onNavigate,
  title,
  subtitle,
  children,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom & translation when active item or content changes
  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [activeIndex, children]);

  // Handle ESC and Arrow Keys for intuitive controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (
        e.key === 'ArrowLeft' &&
        onNavigate &&
        activeIndex !== undefined &&
        activeIndex > 0
      ) {
        onNavigate(activeIndex - 1);
      } else if (
        e.key === 'ArrowRight' &&
        onNavigate &&
        activeIndex !== undefined &&
        images &&
        activeIndex < images.length - 1
      ) {
        onNavigate(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images, onClose, onNavigate]);

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasImages = images && images.length > 0 && activeIndex !== undefined;
  const currentImage = hasImages ? images[activeIndex] : null;

  // Zoom manipulation
  const zoomIn = () => setScale((prev) => Math.min(5, prev + 0.5));
  const zoomOut = () =>
    setScale((prev) => {
      const next = Math.max(1, prev - 0.5);
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  // Drag and pan handles
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return; // Only pan when zoomed in
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1) return;
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Double click resets or zooms in automatically
  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = 0.15;
    let newScale = scale + (e.deltaY < 0 ? zoomFactor : -zoomFactor);
    newScale = Math.max(1, Math.min(5, newScale));

    if (newScale === 1) {
      setOffset({ x: 0, y: 0 });
    }
    setScale(newScale);
  };

  return (
    <AnimatePresence>
      <div
        id="zoom-lightbox-overlay"
        className="fixed inset-0 z-[100] flex flex-col bg-primary/98 backdrop-blur-md select-none p-4 md:p-8 text-on-primary"
      >
        {/* Header HUD-bar */}
        <div className="flex justify-between items-center border-b border-on-primary/10 pb-4 mb-4">
          <div className="flex flex-col">
            <h4 className="font-serif text-headline-sm uppercase tracking-wide text-white">
              {title || 'GÖRSEL DETAY PANORAMA'}
            </h4>
            {subtitle && (
              <p className="font-mono text-[10px] text-on-primary/60 uppercase tracking-widest mt-0.5">
                {subtitle}
              </p>
            )}
            {hasImages && (
              <p className="font-mono text-[10px] text-tertiary-fixed font-bold uppercase tracking-widest mt-0.5">
                DOSYA GÖRSELİ // {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Zoom Indicator */}
            <div className="hidden sm:flex items-center gap-2 border border-on-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase">
              <span className="opacity-60">ZOOM LEVEL:</span>
              <span className="text-secondary-fixed font-bold">{Math.round(scale * 100)}%</span>
            </div>

            {/* Brutalist close button */}
            <button
              onClick={onClose}
              className="w-12 h-12 border-2 border-on-primary text-on-primary hover:bg-on-primary hover:text-primary transition-all duration-200 flex items-center justify-center cursor-pointer"
              title="Kapat"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Region */}
        <div className="flex-1 min-h-0 relative flex items-center justify-center overflow-hidden">
          {/* Controls Panel floating in background */}
          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 bg-primary/80 border border-on-primary/10 p-2 backdrop-blur-sm">
            <button
              onClick={zoomIn}
              className="w-10 h-10 border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-150 cursor-pointer"
              title="Yakınlaştır"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={zoomOut}
              className="w-10 h-10 border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-150 cursor-pointer"
              title="Uzaklaştır"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={resetZoom}
              className="w-10 h-10 border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-150 cursor-pointer"
              title="Sıfırla"
            >
              <RotateCcw size={16} />
            </button>
            {scale > 1 && (
              <div
                className="w-10 h-10 border border-transparent flex items-center justify-center text-on-primary/60 animate-pulse pointer-events-none"
                title="Sürükleyip Hareket Ettirin"
              >
                <Move size={16} />
              </div>
            )}
          </div>

          {/* Left Navigation Arrow */}
          {hasImages && activeIndex !== undefined && activeIndex > 0 && (
            <button
              onClick={() => onNavigate && onNavigate(activeIndex - 1)}
              className="absolute left-2 md:left-4 z-10 w-12 h-12 md:w-16 md:h-16 border-2 border-on-primary/25 text-on-primary hover:border-on-primary hover:bg-on-primary hover:text-primary transition-all duration-200 flex items-center justify-center cursor-pointer"
              title="Önceki"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Zoomable Content Wrapper Container */}
          <div
            ref={containerRef}
            className={`w-full h-full flex items-center justify-center relative ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={handleDoubleClick}
            onWheel={handleWheel}
          >
            <div
              className="transition-transform duration-75 ease-out select-none flex items-center justify-center"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                transformOrigin: 'center center',
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
              }}
            >
              {children ? (
                // Custom CAD floor plans or other elements passed from parent
                <div className="w-full max-w-[85vw] max-h-[75vh] p-2 flex items-center justify-center">
                  {children}
                </div>
              ) : currentImage ? (
                // Image renderer
                <img
                  src={currentImage}
                  alt={`${title || 'Detay Görsel'} - Zoom`}
                  className="max-w-[90vw] max-h-[80vh] object-contain pointer-events-none select-none select-img border border-white/5 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : null}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          {hasImages && activeIndex !== undefined && images && activeIndex < images.length - 1 && (
            <button
              onClick={() => onNavigate && onNavigate(activeIndex + 1)}
              className="absolute right-2 md:right-4 z-10 w-12 h-12 md:w-16 md:h-16 border-2 border-on-primary/25 text-on-primary hover:border-on-primary hover:bg-on-primary hover:text-primary transition-all duration-200 flex items-center justify-center cursor-pointer"
              title="Sonraki"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Dynamic Instruction Status Bar */}
        <div className="text-center py-2 border-t border-on-primary/10 mt-2 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-on-primary/40 uppercase tracking-widest gap-2 bg-on-primary/[0.02] px-4">
          <span>IPX_RESOLUTION_ENGINE // LIVE_ZOOM</span>
          <span>
            {scale > 1
              ? '🖱️ Sürükleyerek taranabilir // 📱 Çift dokunun'
              : '🖱️ Çift tıklayarak veya tekerlekle yakınlaştırın'}
          </span>
          <span>SYSTEM_STATE_OK</span>
        </div>

        {/* Thumbnail Selector strip if multiple images found */}
        {hasImages && images && images.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto py-3 max-w-[80vw] mx-auto scrollbar-hide border-t border-on-primary/10 mt-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(idx)}
                className={`w-16 md:w-24 aspect-video border-2 transition-all flex-shrink-0 ${activeIndex === idx ? 'border-white opacity-100 scale-105' : 'border-white/10 opacity-40 hover:opacity-100'}`}
              >
                <img
                  src={img}
                  alt={`Go to thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
