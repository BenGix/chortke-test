// components/Product.tsx
import React from "react";
import { ProductList } from "../../components/ProductList";
import { AddProductForm } from "../../components/forms/AddProductForm";
import { EditProductForm } from "../../components/forms/EditProductForm";
import { ViewProduct } from "../../components/forms/ViewProduct";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { MaterialSymbol } from "react-material-symbols";
import { Overlay } from "../../components/utilities/DarkOverlay";
import { toggleTheme } from "../../redux/themeSlice";
import { toggleCurrency } from "../../redux/currencySlice";
import { SearchBar } from "../../components/utilities/SearchBar";
import { FilterList } from "../../components/filters/FilterList";

const Product: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isViewMode, setIsViewMode] = React.useState(false);
  const [filter, setFilter] = React.useState<"all" | "vegan" | "non-vegan">(
    "all"
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [productListKey, setProductListKey] = React.useState(
    `collapsed-${Date.now()}`
  );
  const [selectedProductId, setSelectedProductId] = React.useState<
    number | null
  >(null);

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
    setSelectedProductId(null);
    setIsEditMode(false);
    setIsViewMode(false);
  };

  const handleSelectProductToEdit = (productId: number) => {
    setSelectedProductId(productId);
    setIsExpanded(true);
    setIsEditMode(true);
    setIsViewMode(false);
  };

  const handleSelectProductToView = (productId: number) => {
    setSelectedProductId(productId);
    setIsExpanded(true);
    setIsViewMode(true);
    setIsEditMode(false);
  };

  const toggleAddProduct = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <header>
        <FilterList filter={filter} setFilter={setFilter} />
        <div className="flex gap-8 items-center">
          <button onClick={handleCurrencyToggle} className="ml-2">
            {currency === "USD" ? "تومان" : "$"}
          </button>
          <button onClick={handleThemeToggle}>
            <MaterialSymbol icon={icon} color={iconColor} size={36} fill />
          </button>
        </div>
      </header>
      <ProductList
        key={productListKey}
        toggleAddProduct={toggleAddProduct}
        filter={filter}
        searchTerm={searchTerm}
        onSelectProductToEdit={handleSelectProductToEdit}
        onSelectProductToView={handleSelectProductToView}
      />
      <aside
        id="default-sidebar"
        className={`fixed shadow-main flex flex-col items-start p-4 z-[100] top-0 right-0 w-1/3 h-screen bg-white transition-transform duration-500 ease-in-out transform ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between">
          <h2>
            {isEditMode
              ? "Edit product"
              : isViewMode
              ? "View product"
              : "Add new product"}
          </h2>
          <button
            onClick={() => {
              toggleAddProduct();
              setIsEditMode(false);
              setIsViewMode(false);
            }}
          >
            <MaterialSymbol icon={"close"} size={24} color="#000" />
          </button>
        </div>
        {isEditMode ? (
          <EditProductForm
            toggleEditProduct={toggleAddProduct}
            onProductSubmit={handleProductSubmit}
            productId={selectedProductId}
          />
        ) : isViewMode ? (
          <ViewProduct
            productId={selectedProductId}
            toggleViewProduct={toggleAddProduct}
          />
        ) : (
          <AddProductForm
            toggleAddProduct={toggleAddProduct}
            onProductSubmit={handleProductSubmit}
          />
        )}
      </aside>
      {isExpanded && <Overlay toggleAddProduct={toggleAddProduct} />}
    </>
  );
};

export default Product;
