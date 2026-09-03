import React from 'react';
import { OrderData, Dish } from '../types';
import { ASSETS, DISHES } from '../data/mockData';
import { 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Package, 
  Truck, 
  Sparkles, 
  ArrowLeft, 
  ChefHat, 
  ShieldCheck, 
  Check 
} from 'lucide-react';

interface ThankYouScreenProps {
  order: OrderData;
  onBackToHome: () => void;
  onOpenRecipe: (dish: Dish) => void;
  onOpenAllRecipes: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({
  order,
  onBackToHome,
  onOpenRecipe,
  onOpenAllRecipes,
}) => {
  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  // 4 recommended recipe highlights on the thank-you screen
  const kitchenTips = [
    {
      dish: DISHES[0], // Cháo bào ngư
      name: 'Cháo Bào Ngư Bổ Dưỡng',
      badge: 'Dễ nấu nhất',
      desc: 'Nấu nhừ gạo thơm với nước dùng xương, bào ngư xào săn với đầu hành rồi cho vào nồi đun thêm 3-5 phút. Rắc tiêu và hành ngò ăn nóng.',
      image: ASSETS.chaoBaoNgu,
      time: '25 phút'
    },
    {
      dish: DISHES[1], // Sốt dầu hào
      name: 'Bào Ngư Sốt Dầu Hào',
      badge: 'Chuẩn nhà hàng',
      desc: 'Phi thơm tỏi, cho bào ngư và nấm đông cô vào xào cùng sốt dầu hào đặc sánh. Bày lên đĩa cải thìa xanh mướt giòn ngọt.',
      image: ASSETS.sotDauHao,
      time: '20 phút'
    },
    {
      dish: DISHES[2], // Nướng mỡ hành
      name: 'Bào Ngư Nướng Mỡ Hành',
      badge: 'Tiệc cuối tuần',
      desc: 'Nướng than hoa hoặc nồi chiên không dầu ở 190°C trong 6 phút, rưới đẫm mỡ hành thơm phức và rắc đậu phộng rang giòn rụm.',
      image: ASSETS.nuongMoHanh,
      time: '15 phút'
    },
    {
      dish: DISHES[4], // Hầm nấm táo đỏ
      name: 'Bào Ngư Tiềm Nấm Táo Đỏ',
      badge: 'Bồi bổ thể lực',
      desc: 'Tiềm cách thủy bào ngư cùng táo đỏ, kỷ tử và nấm đông cô trong 45 phút, nước súp trong vắt thanh ngọt giúp phục hồi sức khỏe tuyệt vời.',
      image: ASSETS.hamNam,
      time: '45 phút'
    }
  ];

  return (
    <div className="bg-surface min-h-screen py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb / Back Button */}
        <div className="mb-6">
          <button
            id="back-to-home-top-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-container transition-colors py-2 px-3 rounded-xl hover:bg-primary/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang sản phẩm</span>
          </button>
        </div>

        {/* 1. Success Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center relative overflow-hidden mb-8">
          
          {/* Confetti / Success badge icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-inner border border-emerald-100 animate-bounce duration-1000">
            <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.5]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-black tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ĐƠN HÀNG ĐÃ TIẾP NHẬN THÀNH CÔNG</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 font-display tracking-tight mb-3">
            🎉 ĐẶT HÀNG THÀNH CÔNG!
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-sans max-w-xl mx-auto">
            Cảm ơn quý khách <strong className="text-primary font-bold">{order.fullName || 'Quý khách'}</strong> đã tin tưởng lựa chọn <strong className="text-slate-900">Bào Ngư Golden Food</strong> ❤️
          </p>

          {/* Pulsing Status Alert */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center gap-3 text-sm text-emerald-900 max-w-2xl mx-auto text-left sm:text-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <p className="font-semibold">
              Nhân viên Bào Ngư Golden Food sẽ liên hệ xác nhận đơn hàng và thời gian giao hàng trong ít phút.
            </p>
          </div>

          {/* Attention Phone call reminder */}
          <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start sm:items-center gap-3 text-left max-w-2xl mx-auto">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-amber-900 tracking-wider">
                📞 HÃY ĐỂ Ý ĐIỆN THOẠI
              </p>
              <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                Golden Food sẽ gọi từ hotline <strong className="font-extrabold text-slate-900">0352 949 123</strong> để xác nhận thời gian giao thuận tiện nhất cho quý khách.
              </p>
            </div>
          </div>

        </div>

        {/* 2. Detailed Order Receipt Summary Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
          
          {/* Header row with Order Code */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold">Mã đơn hàng</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                  {order.orderCode}
                </span>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  Đã ghi nhận
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-500">Thời gian tạo đơn</span>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">{order.createdAt}</p>
            </div>
          </div>

          {/* Ordered Item Specification */}
          <div className="py-6 border-b border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-8 flex items-center gap-4">
              <img 
                src={ASSETS.heroAbalone} 
                alt={order.planName}
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs" 
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {order.planName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Quy cách: Chuẩn 16 con/kg • Cấp đông sâu -40°C • Hút chân không
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Số lượng: {order.quantity} {order.plan === '1kg' ? 'gói' : 'combo'}
                  </span>
                  {order.savings > 0 && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Tiết kiệm: {formatVND(order.savings)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 text-left sm:text-right">
              <span className="text-xs text-slate-400">Thành tiền tạm tính</span>
              <p className="text-xl sm:text-2xl font-black text-primary font-display mt-0.5">
                {formatVND(order.totalAmount + (order.plan === '1kg' ? 30000 : 0))}
              </p>
              <p className="text-[11px] text-slate-500">Thanh toán khi nhận hàng (COD)</p>
            </div>
          </div>

          {/* Customer & Shipping Details */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3">
                Thông tin người nhận
              </h4>
              <div className="space-y-1.5 text-sm text-slate-700">
                <p className="font-bold text-slate-900">{order.fullName}</p>
                <p className="flex items-center gap-2 font-medium">
                  <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                  <span>{order.phone}</span>
                </p>
                <p className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>{order.address}</span>
                </p>
                {order.note && (
                  <p className="text-xs text-slate-500 italic mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    Ghi chú: "{order.note}"
                  </p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3">
                Hình thức vận chuyển
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Đóng thùng xốp đá gel giữ nhiệt</span>
                    <span className="text-slate-500">
                      Giao hỏa tốc 2-4h (Nội thành) hoặc 24-48h (Toàn quốc)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-semibold pl-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Được quyền đồng kiểm cùng shipper trước khi thanh toán</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Direct 24/7 Hotline Support Card */}
        <div className="bg-linear-to-r from-primary to-primary-container rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-fixed block mb-1">
              HỖ TRỢ TRỰC TIẾP 24/7
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display">
              CẦN THAY ĐỔI ĐƠN HOẶC GIAO GẤP?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg font-sans">
              Nếu bạn cần đổi địa chỉ, thay đổi thời gian giao hoặc có yêu cầu sơ chế đặc biệt, vui lòng gọi ngay:
            </p>
          </div>

          <a
            href="tel:0352949123"
            className="shrink-0 bg-white hover:bg-slate-50 text-primary font-black text-base px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-3 transform active:scale-95 font-display"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span>GỌI NGAY: 0352 949 123</span>
          </a>
        </div>

        {/* 4. Kitchen Tips Section (Replicating Image 8 & HTML design) */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase mb-1">
                <ChefHat className="w-4 h-4" />
                <span>MẸO NHÀ BẾP DÀNH CHO BẠN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                🦪 MÓN NGON TỪ BÀO NGƯ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Trong lúc chờ nhận hàng, hãy tham khảo các gợi ý món ăn dinh dưỡng từ Golden Food:
              </p>
            </div>

            <button
              id="view-all-recipes-btn"
              onClick={onOpenAllRecipes}
              className="text-xs font-bold text-primary hover:text-primary-container flex items-center gap-1 self-start sm:self-auto py-1 px-2"
            >
              <span>Xem toàn bộ công thức</span>
              <span>→</span>
            </button>
          </div>

          {/* 4 Recipe Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {kitchenTips.map((tip, idx) => (
              <div
                key={idx}
                onClick={() => onOpenRecipe(tip.dish)}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-slate-900">
                    <img 
                      src={tip.image} 
                      alt={tip.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-white/95 text-primary shadow-xs">
                        {tip.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-[11px] font-semibold bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{tip.time}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-display mb-1.5 group-hover:text-primary transition-colors">
                    {tip.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                    {tip.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-primary font-bold">
                  <span>Chi tiết cách làm</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Button to view all recipes */}
          <div className="mt-8 text-center">
            <button
              id="explore-recipes-cta"
              onClick={onOpenAllRecipes}
              className="py-3 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider bg-surface border border-slate-300 hover:border-primary text-slate-800 hover:text-primary transition-all inline-flex items-center gap-2"
            >
              <ChefHat className="w-4 h-4" />
              <span>XEM TOÀN BỘ CÔNG THỨC NẤU ĂN</span>
            </button>
          </div>
        </div>

        {/* 5. Back to Home Navigation Button */}
        <div className="text-center pt-4 border-t border-slate-200">
          <button
            id="back-to-home-bottom-btn"
            onClick={onBackToHome}
            className="py-4 px-8 rounded-2xl font-black text-sm uppercase tracking-wider bg-slate-900 hover:bg-black text-white shadow-lg transition-all inline-flex items-center gap-2 transform active:scale-98"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>QUAY LẠI TRANG SẢN PHẨM</span>
          </button>
        </div>

      </div>
    </div>
  );
};
