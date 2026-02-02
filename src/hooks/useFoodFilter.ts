import { useContext } from "react";
import { FoodFilterContext } from "../context/food-filter-context";

export function useFoodFilter() {
  const ctx = useContext(FoodFilterContext);
  if (!ctx) {
    throw new Error("useFoodFilter must be used within FoodFilterProvider");
  }
  return ctx;
}

// 要点：以后任何组件想用筛选状态，只写一行 useFoodFilter()。
