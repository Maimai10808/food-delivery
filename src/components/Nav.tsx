import { Hamburger, Search, ShoppingBag } from "lucide-react";

export function Nav() {
  return (
    <div className="w-full h-25 bg-red-200 flex justify-between items-center px-5">
      <div className="w-15 h-15 bg-white  flex justify-center items-center rounded-md shadow-2xl">
        <Hamburger className="w-10 h-10 text-green-500" />
      </div>
      <form
        action=""
        className="w-[60%] h-15 bg-white flex items-center px-5 gap-5 rounded-md  shadow-2xl"
      >
        <Search className="w-10 h-10 text-green-500" />
        <input
          type="text"
          placeholder="Search Items...."
          className="w-full h-[90%] outline-none text-2xl"
        />
      </form>
      <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-2xl relative">
        <span className="absolute top-0 right-1 font-semibold text-green-500 text-[16px]">
          0
        </span>
        <ShoppingBag className="w-10 h-10 text-green-500" />
      </div>
    </div>
  );
}
