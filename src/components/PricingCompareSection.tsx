import React from 'react';
import { ProductPlan } from '../types';
import { Check, Flame, ArrowRight, Shield, Award } from 'lucide-react';

interface PricingCompareSectionProps {
  selectedPlan: ProductPlan;
  onSelectPlan: (plan: ProductPlan) => void;
  onScrollToOrder: () => void;
}

export const PricingCompareSection: React.FC<PricingCompareSectionProps> = ({
  selectedPlan,
  onSelectPlan,
  onScrollToOrder,
}) => {
  const handleSelect = (plan: ProductPlan) => {
    onSelectPlan(plan);
    onScrollToOrder();
  };

  return (
    <section className="py-16 sm:py-20 bg-linear-to-b from-white to-surface-container-low border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/15 text-secondary font-bold text-xs uppercase mb-3">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>ƯU ĐÃI ĐẶC BIỆT KHI MUA COMBO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            MUA 2KG – GIÁ TỐT HƠN NHIỀU
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tiết kiệm tối đa chi phí với mức giá ưu đãi hấp dẫn, vừa đủ cho nhiều bữa ăn bồi bổ trọn vị cho cả nhà.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* 1KG Standard Option */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Dành Cho Gia Đình Nhỏ</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">Dùng thử</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-display">GÓI 1KG</h3>
              <p className="text-xs text-slate-500 mt-1">Khoảng 16 con bào ngư tươi mập</p>
              
              <div className="my-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display">499.000đ</span>
                  <span className="text-sm text-slate-400 line-through">650.000đ</span>
                </div>
                <p className="text-xs font-semibold text-emerald-700 mt-1">Tiết kiệm 151.000đ so với giá lẻ</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>~16 con bào ngư nguyên vỏ cấp đông</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Hút chân không bảo quản sạch sẽ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Đủ cho 2 - 3 bữa ăn gia đình</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-xs italic pl-8">• Phí ship hỗ trợ đồng giá 30k</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                id="compare-select-1kg-btn"
                onClick={() => handleSelect('1kg')}
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  selectedPlan === '1kg'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <span>{selectedPlan === '1kg' ? 'Đang chọn Gói 1KG' : 'Đặt Mua Gói 1KG'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2KG Combo (Featured Best Value) */}
          <div className="relative bg-linear-to-b from-amber-500/10 via-white to-amber-500/5 rounded-3xl p-8 border-2 border-secondary-container shadow-xl flex flex-col justify-between">
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 right-6 bg-secondary-container text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>LỰA CHỌN TỐT NHẤT (92% KHÁCH CHỌN)</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Combo Gia Đình & Tiệc</span>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900">TIẾT KIỆM 400K</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">COMBO 2KG</h3>
              <p className="text-xs text-secondary font-bold mt-1">Chỉ 450.000đ / 1KG (~32 con bào ngư)</p>
              
              <div className="my-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-secondary-container font-display">900.000đ</span>
                  <span className="text-sm text-slate-400 line-through">1.300.000đ</span>
                </div>
                <p className="text-xs font-extrabold text-emerald-700 mt-1">
                  Giảm thẳng 400K + Miễn phí ship toàn quốc
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-amber-200/60 text-sm text-slate-700">
                <div className="flex items-center gap-3 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Miễn phí giao hàng hỏa tốc toàn quốc (Trị giá 40k)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary-container flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>~32 con bào ngư chọn lọc to đẹp đồng đều</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary-container flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Tặng kèm cẩm nang công thức chế biến độc quyền</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary-container flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Được kiểm tra hàng trước khi thanh toán tiền</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                id="compare-select-2kg-btn"
                onClick={() => handleSelect('2kg')}
                className="w-full py-4 px-6 rounded-2xl font-black text-base bg-secondary-container hover:bg-secondary text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-98"
              >
                <span>ĐẶT MUA COMBO 2KG TIẾT KIỆM</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
