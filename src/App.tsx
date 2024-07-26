import "./App.css";
import "react-material-symbols/rounded";
import { useState } from "react";
import { Aside } from "./components/asides/Aside";
import { SearchBar } from "./components/utilities/SearchBar";
import { MaterialSymbol } from "react-material-symbols";
import { FilterList } from "./components/filters/FilterList";
import { Overlay } from "./components/utilities/DarkOverlay";
import { ProductList } from "./components/ProductList";
import { AddProductForm } from "./components/forms/AddProductForm";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState<"all" | "vegan" | "non-vegan">("all");

  const toggleAddProduct = () => {
    setIsExpanded((prev) => !prev);
  };

  const productListKey = isExpanded
    ? `expanded-${Date.now()}`
    : `collapsed-${Date.now()}`;

  return (
    <>
      <Aside />
      <main>
        <SearchBar />

        <div className="w-full flex justify-between items-center rounded-xl ps-12 pe-8 bg-white ">
          <FilterList filter={filter} setFilter={setFilter} />

          <MaterialSymbol icon={"more_vert"} size={28} fill color="#000" />
        </div>

        <ProductList
          key={productListKey}
          toggleAddProduct={toggleAddProduct}
          filter={filter}
        />
      </main>

      {isExpanded && <Overlay toggleAddProduct={toggleAddProduct} />}

      <aside
        id="default-sidebar"
        className={`fixed shadow-main flex flex-col items-start p-4 z-[100] top-0 right-0 w-1/3 h-screen bg-white transition-transform duration-500 ease-in-out transform ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between">
          <h2>Add new product</h2>

          <button onClick={toggleAddProduct}>
            <MaterialSymbol icon={"close"} size={24} color="#000" />
          </button>
        </div>
        <AddProductForm toggleAddProduct={toggleAddProduct} />
      </aside>
    </>
  );
}

export default App;
