import React from 'react';
import { ASSETS } from '../data/mockData';
import { ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const QualityDetailsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual close-up */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-surface group">
              <img 
                src={ASSETS.qualityCloseup} 
                alt="Chất lượng bào ngư đông lạnh Golden Food" 
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300">
                    Cận Cảnh Thịt Bào Ngư Thực Tế
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                  Thịt Dày Đầy Vỏ – Giòn Sần Sật Tự Nhiên
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                  Không pha ngậm nước, không phẩm màu, trọn vẹn dinh dưỡng biển sâu.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed specs & commitments */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase mb-3 self-start">
              <Award className="w-3.5 h-3.5" />
              <span>TIÊU CHUẨN XUẤT KHẨU</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight mb-4">
              CHẤT LƯỢNG TƯƠI MỚI <br />
              <span className="text-primary">TRONG TỪNG SẢN PHẨM</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-8 font-sans">
              Golden Food áp dụng quy trình kiểm định chất lượng nghiêm ngặt từ khâu thu hoạch đến khi đến tận tay người tiêu dùng.
            </p>

            {/* Spec list */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-surface border border-slate-200/80 hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">Size Tuyển Chọn 16 Con / KG</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Kích thước đồng đều, vỏ sạch sáng, cơ thịt căng tròn, không bị teo óp hay gãy vỡ.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-surface border border-slate-200/80 hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">Cấp Đông Rời IQF Ở -40°C</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Khóa chặt độ ngọt tự nhiên và dưỡng chất, dễ dàng lấy đúng số lượng con cần dùng mà không cần rã đông cả gói.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-surface border border-slate-200/80 hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">Chính Sách Bao Ăn 1 Đổi 1</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Quý khách được quyền kiểm tra hàng trước khi thanh toán. Nếu hàng không tươi giòn hoặc không đúng mô tả, chúng tôi đổi mới ngay lập tức.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
