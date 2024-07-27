// App.tsx
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
import { EditProductForm } from "./components/forms/EditProductForm"; // Import the edit form
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";
import { RootState } from "./redux/store";
import { toggleCurrency } from "./redux/currencySlice";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // State to manage edit mode
  const [filter, setFilter] = useState<"all" | "vegan" | "non-vegan">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [productListKey, setProductListKey] = useState(
    `collapsed-${Date.now()}`
  );
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  ); // State to store selected product ID

  const toggleAddProduct = () => {
    setIsExpanded((prev) => !prev);
  };

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currency = useSelector((state: RootState) => state.currency.currency);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleCurrencyToggle = () => {
    dispatch(toggleCurrency());
  };

  const iconColor = theme === "dark" ? "#fff" : "#313131";
  const icon = theme === "dark" ? "dark_mode" : "light_mode";

  const handleProductSubmit = () => {
    setProductListKey(`list-${Date.now()}`);
    setSelectedProductId(null); // Reset selected product ID
    setIsEditMode(false); // Exit edit mode
  };

  const handleSelectProductToEdit = (productId: number) => {
    setSelectedProductId(productId);
    setIsExpanded(true);
    setIsEditMode(true);
  };

  return (
    <div className={theme}>
      <Aside />
      <main>
        <SearchBar setSearchTerm={setSearchTerm} />
        <header>
          <FilterList filter={filter} setFilter={setFilter} />
          <div className="flex gap-4 items-center">
            <button onClick={handleThemeToggle}>
              <MaterialSymbol icon={icon} color={iconColor} size={36} fill />
            </button>

            <button onClick={handleCurrencyToggle} className="ml-2">
              {currency === "USD" ? "تومان" : "$"}
            </button>
          </div>
        </header>

        <ProductList
          key={productListKey}
          toggleAddProduct={toggleAddProduct}
          filter={filter}
          searchTerm={searchTerm}
          onSelectProductToEdit={handleSelectProductToEdit} // Pass the handler
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
          <h2>{isEditMode ? "Edit product" : "Add new product"}</h2>

          <button onClick={toggleAddProduct}>
            <MaterialSymbol icon={"close"} size={24} color="#000" />
          </button>
        </div>
        {isEditMode ? (
          <EditProductForm
            toggleEditProduct={toggleAddProduct}
            onProductSubmit={handleProductSubmit}
            productId={selectedProductId} // Pass selected product ID
          />
        ) : (
          <AddProductForm
            toggleAddProduct={toggleAddProduct}
            onProductSubmit={handleProductSubmit}
          />
        )}
      </aside>
    </div>
  );
}

export default App;
