import { useMemo, useState } from "react";
import CategoriesCard from "../components/Home/CategoriesCard";
import FoodDisplay from "../components/Home/FoodDisplay";
import { food_items } from "../food";
import { Nav } from "../components/Home/Nav";

export function Home() {
  const [selected, setSelected] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (selected === "All") return food_items;
    return food_items.filter((item) => item.food_category === selected);
  }, [selected]);

  return (
    <div className="w-full bg-slate-400 min-h-screen">
      <Nav />
      <CategoriesCard selected={selected} onSelect={setSelected} />
      <FoodDisplay items={filteredItems} />
    </div>
  );
}
