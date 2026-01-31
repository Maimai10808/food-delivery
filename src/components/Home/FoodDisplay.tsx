import FoodCard from "./FoodCard";
import type { FoodItem } from "../../interface/Food";

type FoodDisplayProps = {
  items: FoodItem[];
};

export default function FoodDisplay({ items }: FoodDisplayProps) {
  return (
    <div className="flex flex-wrap gap-5 px-5 justify-center items-center py-8">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}
