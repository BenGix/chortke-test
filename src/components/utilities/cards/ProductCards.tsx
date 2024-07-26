import { MaterialSymbol } from "react-material-symbols";

export const ProductCards = () => {
  return (
    <div className="max-w-80 min-w-38 flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
      <img
        src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
        className="max-w-36 -mt-8"
        alt="food"
      />
      <div className="flex flex-col gap-2 pb-4">
        <h3 className="text-xl font-bold">Shrimp Burger</h3>
        <span className="text-sm font-light">350g</span>
        <p className="text-pretty">
          <span>wheat bun</span> , <span>pickles</span>,
          <span>crispy shrimp</span>, <span>seafood sauce</span>
        </p>
        <div className="w-full flex items-center justify-between">
          <span>20$</span>
          <div className="flex gap-2">
            <button className="aspect-square  p-2 border border-gray-400 rounded-lg">
              <MaterialSymbol icon="settings" fill color="#000" size={24} />
            </button>
            <button className=" aspect-square p-2 border border-gray-400 rounded-lg">
              <MaterialSymbol icon="visibility" fill color="#000" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
