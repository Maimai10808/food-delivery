import { Hamburger, Search, ShoppingBag } from "lucide-react";
import { useFoodFilter } from "../../hooks/useFoodFilter";

export function Nav() {
  const { searchText, setSearchText } = useFoodFilter();

  return (
    <div className="w-full h-25 bg-red-200 flex justify-between items-center px-5 md:px-10">
      <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-2xl">
        <Hamburger className="w-10 h-10 text-green-500" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[40%] md:w-[60%] h-15 bg-white flex items-center px-5 gap-5 rounded-md shadow-2xl"
      >
        <Search className="w-10 h-10 text-green-500" />
        <input
          type="text"
          placeholder="Search Items...."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // 可选：你也可以选择“搜索时重置分类”
            // setSelectedCategory("All");
          }}
          className="w-full h-[90%] outline-none text-[16px] md:text-2xl"
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

// 要点：搜索框变成受控输入（value + onChange），
// 它更新的是 Context 里的 searchText，于是 Provider 里的 filteredItems 会自动更新，
// FoodDisplay 就自然显示匹配结果。
