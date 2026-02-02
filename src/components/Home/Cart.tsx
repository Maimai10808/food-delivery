import { X } from "lucide-react";
import { useShowCart } from "../../hooks/useshowCart";

export default function Cart() {
  const { setshowCart } = useShowCart();
  return (
    <div className="w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl">
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
    </div>
  );
}
