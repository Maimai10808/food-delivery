import { Trash2, X } from "lucide-react";
import { QuantitySelector } from "../ui/QuantitySelector";
import { Separator } from "../ui/separator";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { closeCart } from "../../redux/store/slices/uiSlice";
import {
  selectCartItems,
  selectCartSubtotal,
  removeFromCart,
  setQty,
} from "../../redux/store/slices/cartSlice";
import { Button } from "../ui/button";

export default function Cart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);

  // 你现在写死的费用，我给你保留个示例
  const deliveryFee = items.length > 0 ? 20 : 0;
  const taxes = subtotal * 0.05; // 举例：5%
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl">
      <header className="flex justify-between items-center p-10 text-green-400 text-[18px] font-semibold">
        <span>Order items</span>

        <button onClick={() => dispatch(closeCart())}>
          <X />
        </button>
      </header>

      <div className="px-6 flex flex-col gap-3">
        {items.length === 0 ? (
          <div className="p-6 text-gray-500 text-5xl font-semibold">
            Cart is empty.
          </div>
        ) : (
          items.map((item) => (
            <CartFoodCard
              key={item.id}
              id={item.id}
              title={item.food_name}
              image={item.food_image}
              price={item.price}
              qty={item.qty}
            />
          ))
        )}
      </div>

      <div className="px-10 ">
        <Separator />
        <div className="py-5 ">
          <div className="flex justify-between items-center">
            <p className="font-bold">Subtotal</p>
            <span className="text-green-400 font-semibold">
              Rs {subtotal.toFixed(2)}/-
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Delivery Fee</p>
            <span className="text-green-400 font-semibold">
              Rs {deliveryFee.toFixed(2)}/-
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Taxes</p>
            <span className="text-green-400 font-semibold">
              Rs {taxes.toFixed(2)}/-
            </span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center text-2xl  py-5">
          <p className="font-bold">Total</p>
          <span className="text-green-400 font-semibold ">
            Rs {total.toFixed(2)}/-
          </span>
        </div>
        <Button className="w-full h-12 bg-green-400">
          <p className="font-bold text-xl text-gray-200">Place Order</p>
        </Button>
      </div>
    </div>
  );
}

function CartFoodCard(props: {
  id: number;
  title: string;
  image: string;
  price: number;
  qty: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-30 shadow-2xl p-2 justify-between">
      <div className="flex w-[60%] gap-2">
        <div className="w-[50%] overflow-hidden rounded-2xl">
          <img src={props.image} alt="" className="object-cover" />
        </div>

        <div className="w=[40%] flex flex-col gap-5 justify-center items-center">
          <p className="text-lg text-gray-700 font-semibold text-center">
            {props.title}
          </p>

          <QuantitySelector
            value={props.qty}
            onChange={(newQty) =>
              dispatch(setQty({ id: props.id, qty: newQty }))
            }
            min={1}
            max={99}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-end pr-2 ">
        <p className="text-2xl text-green-400 font-semibold">
          Rs {(props.price * props.qty).toFixed(2)}/-
        </p>
        <button onClick={() => dispatch(removeFromCart({ id: props.id }))}>
          <Trash2 className="text-red-500 w-7.5 h-7.5" />
        </button>
      </div>
    </div>
  );
}
