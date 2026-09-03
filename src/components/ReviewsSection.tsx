import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="danh-gia" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>HƠN 5.000+ KHÁCH HÀNG HÀI LÒNG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            KHÁCH HÀNG NÓI GÌ VỀ BÀO NGƯ GOLDEN FOOD?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Trải nghiệm thực tế từ những người tiêu dùng yêu thích ẩm thực và chăm sóc sức khỏe gia đình.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-surface rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Đã mua hàng
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed font-sans mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className={`w-10 h-10 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold text-xs font-display shadow-xs`}>
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{rev.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{rev.location}</span>
                    <span>•</span>
                    <span className="text-primary font-medium">{rev.packagePurchased}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
