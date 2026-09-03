import React from 'react';
import { Scale, Snowflake, Utensils, Truck } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: Scale,
      title: 'Size Đẹp Đồng Đều',
      badge: 'Chuẩn 16 con/kg',
      desc: 'Từng con bào ngư được tuyển lựa kỹ càng, kích cỡ đồng đều, thịt dày đẫy đà, cắn ngập miệng cảm nhận rõ độ giòn sần sật và vị ngọt thanh.',
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20'
    },
    {
      icon: Snowflake,
      title: 'Tiện Lợi Bảo Quản',
      badge: 'Cấp đông sâu -40°C',
      desc: 'Công nghệ cấp đông rời IQF giữ trọn vẹn tế bào nước ngọt, hút chân không từng con sạch sẽ, bảo quản ngăn đông gia đình tiện lợi đến 12 tháng.',
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200'
    },
    {
      icon: Utensils,
      title: 'Dễ Dàng Chế Biến',
      badge: 'Chỉ 10 phút rã đông',
      desc: 'Đã được làm sạch cát và sơ chế cơ bản. Bạn chỉ cần ngâm nước lạnh 10 phút là có thể nấu ngay các món cháo bồi bổ, sốt dầu hào hay nướng mỡ hành.',
      color: 'text-secondary-container',
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    },
    {
      icon: Truck,
      title: 'Miễn Ship Tận Tay',
      badge: 'Thùng xốp đá khô',
      desc: 'Đóng gói thùng xốp đá gel lạnh buốt giao hỏa tốc 2-4h nội thành và 24-48h toàn quốc. Quý khách thoải mái kiểm tra hàng hài lòng mới thanh toán.',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2 font-display">
            CAM KẾT CHẤT LƯỢNG TỪ GOLDEN FOOD
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            VÌ SAO NÊN CHỌN BÀO NGƯ GOLDEN FOOD?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Chúng tôi đem đến trải nghiệm hải sản tươi sống chuẩn nhà hàng 5 sao ngay trong căn bếp gia đình bạn.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-surface rounded-2xl p-6 border border-slate-200/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
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
