import { createContext } from "react";
import type { FoodItem } from "../interface/Food";

export type FoodFilterContextValue = {
  selectedCategory: string;
  searchText: string;

  setSelectedCategory: (category: string) => void;
  setSearchText: (text: string) => void;

  filteredItems: FoodItem[];
};

export const FoodFilterContext = createContext<FoodFilterContextValue | null>(
  null,
);

// 要点：Context 只定义“你打算共享什么”，不放业务实现。
