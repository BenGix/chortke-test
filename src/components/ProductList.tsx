import React from "react";
import { useProducts } from "../hooks/useFetchProducts";
import { MaterialSymbol } from "react-material-symbols";
import { ProductCards } from "./utilities/cards/ProductCards";

type ProductListProps = {
  toggleAddProduct: () => void;
  onSelectProductToEdit: (productId: number) => void;
  onSelectProductToView: (productId: number) => void;
  filter: "all" | "vegan" | "non-vegan";
  searchTerm: string;
};

export const ProductList: React.FC<ProductListProps> = ({
  toggleAddProduct,
  onSelectProductToEdit,
  onSelectProductToView,
  filter,
  searchTerm,
}) => {
  const { products, loading, error } = useProducts();

  const filteredProducts = products.filter((product) => {
    const matchesFilter =
      filter === "all" || (filter === "vegan" ? product.vegan : !product.vegan);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.description.toLowerCase().includes(lowerCaseSearchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="grid grid-cols-2 grid-flow-row lg:grid-cols-3 2xl:grid-cols-5 overflow-y-auto px-2 py-8 gap-8">
      {!error &&
        !loading &&
        filteredProducts.map((product) => (
          <ProductCards
            key={product.id}
            product={product}
            onSelectProductToEdit={onSelectProductToEdit}
            onSelectProductToView={onSelectProductToView} // Pass correct function
          />
        ))}
      <button
        data-drawer-target="add-sidebar"
        data-drawer-toggle="add-sidebar"
        aria-controls="add-sidebar"
        className="flex flex-col justify-center items-center min-h-72 border border-gray-300 rounded-lg"
        onClick={toggleAddProduct}
      >
        <MaterialSymbol icon="add" />
        <p className="text-xl font-bold text-wrap">
          Add new <br />
          product
        </p>
      </button>
    </div>
  );
};
