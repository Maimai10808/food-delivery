import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { FoodItem } from "../interface/Food";
import { food_items } from "../food";
import { FoodFilterContext } from "../context/food-filter-context";

type Props = {
  children: ReactNode;
};

export function FoodFilterProvider({ children }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchText, setSearchText] = useState<string>("");

  const filteredItems = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();

    return food_items.filter((item: FoodItem) => {
      const matchCategory =
        selectedCategory === "All" || item.food_category === selectedCategory;

      const matchSearch =
        keyword.length === 0 || item.food_name.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchText]);

  const value = useMemo(
    () => ({
      selectedCategory,
      searchText,
      setSelectedCategory,
      setSearchText,
      filteredItems,
    }),
    [selectedCategory, searchText, filteredItems],
  );

  return (
    <FoodFilterContext.Provider value={value}>
      {children}
    </FoodFilterContext.Provider>
  );
}

// 要点：
// 	•	Provider 负责 state（selectedCategory + searchText）
// 	•	filteredItems 放在 Provider 里统一派生，避免每个页面重复写过滤逻辑
// 	•	value 用 useMemo 包一下，减少无意义渲染（工程化习惯）
