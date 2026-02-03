import { Trash2, X } from "lucide-react";
import { useShowCart } from "../../hooks/useshowCart";
import { QuantitySelector } from "../ui/QuantitySelector";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { food_items } from "../../food";

export default function Cart() {
  const { setshowCart } = useShowCart();

  return (
    <div className="md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl">
      <header className="flex justify-between items-center p-10 text-green-400 text-[18px] font-semibold">
        <span>Order items</span>

        <button
          onClick={() => {
            setshowCart(false);
          }}
        >
          <X />
        </button>
      </header>
      <CartFoodCard />
      <div className="px-10 ">
        <Separator />
        <div className="py-5 ">
          <div className="flex justify-between items-center">
            <p className="font-bold">Subtotal</p>
            <span className="text-green-400 font-semibold">Rs 399/-</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Delivery Fee</p>
            <span className="text-green-400 font-semibold">Rs 20/-</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Taxes</p>
            <span className="text-green-400 font-semibold">Rs 1.995/-</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center text-2xl  py-5">
          <p className="font-bold">Total</p>
          <span className="text-green-400 font-semibold ">Rs 420/-</span>
        </div>
        <button></button>
      </div>
    </div>
  );
}

function CartFoodCard() {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex h-30  shadow-2xl p-2 justify-between">
      {/* Left-Part */}
      <div className="flex w-[60%] gap-2">
        {/* Img */}
        <div className="w-[50%] overflow-hidden rounded-2xl">
          <img src={food_items[0].food_image} alt="" className="object-cover" />
        </div>
        {/* QuantitySelector */}
        <div className="w=[40%] flex flex-col gap-5 justify-center items-center">
          <p className="text-lg text-gray-700 font-semibold text-center">
            Chicken Soup
          </p>
          <QuantitySelector value={qty} onChange={setQty} min={1} max={99} />
        </div>
      </div>
      {/* {Right-part} */}
      <div className="flex flex-col justify-between items-end pr-2 ">
        <p className="text-2xl text-green-400 font-semibold">Rs 399/-</p>
        <button>
          <Trash2 className="text-red-500 w-7.5 h-7.5" />
        </button>
      </div>
    </div>
  );
}
