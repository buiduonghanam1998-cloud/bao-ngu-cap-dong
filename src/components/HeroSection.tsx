import React, { useState, useRef } from 'react';
import { ASSETS } from '../data/mockData';
import { ProductPlan } from '../types';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Flame, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  MoveHorizontal 
} from 'lucide-react';

interface HeroSectionProps {
  selectedPlan: ProductPlan;
  onSelectPlan: (plan: ProductPlan) => void;
  onScrollToOrder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedPlan,
  onSelectPlan,
  onScrollToOrder,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const isDragInitiatedRef = useRef<boolean>(false);

  const heroImages = [
    {
      id: 0,
      url: ASSETS.heroAbalone,
      tag: 'Khay cấp đông rời IQF',
      title: 'Bào Ngư Cấp Đông Sâu Nguyên Con Giữ Trọn Dưỡng Chất',
      label: 'Ảnh 1',
      subtitle: 'Khay 16 con chuẩn size',
      badge: 'Size 16 con/kg',
    },
    {
      id: 1,
      url: ASSETS.heroAbalone2,
      tag: 'Bào ngư vàng thượng hạng',
      title: 'Bào Ngư Tươi Dày Thịt Giòn Ngọt Đậm Vị Biển',
      label: 'Ảnh 2',
      subtitle: 'Hàng loại 1 dày thịt',
      badge: 'Thịt dày giòn ngọt',
    },
    {
      id: 2,
      url: ASSETS.heroAbalone3,
      tag: 'Đóng thùng xốp đá gel',
      title: 'Quy Cách Đóng Gói Tiêu Chuẩn Giữ Lạnh -40°C Tận Tay',
      label: 'Ảnh 3',
      subtitle: 'Bao bì bảo ôn chuyên dụng',
      badge: 'Đóng xốp đá gel',
    },
  ];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartXRef.current = e.touches[0].clientX;
    isDragInitiatedRef.current = true;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragInitiatedRef.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartXRef.current;
    // Apply slight resistance for smooth feel
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragInitiatedRef.current) return;
    isDragInitiatedRef.current = false;
    setIsDragging(false);

    if (dragOffset < -40) {
      handleNext();
    } else if (dragOffset > 40) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Mouse Drag Handlers for Desktop Swiping
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartXRef.current = e.clientX;
    isDragInitiatedRef.current = true;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragInitiatedRef.current) return;
    const diff = e.clientX - dragStartXRef.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragInitiatedRef.current) return;
    isDragInitiatedRef.current = false;
    setIsDragging(false);

    if (dragOffset < -40) {
      handleNext();
    } else if (dragOffset > 40) {
      handlePrev();
    } else if (Math.abs(dragOffset) < 6) {
      // Treat as clean click
      setIsZoomed(true);
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragInitiatedRef.current) {
      isDragInitiatedRef.current = false;
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleChoose = (plan: ProductPlan) => {
    onSelectPlan(plan);
    onScrollToOrder();
  };

  return (
    <section id="uu-dai" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 bg-linear-to-b from-white via-surface to-surface-container-low">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Pricing Cards */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>BÀO NGƯ ĐÔNG LẠNH CAO CẤP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display mb-4">
              HẢI SẢN THƯỢNG HẠNG <br className="hidden sm:inline" />
              <span className="text-primary">TẠI NHÀ BẠN</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed mb-8 max-w-2xl">
              Thịt dày giòn ngọt tự nhiên – Tẩm bổ sức khỏe cho cả gia đình. Cấp đông sâu <strong className="text-slate-800 font-semibold">-40°C</strong> ngay khi đánh bắt, giữ trọn vẹn vị tươi sống và dinh dưỡng quý giá.
            </p>

            {/* Two Pricing Cards (1KG vs 2KG Combo) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              {/* Option 1: 1KG */}
              <div 
                onClick={() => onSelectPlan('1kg')}
                className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer bg-white ${
                  selectedPlan === '1kg'
                    ? 'border-primary shadow-md ring-2 ring-primary/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Gói Tiêu Chuẩn</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Size 16 con/kg</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 font-display">GÓI 1KG</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-primary font-display">499.000đ</span>
                  <span className="text-xs text-slate-400 line-through">650.000đ</span>
                </div>
                <p className="text-xs text-emerald-700 font-semibold mt-1">Tiết kiệm 151.000đ</p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Hút chân không từng con</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Đá khô giữ nhiệt tiêu chuẩn</span>
                  </li>
                </ul>

                <button
                  id="hero-select-1kg-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoose('1kg');
                  }}
                  className={`mt-4 w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedPlan === '1kg'
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Chọn Gói 1KG
                </button>
              </div>

              {/* Option 2: 2KG COMBO (Featured) */}
              <div 
                onClick={() => onSelectPlan('2kg')}
                className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer bg-linear-to-b from-amber-50/50 to-white ${
                  selectedPlan === '2kg'
                    ? 'border-secondary-container shadow-lg ring-2 ring-secondary-container/30'
                    : 'border-secondary-container/40 hover:border-secondary-container shadow-xs'
                }`}
              >
                {/* Hot Badge */}
                <div className="absolute -top-3 right-4 bg-secondary-container text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-current" />
                  <span>BÁN CHẠY NHẤT</span>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">Combo Tiết Kiệm</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Tiết kiệm 400K</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 font-display">COMBO 2KG</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-secondary-container font-display">900.000đ</span>
                  <span className="text-xs text-slate-400 line-through">1.300.000đ</span>
                </div>
                <p className="text-xs text-emerald-700 font-semibold mt-1">Chỉ 450.000đ / KG + Miễn ship</p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                    <span>Miễn phí giao hàng toàn quốc</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                    <span>Tặng kèm cẩm nang công thức</span>
                  </li>
                </ul>

                <button
                  id="hero-select-2kg-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoose('2kg');
                  }}
                  className="mt-4 w-full py-2.5 rounded-xl text-xs font-extrabold bg-secondary-container hover:bg-secondary text-white shadow-md hover:shadow-lg transition-all"
                >
                  Chọn Combo 2KG (Khuyên Dùng)
                </button>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 w-full border-t border-slate-200/80 pt-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% Tươi Ngon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Đổi trả 1-1 trong 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Giao hỏa tốc 2-4h</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Abalone Photography in Stacked Card Deck */}
          <div className="lg:col-span-5 relative flex flex-col items-center select-none">
            {/* Swipe instruction & page counter */}
            <div className="w-full max-w-md flex items-center justify-between mb-3 px-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary">
                <MoveHorizontal className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>Vuốt ngang hoặc bấm mũi tên để xem</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/5 text-[11px] font-extrabold text-slate-700 border border-slate-200/80">
                <span className="text-primary">{activeImageIndex + 1}</span>
                <span className="text-slate-400">/</span>
                <span>{heroImages.length}</span>
              </div>
            </div>

            {/* The Stacked Container */}
            <div className="relative w-full max-w-md h-[340px] sm:h-[400px]">
              {heroImages.map((img, idx) => {
                // Calculate relative position in the stack (0 = top, 1 = second, 2 = third)
                const diff = (idx - activeImageIndex + heroImages.length) % heroImages.length;
                const isTop = diff === 0;
                const isSecond = diff === 1;
                const isThird = diff === 2;

                // Calculate transforms for the stacked look
                let transformStyle = '';
                let zIndexStyle = 10;
                let opacityStyle = 0.6;
                let filterStyle = 'none';

                if (isTop) {
                  zIndexStyle = 30;
                  opacityStyle = 1;
                  const rotate = dragOffset * 0.04;
                  transformStyle = `translate3d(${dragOffset}px, 0px, 0px) rotate(${rotate}deg) scale(1)`;
                } else if (isSecond) {
                  zIndexStyle = 20;
                  opacityStyle = 0.9;
                  const dragProgress = Math.min(Math.abs(dragOffset) / 150, 1);
                  const scale = 0.94 + dragProgress * 0.04;
                  const translateY = 14 - dragProgress * 8;
                  const translateX = 8 - dragProgress * 4;
                  transformStyle = `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`;
                  filterStyle = 'brightness(0.96)';
                } else if (isThird) {
                  zIndexStyle = 10;
                  opacityStyle = 0.7;
                  const dragProgress = Math.min(Math.abs(dragOffset) / 150, 1);
                  const scale = 0.88 + dragProgress * 0.04;
                  const translateY = 28 - dragProgress * 8;
                  const translateX = 16 - dragProgress * 4;
                  transformStyle = `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`;
                  filterStyle = 'brightness(0.90)';
                }

                return (
                  <div
                    key={img.id}
                    onTouchStart={isTop ? handleTouchStart : undefined}
                    onTouchMove={isTop ? handleTouchMove : undefined}
                    onTouchEnd={isTop ? handleTouchEnd : undefined}
                    onMouseDown={isTop ? handleMouseDown : undefined}
                    onMouseMove={isTop ? handleMouseMove : undefined}
                    onMouseUp={isTop ? handleMouseUp : undefined}
                    onMouseLeave={isTop ? handleMouseLeave : undefined}
                    onClick={isTop ? undefined : () => setActiveImageIndex(idx)}
                    style={{
                      transform: transformStyle,
                      zIndex: zIndexStyle,
                      opacity: opacityStyle,
                      filter: filterStyle,
                      transition: isDragging && isTop ? 'none' : 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.35s ease, filter 0.35s ease',
                    }}
                    className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 transition-shadow ${
                      isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />

                    {/* Vignette Gradients */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

                    {/* Top Pill on Card */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                        {img.badge}
                      </span>
                      {isTop && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(true);
                          }}
                          className="bg-black/50 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20 pointer-events-auto hover:bg-black/70 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-primary-fixed" />
                          <span>Phóng to</span>
                        </button>
                      )}
                    </div>

                    {/* Bottom Card Caption */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-fixed block mb-0.5">
                        {img.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Floating Prev / Next Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Ảnh trước"
                className="absolute -left-3.5 sm:-left-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Ảnh sau"
                className="absolute -right-3.5 sm:-right-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 text-slate-800" />
              </button>

              {/* Floating Badge 1: Quality Guarantee */}
              <div className="absolute -top-4 -left-4 sm:-left-7 z-35 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 flex items-center gap-2 pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-base">
                  🦪
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Thịt Dày & Giòn Ngọt</p>
                  <p className="text-[10px] text-slate-500">Chuẩn size 16 con/kg</p>
                </div>
              </div>

              {/* Floating Badge 2: Cryo Freeze */}
              <div className="absolute -bottom-3 -right-3 sm:-right-5 z-35 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 flex items-center gap-2 pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base">
                  ❄️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Cấp Đông Sâu -40°C</p>
                  <p className="text-[10px] text-slate-500">Giữ nguyên 100% độ tươi</p>
                </div>
              </div>
            </div>

            {/* 3 Interactive Selector Cards (Thumbnails) */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md">
              {heroImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex flex-col items-center text-center p-2 rounded-2xl border-2 transition-all bg-white shadow-xs cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-primary ring-2 ring-primary/25 bg-primary/5 shadow-md scale-102'
                      : 'border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-14 sm:h-16 rounded-xl overflow-hidden mb-1.5 border border-slate-100 bg-slate-900 relative">
                    <img
                      src={img.url}
                      alt={img.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {activeImageIndex === idx && (
                      <div className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none" />
                    )}
                  </div>
                  <span className={`text-[11px] font-extrabold truncate w-full ${activeImageIndex === idx ? 'text-primary' : 'text-slate-800'}`}>
                    {img.label}
                  </span>
                  <span className="text-[9px] text-slate-500 truncate w-full">
                    {img.subtitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-3.5">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`Xem ảnh ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeImageIndex === idx
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Fullscreen Zoom Lightbox */}
          {isZoomed && (
            <div 
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl p-4 sm:p-6"
              >
                <div className="relative rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={heroImages[activeImageIndex].url} 
                    alt={heroImages[activeImageIndex].title} 
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[70vh] object-contain rounded-xl"
                  />

                  {/* Prev / Next inside Lightbox */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Ảnh trước"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Ảnh sau"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                  <div>
                    <span className="text-xs font-bold text-primary-fixed">{heroImages[activeImageIndex].label} • {heroImages[activeImageIndex].tag}</span>
                    <p className="text-sm sm:text-base font-bold text-slate-100">{heroImages[activeImageIndex].title}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-400 font-semibold">
                      {activeImageIndex + 1} / {heroImages.length}
                    </span>
                    <button 
                      onClick={() => setIsZoomed(false)}
                      className="px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Đóng lại
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
