// src/App.tsx

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
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";
import { RootState } from "./redux/store"; // Import RootState

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState<"all" | "vegan" | "non-vegan">("all");

  const toggleAddProduct = () => {
    setIsExpanded((prev) => !prev);
  };

  const productListKey = isExpanded
    ? `expanded-${Date.now()}`
    : `collapsed-${Date.now()}`;

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme); // Use RootState here

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme}>
      <Aside />
      <main>
        <SearchBar />

        <div className="w-full flex justify-between items-center rounded-xl ps-12 pe-8 bg-white ">
          <FilterList filter={filter} setFilter={setFilter} />

          <button onClick={handleThemeToggle}>
            Toggle to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
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
    </div>
  );
}

export default App;
