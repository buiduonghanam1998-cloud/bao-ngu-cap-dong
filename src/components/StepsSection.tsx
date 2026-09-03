import React from 'react';
import { ClipboardList, PhoneCall, PackageCheck, Truck } from 'lucide-react';

export const StepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Để Lại Thông Tin',
      desc: 'Chọn gói sản phẩm mong muốn (1KG hoặc Combo 2KG) và điền số điện thoại, địa chỉ nhận hàng.',
      icon: ClipboardList,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      num: '02',
      title: 'Xác Nhận Nhanh Chóng',
      desc: 'Chuyên viên tư vấn Golden Food sẽ liên hệ trong 15 phút để xác nhận đơn và thời gian giao hàng thuận tiện.',
      icon: PhoneCall,
      color: 'text-secondary-container',
      bg: 'bg-amber-50'
    },
    {
      num: '03',
      title: 'Đóng Thùng Đá Khô',
      desc: 'Bào ngư được bọc kín khí, đóng thùng xốp chèn đá gel giữ nhiệt chuyên dụng đảm bảo độ đông lạnh nguyên vẹn.',
      icon: PackageCheck,
      color: 'text-sky-600',
      bg: 'bg-sky-50'
    },
    {
      num: '04',
      title: 'Kiểm Tra & Nhận Hàng',
      desc: 'Giao tận nơi (2-4h nội thành, 24-48h toàn quốc). Quý khách kiểm tra hàng tươi ngon đúng size mới thanh toán.',
      icon: Truck,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50'
    }
  ];

  return (
    <section id="quy-trinh" className="py-16 sm:py-20 bg-surface-container-low border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2 font-display">
            QUY TRÌNH MUA HÀNG TIỆN LỢI
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            ĐẶT HÀNG NHANH CHÓNG CHỈ VỚI 4 BƯỚC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dễ dàng, minh bạch và hoàn toàn an tâm với quy trình phục vụ chuyên nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors font-display">
                      {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
