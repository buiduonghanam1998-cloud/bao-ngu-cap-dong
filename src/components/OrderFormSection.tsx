import React, { useState } from 'react';
import { ProductPlan, OrderData } from '../types';
import { ShoppingCart, ShieldCheck, Truck, Check, Plus, Minus, Flame, Phone, User, MapPin, FileText } from 'lucide-react';

interface OrderFormSectionProps {
  selectedPlan: ProductPlan;
  onSelectPlan: (plan: ProductPlan) => void;
  onSubmitOrder: (order: OrderData) => void;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({
  selectedPlan,
  onSelectPlan,
  onSubmitOrder,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Pricing logic
  const unitPrice = selectedPlan === '1kg' ? 499000 : 900000;
  const originalUnitPrice = selectedPlan === '1kg' ? 650000 : 1300000;
  const savingsPerUnit = originalUnitPrice - unitPrice;
  const totalSavings = savingsPerUnit * quantity;
  const totalAmount = unitPrice * quantity;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    }
    if (!phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại nhận hàng';
    } else if (!/^[0-9+ ]{9,13}$/.test(phone.replace(/\s+/g, ''))) {
      errs.phone = 'Số điện thoại không hợp lệ (từ 9-11 số)';
    }
    if (!address.trim()) {
      errs.address = 'Vui lòng nhập địa chỉ nhận hàng chi tiết';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Generate simulated order code (similar to #GF-88692 in the reference design)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderCode = `#GF-${randomSuffix}`;

    setTimeout(() => {
      const order: OrderData = {
        orderCode,
        plan: selectedPlan,
        planName: selectedPlan === '1kg' ? 'Gói 1KG Bào Ngư Đông Lạnh' : 'Combo 2KG Bào Ngư Tiết Kiệm',
        unitPrice,
        quantity,
        savings: totalSavings,
        totalAmount,
        fullName: fullName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        note: note.trim() || undefined,
        createdAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString('vi-VN'),
        status: 'confirmed'
      };

      setIsSubmitting(false);
      onSubmitOrder(order);
    }, 600);
  };

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  return (
    <section id="dat-hang" className="py-16 sm:py-20 bg-linear-to-b from-white via-surface to-surface-container border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container/15 text-secondary font-bold text-xs uppercase mb-3">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ĐẶT HÀNG NHANH CHÓNG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            ĐẶT BÀO NGƯ NGAY – GIAO TẬN NHÀ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Kiểm tra hàng tươi ngon chuẩn size mới thanh toán. Miễn phí đổi trả 100%.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. Choose Product Plan */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3 font-display">
                1. Chọn gói sản phẩm:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1KG Option */}
                <div
                  id="order-plan-1kg"
                  onClick={() => onSelectPlan('1kg')}
                  className={`relative p-4.5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedPlan === '1kg'
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase">Gói Tiêu Chuẩn</span>
                      <h4 className="text-lg font-bold text-slate-900 font-display">GÓI 1KG</h4>
                      <p className="text-xs text-slate-500 mt-0.5">~16 con bào ngư tươi</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-primary font-display">499.000đ</span>
                      <span className="block text-xs text-slate-400 line-through">650.000đ</span>
                      <span className="text-[11px] font-semibold text-emerald-700">Tiết kiệm 151K</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                    <span>Hút chân không từng con</span>
                    {selectedPlan === '1kg' && (
                      <span className="text-primary font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Đã chọn
                      </span>
                    )}
                  </div>
                </div>

                {/* 2KG Combo Option (Recommended) */}
                <div
                  id="order-plan-2kg"
                  onClick={() => onSelectPlan('2kg')}
                  className={`relative p-4.5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedPlan === '2kg'
                      ? 'border-secondary-container bg-amber-50/60 ring-2 ring-secondary-container/30 shadow-md'
                      : 'border-secondary-container/40 hover:border-secondary-container'
                  }`}
                >
                  <div className="absolute -top-2.5 right-4 bg-secondary-container text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Flame className="w-2.5 h-2.5 fill-current" />
                    BÁN CHẠY
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase">Combo Tiết Kiệm</span>
                      <h4 className="text-lg font-black text-slate-900 font-display">COMBO 2KG</h4>
                      <p className="text-xs text-secondary font-semibold mt-0.5">Chỉ 450k / 1KG (~32 con)</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-secondary-container font-display">900.000đ</span>
                      <span className="block text-xs text-slate-400 line-through">1.300.000đ</span>
                      <span className="text-[11px] font-extrabold text-emerald-700">Tiết kiệm 400K</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center justify-between text-xs text-slate-700">
                    <span className="font-semibold text-emerald-700">Miễn phí ship toàn quốc</span>
                    {selectedPlan === '2kg' && (
                      <span className="text-secondary-container font-extrabold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Đã chọn
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Quantity Selector & Live Bill */}
            <div className="bg-surface rounded-2xl p-5 border border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 font-display">
                    2. Số lượng đặt mua:
                  </label>
                  <span className="text-xs text-slate-500">
                    {selectedPlan === '1kg' ? 'Mỗi đơn vị là 1 gói (1KG)' : 'Mỗi đơn vị là 1 combo (2KG)'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    id="decrease-qty-btn"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white flex items-center justify-center font-bold text-base transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-xl font-black text-slate-900 font-display">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    id="increase-qty-btn"
                    onClick={handleIncrease}
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold text-base transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bill Details Summary */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Đơn giá:</span>
                  <span className="font-semibold text-slate-900">{formatVND(unitPrice)} / {selectedPlan === '1kg' ? 'Gói 1KG' : 'Combo 2KG'}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Tiết kiệm được:</span>
                  <span>-{formatVND(totalSavings)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span className="text-emerald-700 font-bold">
                    {selectedPlan === '2kg' ? 'MIỄN PHÍ TOÀN QUỐC' : 'Hỗ trợ đồng giá 30.000đ (Miễn phí từ 2KG)'}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-200 text-base sm:text-lg font-bold text-slate-900">
                  <span className="font-display">Tổng thanh toán dự kiến:</span>
                  <span className="text-2xl font-black text-primary font-display">
                    {formatVND(totalAmount + (selectedPlan === '1kg' ? 30000 : 0))}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Customer Delivery Information */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-900 font-display">
                3. Thông tin giao hàng nhận hàng:
              </label>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>Họ và tên người nhận *</span>
                </label>
                <input
                  id="customer-fullname"
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${
                    errors.fullName
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Số điện thoại *</span>
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  placeholder="Ví dụ: 0912 345 678"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Địa chỉ nhận hàng (Số nhà, đường, phường/xã, quận/huyện, tỉnh/TP) *</span>
                </label>
                <input
                  id="customer-address"
                  type="text"
                  placeholder="Ví dụ: 128 Đường Thủy Sản, Phường Tân Thuận Đông, Quận 7, TP.HCM"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${
                    errors.address
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                  }`}
                />
                {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ghi chú thêm (thời gian nhận thuận tiện, dặn dò...)</span>
                </label>
                <textarea
                  id="customer-note"
                  rows={2}
                  placeholder="Ví dụ: Giao giờ hành chính, gọi trước 15 phút..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm transition-all focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Commitments banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-200/60 text-xs text-amber-900">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary-container shrink-0" />
                <span className="font-semibold">Được kiểm tra hàng trước khi thanh toán</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-secondary-container shrink-0" />
                <span className="font-semibold">Đóng thùng xốp đá gel giữ lạnh buốt 100%</span>
              </div>
            </div>

            {/* Submit CTA Button */}
            <button
              id="submit-order-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 px-6 rounded-2xl font-black text-base sm:text-lg bg-primary hover:bg-[#004f58] text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer transform active:scale-98 font-display"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>ĐANG XỬ LÝ ĐƠN HÀNG...</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>XÁC NHẬN ĐẶT HÀNG NGAY</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500 font-sans">
              🔒 Thông tin đặt hàng của quý khách được bảo mật tuyệt đối. Nhân viên sẽ gọi xác nhận trong 15 phút.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};
