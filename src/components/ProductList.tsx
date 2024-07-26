import { useProducts } from "../hooks/useFetchProducts";
import { ProductCards } from "./utilities/cards/ProductCards";
import { MaterialSymbol } from "react-material-symbols";

type toggleAddProduct = {
  toggleAddProduct: () => void;
};

export const ProductList = ({ toggleAddProduct }: toggleAddProduct) => {
  const { products, loading, error } = useProducts();

  return (
    <div className="grid grid-cols-2  grid-flow-row  lg:grid-cols-3 2xl:grid-cols-5 overflow-y-auto px-2 py-4 gap-8 ">
      {!error &&
        !loading &&
        products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      <button
        data-drawer-target="add-sidebar"
        data-drawer-toggle="add-sidebar"
        aria-controls="add-sidebar"
        className="flex flex-col justify-center items-center min-h-72 border border-gray-300 rounded-lg "
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
