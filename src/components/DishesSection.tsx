import React from 'react';
import { DISHES } from '../data/mockData';
import { Dish } from '../types';
import { Clock, ChefHat, Sparkles } from 'lucide-react';

interface DishesSectionProps {
  onOpenRecipe: (dish: Dish) => void;
}

export const DishesSection: React.FC<DishesSectionProps> = ({ onOpenRecipe }) => {
  return (
    <section id="mon-ngon" className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GỢI Ý THỰC ĐƠN TẨM BỔ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
            BÀO NGƯ – BIẾN TẤU NHIỀU MÓN NGON
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Từ bữa cơm gia đình đầm ấm đến tiệc đãi khách sang trọng, bào ngư Golden Food luôn là tâm điểm của sự tinh tế và giàu dưỡng chất.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISHES.map((dish) => (
            <div 
              key={dish.id}
              onClick={() => onOpenRecipe(dish)}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-primary/40 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image Container with overlay & tag */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider ${dish.tagBg}`}>
                    {dish.tag}
                  </span>
                </div>

                {/* Time Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  <span>{dish.time}</span>
                </div>

                {/* Quick Hint */}
                <div className="absolute bottom-4 right-4 text-white text-xs font-bold bg-primary/80 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  {dish.highlight}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2.5 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {dish.desc}
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Bấm xem nguyên liệu & cách nấu</span>
                  <button 
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary group-hover:text-primary-container transition-colors"
                  >
                    <ChefHat className="w-4 h-4" />
                    <span>Xem công thức</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
