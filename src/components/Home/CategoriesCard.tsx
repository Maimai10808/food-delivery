import Categories from "../../Category";

type Props = {
  selected: string;
  onSelect: (name: string) => void;
};

export default function CategoriesCard({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {Categories.map((item) => {
        const active = selected === item.name;
        return (
          <div
            key={item.id}
            onClick={() => onSelect(item.name)}
            className={`w-35 h-40 bg-white flex-col items-start p-5 gap-10
              justify-start text-xl font-semibold text-gray-600
              rounded-md shadow-2xl cursor-pointer transition-all duration-200
              ${active ? "bg-green-200 border-2 border-green-400" : "hover:bg-green-200"}`}
          >
            {item.icon}
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
