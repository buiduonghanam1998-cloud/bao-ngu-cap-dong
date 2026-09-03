import React, { useState } from 'react';
import { ProductPlan, OrderData, Dish } from './types';
import { DISHES } from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { DishesSection } from './components/DishesSection';
import { PricingCompareSection } from './components/PricingCompareSection';
import { QualityDetailsSection } from './components/QualityDetailsSection';
import { StepsSection } from './components/StepsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { OrderFormSection } from './components/OrderFormSection';
import { ThankYouScreen } from './components/ThankYouScreen';
import { RecipeModal } from './components/RecipeModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

// Default initial order reflecting the sample from Image 8 (#GF-88692)
const INITIAL_DEMO_ORDER: OrderData = {
  orderCode: '#GF-88692',
  plan: '2kg',
  planName: 'Combo 2KG Bào Ngư Tiết Kiệm',
  unitPrice: 900000,
  quantity: 1,
  savings: 400000,
  totalAmount: 900000,
  fullName: 'Nguyễn Thu Trang',
  phone: '0988 765 432',
  address: 'Số 18 ngõ 92 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội',
  note: 'Giao giờ hành chính giúp mình nhé',
  createdAt: '14:30, 24/10/2024',
  status: 'confirmed'
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'success'>('home');
  const [selectedPlan, setSelectedPlan] = useState<ProductPlan>('2kg');
  const [currentOrder, setCurrentOrder] = useState<OrderData>(INITIAL_DEMO_ORDER);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState<boolean>(false);

  const handleScrollToOrder = () => {
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
      setTimeout(() => {
        const el = document.getElementById('dat-hang');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('dat-hang');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: ProductPlan) => {
    setSelectedPlan(plan);
  };

  const handleSubmitOrder = (order: OrderData) => {
    setCurrentOrder(order);
    setCurrentScreen('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRecipe = (dish: Dish) => {
    setSelectedDish(dish);
    setIsRecipeModalOpen(true);
  };

  const handleOpenAllRecipes = () => {
    setSelectedDish(DISHES[0]);
    setIsRecipeModalOpen(true);
  };

  const handleCloseRecipe = () => {
    setIsRecipeModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary/20 selection:text-primary">
      {/* Header & Screen Navigator */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onScrollToOrder={handleScrollToOrder}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'home' ? (
          <div>
            {/* Screen 1: Hero with 1KG vs 2KG pricing */}
            <HeroSection
              selectedPlan={selectedPlan}
              onSelectPlan={handleSelectPlan}
              onScrollToOrder={handleScrollToOrder}
            />

            {/* Why choose Golden Food */}
            <WhyChooseSection />

            {/* 6 Delicious Dishes with photos & recipes */}
            <DishesSection onOpenRecipe={handleOpenRecipe} />

            {/* 1KG vs 2KG Combo value comparison */}
            <PricingCompareSection
              selectedPlan={selectedPlan}
              onSelectPlan={handleSelectPlan}
              onScrollToOrder={handleScrollToOrder}
            />

            {/* Fresh Quality Details close-up */}
            <QualityDetailsSection />

            {/* 4 Easy Order Steps */}
            <StepsSection />

            {/* Customer Testimonials & Reviews */}
            <ReviewsSection />

            {/* Frequently Asked Questions Accordion */}
            <FaqSection />

            {/* Direct Order Form */}
            <OrderFormSection
              selectedPlan={selectedPlan}
              onSelectPlan={handleSelectPlan}
              onSubmitOrder={handleSubmitOrder}
            />

            {/* Sticky Bottom Bar for fast ordering */}
            <StickyBottomBar
              selectedPlan={selectedPlan}
              onScrollToOrder={handleScrollToOrder}
            />
          </div>
        ) : (
          /* Screen 2: Thank You / Order Confirmation (#GF-88692) */
          <ThankYouScreen
            order={currentOrder}
            onBackToHome={handleBackToHome}
            onOpenRecipe={handleOpenRecipe}
            onOpenAllRecipes={handleOpenAllRecipes}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Recipe Detail Modal */}
      {isRecipeModalOpen && (
        <RecipeModal
          initialDish={selectedDish}
          onClose={handleCloseRecipe}
        />
      )}
    </div>
  );
}
