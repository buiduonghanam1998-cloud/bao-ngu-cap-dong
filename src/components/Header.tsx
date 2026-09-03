import React from 'react';
import { ASSETS } from '../data/mockData';
import { Phone, ShoppingBag, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentScreen: 'home' | 'success';
  onNavigate: (screen: 'home' | 'success') => void;
  onScrollToOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onScrollToOrder }) => {
  return (
    <>
      {/* Top Admin/Preview Switcher Bar to allow seamless switching between Screen 1 and Screen 2 */}
      <aside aria-label="Bộ chuyển đổi màn hình" className="bg-[#0f172a] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-300">Xem thử 2 màn hình thiết kế:</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/90 p-0.5 rounded-lg border border-slate-700">
            <button
              id="view-home-screen-btn"
              onClick={() => onNavigate('home')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentScreen === 'home'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Màn hình 1: Trang chủ / Đặt hàng
            </button>
            <button
              id="view-success-screen-btn"
              onClick={() => onNavigate('success')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentScreen === 'success'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Màn hình 2: Đặt hàng thành công (#GF-88692)
            </button>
          </div>
        </div>
      </aside>

      {/* Main Brand Navigation Bar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-9 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={ASSETS.logo} 
              alt="Golden Food Logo" 
              referrerPolicy="no-referrer"
              className="w-12 h-12 object-contain rounded-full shadow-xs border border-primary/10 group-hover:scale-105 transition-transform" 
            />
            <div>
              <span className="text-xl sm:text-2xl font-black text-primary tracking-tight font-display flex items-center gap-1">
                GOLDEN FOOD
              </span>
              <p className="text-[11px] font-medium text-secondary uppercase tracking-widest -mt-1 font-sans">
                Hải Sản Thượng Hạng
              </p>
            </div>
          </div>

          {/* Nav Links for Home */}
          {currentScreen === 'home' && (
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="#uu-dai" className="hover:text-primary transition-colors">Ưu Đãi</a>
              <a href="#mon-ngon" className="hover:text-primary transition-colors">Món Ngon</a>
              <a href="#quy-trinh" className="hover:text-primary transition-colors">Quy Trình</a>
              <a href="#danh-gia" className="hover:text-primary transition-colors">Đánh Giá</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </nav>
          )}

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:0352949123" 
              className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-primary px-3 py-2 rounded-xl text-sm font-bold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-normal uppercase">Hotline 24/7</p>
                <span className="text-sm font-extrabold text-primary">0352 949 123</span>
              </div>
            </a>

            {currentScreen === 'home' ? (
              <button
                id="header-order-btn"
                onClick={onScrollToOrder}
                className="bg-primary hover:bg-[#004f58] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Đặt Hàng Ngay</span>
              </button>
            ) : (
              <button
                id="header-back-home-btn"
                onClick={() => onNavigate('home')}
                className="bg-primary hover:bg-[#004f58] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
              >
                <span>Về Trang Chủ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
