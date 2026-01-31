import Categories from "../Category";
import { Nav } from "../components/Nav";

export function Home() {
  return (
    <div className="w-full bg-slate-400 min-h-screen">
      <Nav />

      <div className="flex flex-wrap justify-center items-center gap-10 ">
        {Categories.map((item) => {
          return (
            <div
              className="w-35 h-40 bg-white flex-col items-start p-5 gap-10
                         justify-start text-xl font-semibold text-gray-600
                         rounded-md shadow-2xl hover:bg-green-200 cursor-pointer
                         transition-all duration-200
                         "
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
