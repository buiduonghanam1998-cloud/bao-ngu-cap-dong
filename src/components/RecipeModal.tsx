import React, { useState } from 'react';
import { Dish } from '../types';
import { DISHES } from '../data/mockData';
import { X, Clock, Users, ChefHat, Check, Sparkles } from 'lucide-react';

interface RecipeModalProps {
  initialDish?: Dish | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ initialDish, onClose }) => {
  const [activeDish, setActiveDish] = useState<Dish>(initialDish || DISHES[0]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-surface">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <ChefHat className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 font-display">
                Cẩm Nang Ẩm Thực Bào Ngư
              </h3>
              <p className="text-[11px] text-slate-500">Công thức độc quyền từ Golden Food</p>
            </div>
          </div>
          <button
            id="close-recipe-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dish Switcher Tabs */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {DISHES.map((dish) => (
            <button
              key={dish.id}
              onClick={() => setActiveDish(dish)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeDish.id === dish.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <span>{dish.name.split(' ')[0]}</span>
              <span className="hidden sm:inline">{dish.name.split(' ').slice(1, 3).join(' ')}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Visual & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 relative rounded-2xl overflow-hidden shadow-md bg-slate-900 h-52 sm:h-64">
              <img 
                src={activeDish.image} 
                alt={activeDish.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs ${activeDish.tagBg}`}>
                  {activeDish.tag}
                </span>
              </div>
            </div>

            <div className="sm:col-span-7">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                {activeDish.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {activeDish.desc}
              </p>

              {/* Badges metadata */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>{activeDish.time}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span>{activeDish.servings || '2 - 4 người'}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeDish.highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients list */}
          {activeDish.ingredients && (
            <div className="bg-surface rounded-2xl p-5 border border-slate-200/80">
              <h4 className="text-sm font-bold text-slate-900 font-display mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Nguyên liệu chuẩn bị:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {activeDish.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cooking Steps */}
          {activeDish.steps && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-display mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                Các bước thực hiện:
              </h4>
              <div className="space-y-3">
                {activeDish.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chef Tip */}
          {activeDish.chefTip && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-200/80 text-amber-900 text-xs sm:text-sm">
              <p className="font-bold flex items-center gap-1.5 mb-1">
                💡 Bí quyết từ đầu bếp:
              </p>
              <p>{activeDish.chefTip}</p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-surface flex justify-end">
          <button
            id="close-recipe-modal-bottom-btn"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-container transition-all"
          >
            Đã hiểu, đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
