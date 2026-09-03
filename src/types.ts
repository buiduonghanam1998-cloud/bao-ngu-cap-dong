export type ProductPlan = '1kg' | '2kg';

export interface OrderData {
  orderCode: string;
  plan: ProductPlan;
  planName: string;
  unitPrice: number;
  quantity: number;
  savings: number;
  totalAmount: number;
  fullName: string;
  phone: string;
  address: string;
  note?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'shipping';
}

export interface Dish {
  id: string;
  name: string;
  tag: string;
  tagBg: string;
  desc: string;
  time: string;
  highlight: string;
  icon: string;
  image: string;
  prepTime?: string;
  difficulty?: string;
  servings?: string;
  ingredients?: string[];
  steps?: string[];
  chefTip?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  avatarBg: string;
  location: string;
  packagePurchased: string;
  comment: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
