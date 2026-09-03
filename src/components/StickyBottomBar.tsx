import React from 'react';
import { ProductPlan } from '../types';
import { ShoppingBag, PhoneCall, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  selectedPlan: ProductPlan;
  onScrollToOrder: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  selectedPlan,
  onScrollToOrder,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Price summary */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 text-primary items-center justify-center font-bold">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 font-display">
                {selectedPlan === '2kg' ? 'Combo 2KG (Bán chạy)' : 'Gói 1KG Chuẩn'}
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900">
                {selectedPlan === '2kg' ? 'Giảm 400K' : 'Giảm 151K'}
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-primary font-display">
                {selectedPlan === '2kg' ? '900.000đ' : '499.000đ'}
              </span>
              <span className="text-[11px] text-slate-400 line-through">
                {selectedPlan === '2kg' ? '1.300.000đ' : '650.000đ'}
              </span>
              <span className="hidden md:inline text-[11px] text-emerald-700 font-semibold ml-1">
                (Freeship từ 2KG)
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:0352949123"
            className="p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-primary" />
            <span className="hidden sm:inline">0352 949 123</span>
          </a>

          <button
            id="sticky-order-now-btn"
            onClick={onScrollToOrder}
            className="bg-primary hover:bg-[#004f58] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform active:scale-95 font-display"
          >
            <Sparkles className="w-4 h-4 text-primary-fixed" />
            <span>ĐẶT MUA NGAY</span>
          </button>
        </div>

      </div>
    </div>
  );
};
