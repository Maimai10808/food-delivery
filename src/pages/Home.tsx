import CategoriesCard from "../components/Home/CategoriesCard";
import FoodDisplay from "../components/Home/FoodDisplay";
import { Nav } from "../components/Home/Nav";
import { FoodFilterProvider } from "../providers/food-filter-provider";
import { useFoodFilter } from "../hooks/useFoodFilter";

function HomeContent() {
  const { selectedCategory, setSelectedCategory, filteredItems } =
    useFoodFilter();

  return (
    <div className="w-full bg-slate-400 min-h-screen">
      <Nav />
      <CategoriesCard
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <FoodDisplay items={filteredItems} />
    </div>
  );
}

export function Home() {
  return (
    <FoodFilterProvider>
      <HomeContent />
    </FoodFilterProvider>
  );
}
// Home
// ├─ state: selected = "All"
// ├─ setSelected (useState setter)
// │
// ├─ <Nav />
// │
// ├─ <CategoriesCard selected={selected} onSelect={setSelected} />
// │   ├─ props.selected  ← Home.selected
// │   ├─ props.onSelect  ← Home.setSelected
// │   └─ onClick(item.name)
// │       └─ onSelect(item.name)
// │           └─ setSelected(item.name)  → 更新 Home.selected
// │
// ├─ filteredItems (useMemo, 依赖 [selected])
// │   ├─ if selected === "All" → food_items
// │   └─ else → food_items.filter(item.food_category === selected)
// │
// └─ <FoodDisplay items={filteredItems} />
//     └─ props.items ← Home.filteredItems
//         └─ render 列表（只显示该分类）

// 它用 selected 作为当前分类状态：CategoriesCard 点击后通过 setSelected 更新分类，
// useMemo 根据 selected 过滤 food_items 得到 filteredItems，
// 再把结果传给 FoodDisplay，渲染对应分类的数据。
