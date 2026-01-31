import type { JSX } from "react";

export interface FoodItem {
  id: number;
  food_name: string;
  food_category: string;
  food_type: string;
  food_quantity: number;
  food_image: string; // Vite 导入图片一般是 string url
  price: number;
}

export interface CategoryItem {
  id: number;
  name: string;
  icon: JSX.Element;
}
