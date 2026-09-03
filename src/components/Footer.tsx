import React from 'react';
import { ASSETS } from '../data/mockData';
import { Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={ASSETS.logo} 
                alt="Golden Food" 
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-contain bg-white/10 p-1" 
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight font-display">
                  GOLDEN FOOD
                </span>
                <p className="text-[11px] font-medium text-amber-400 uppercase tracking-widest -mt-0.5">
                  Hải Sản Thượng Hạng
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-md">
              Chuyên cung cấp bào ngư đông lạnh cao cấp nhập khẩu, cấp đông rời IQF tiêu chuẩn -40°C. Đảm bảo độ ngọt giòn và dinh dưỡng cho bữa cơm gia đình bạn.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Cam kết bao ăn 1 đổi 1 trong 24 giờ</span>
            </div>
          </div>

          {/* Contact and Storage locations */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Kho Lạnh & Văn Phòng
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-fixed mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-200">Kho TP.HCM:</strong> 128 Đường Thủy Sản, P. Tân Thuận Đông, Quận 7, TP.HCM
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-fixed mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-200">Kho Hà Nội:</strong> 45 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>7:30 - 21:30 (Mở cửa tất cả các ngày trong tuần)</span>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Liên Hệ Đặt Hàng
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0352949123"
                className="block p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white transition-colors"
              >
                <span className="text-[10px] text-slate-400 block uppercase">Hotline tư vấn & giao gấp</span>
                <span className="text-base font-black text-amber-400 font-display flex items-center gap-2 mt-0.5">
                  <Phone className="w-4 h-4" />
                  0352 949 123
                </span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>cskh@goldenfood.vn</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Golden Food. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Chính sách bảo mật</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Quy định đổi trả</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Hướng dẫn kiểm hàng</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
