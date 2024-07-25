import "./App.css";
import "react-material-symbols/rounded";

import { Aside } from "./components/asides/Aside";
import { SearchBar } from "./components/utilities/SearchBar";
import NavListItem from "./components/utilities/ListItem";
import { MaterialSymbol } from "react-material-symbols";

function App() {
  return (
    <>
      <Aside />
      <main>
        <SearchBar />
        <div className="w-full flex justify-between items-center rounded-xl ps-12 pe-8  bg-white ">
          <ul className="flex flex-grow gap-16">
            <NavListItem label="Main course" icon={"fastfood"} />
            <NavListItem label="Side dishes" icon={"soup_kitchen"} />
            <NavListItem label="Drinks" icon={"soup_kitchen"} />
            <NavListItem label="Others" icon={"local_cafe"} />
          </ul>

          <MaterialSymbol icon={"more_vert"} size={28} fill color="#000" />
        </div>
        <div className="flex flex-wrap gap-4 ">
          <div className="flex-1 max-w-64 min-w-52 flex-grow flex-shrink	w-auto flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
            <img
              src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
              className="max-w-36 -translate-y-8"
            />
            <div className="flex flex-col gap-2  -translate-y-4">
              <h3 className="text-xl font-bold">Shrimp Burger</h3>
              <span className="text-sm font-light">350g</span>
              <p className="text-pretty">
                <span>wheat bun</span> , <span>pickles</span>,
                <span>crispy shrimp</span>, <span>seafood sauce</span>
              </p>
              <div className="w-full flex justify-between">
                <span>20$</span>
                <div className="flex">
                  <button>
                    <MaterialSymbol
                      icon="settings"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                  <button>
                    <MaterialSymbol
                      icon="visibility"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>          <div className="flex-1 max-w-64 min-w-52 flex-grow flex-shrink	w-auto flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
            <img
              src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
              className="max-w-36 -translate-y-8"
            />
            <div className="flex flex-col gap-2  -translate-y-4">
              <h3 className="text-xl font-bold">Shrimp Burger</h3>
              <span className="text-sm font-light">350g</span>
              <p className="text-pretty">
                <span>wheat bun</span> , <span>pickles</span>,
                <span>crispy shrimp</span>, <span>seafood sauce</span>
              </p>
              <div className="w-full flex justify-between">
                <span>20$</span>
                <div className="flex">
                  <button>
                    <MaterialSymbol
                      icon="settings"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                  <button>
                    <MaterialSymbol
                      icon="visibility"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>          <div className="flex-1 max-w-64 min-w-52 flex-grow flex-shrink	w-auto flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
            <img
              src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
              className="max-w-36 -translate-y-8"
            />
            <div className="flex flex-col gap-2  -translate-y-4">
              <h3 className="text-xl font-bold">Shrimp Burger</h3>
              <span className="text-sm font-light">350g</span>
              <p className="text-pretty">
                <span>wheat bun</span> , <span>pickles</span>,
                <span>crispy shrimp</span>, <span>seafood sauce</span>
              </p>
              <div className="w-full flex justify-between">
                <span>20$</span>
                <div className="flex">
                  <button>
                    <MaterialSymbol
                      icon="settings"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                  <button>
                    <MaterialSymbol
                      icon="visibility"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>          <div className="flex-1 max-w-64 min-w-52 flex-grow flex-shrink	w-auto flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
            <img
              src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
              className="max-w-36 -translate-y-8"
            />
            <div className="flex flex-col gap-2  -translate-y-4">
              <h3 className="text-xl font-bold">Shrimp Burger</h3>
              <span className="text-sm font-light">350g</span>
              <p className="text-pretty">
                <span>wheat bun</span> , <span>pickles</span>,
                <span>crispy shrimp</span>, <span>seafood sauce</span>
              </p>
              <div className="w-full flex justify-between">
                <span>20$</span>
                <div className="flex">
                  <button>
                    <MaterialSymbol
                      icon="settings"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                  <button>
                    <MaterialSymbol
                      icon="visibility"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>          <div className="flex-1 max-w-64 min-w-52 flex-grow flex-shrink	w-auto flex flex-col  items-center justify-center rounded-lg px-4 bg-white text-center">
            <img
              src="https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png"
              className="max-w-36 -translate-y-8"
            />
            <div className="flex flex-col gap-2  -translate-y-4">
              <h3 className="text-xl font-bold">Shrimp Burger</h3>
              <span className="text-sm font-light">350g</span>
              <p className="text-pretty">
                <span>wheat bun</span> , <span>pickles</span>,
                <span>crispy shrimp</span>, <span>seafood sauce</span>
              </p>
              <div className="w-full flex justify-between">
                <span>20$</span>
                <div className="flex">
                  <button>
                    <MaterialSymbol
                      icon="settings"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                  <button>
                    <MaterialSymbol
                      icon="visibility"
                      fill
                      color="#000"
                      size={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
