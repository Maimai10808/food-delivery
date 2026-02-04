import { Drumstick, Leaf } from "lucide-react";
import type { FoodItem } from "../../interface/Food";
import { useAppDispatch } from "../../redux/store/hooks";
import { addToCart } from "../../redux/store/slices/cartSlice";

type FoodDisplayProps = {
  items: FoodItem[];
};

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodDisplay({ items }: FoodDisplayProps) {
  return (
    <div className="flex flex-wrap gap-5 px-5 justify-center items-center py-8">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function FoodCard({ item }: FoodCardProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-75 h-110 bg-white flex flex-col p-4 gap-3 rounded-lg shadow-2xl hover:border-2 border-green-300">
      <div className="h-[60%] overflow-hidden rounded-lg">
        <img
          src={item.food_image}
          alt={item.food_name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="text-2xl font-bold">{item.food_name}</div>

      <div className="flex justify-between items-center text-green-500">
        <p className="text-lg font-bold ">{item.price}/-</p>

        <div className="flex items-center font-semibold gap-2">
          {item.food_type === "veg" ? <Leaf /> : <Drumstick />}
          <span>{item.food_type}</span>
        </div>
      </div>

      <button
        className="p-3 bg-green-400 text-gray-700 hover:bg-green-300 cursor-pointer"
        onClick={() =>
          dispatch(
            addToCart({
              id: item.id,
              food_name: item.food_name,
              price: item.price,
              food_image: item.food_image,
              qty: 1,
            }),
          )
        }
      >
        Add to Dish
      </button>
    </div>
  );
}
