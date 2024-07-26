// src/components/ProductCards.tsx

import { MaterialSymbol } from "react-material-symbols";
import type { Product } from "../../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCards: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative min-w-38 flex flex-col items-center justify-center rounded-lg px-4 bg-white text-center">
      <div className="absolute right-4 top-4">
        <MaterialSymbol size={20} icon="eco" fill color="#57b66c" />
      </div>
      <img
        src={product.imageUrl}
        className="max-w-36 -mt-8"
        alt={product.name}
      />
      <div className="flex flex-col gap-2 pb-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <span className="text-sm font-light">{product.weight}</span>
        <p className="text-pretty">{product.description}</p>
        <div className="w-full flex items-center justify-between">
          <span>{product.price}</span>
          <div className="flex gap-2">
            <button className="aspect-square p-2 border border-gray-400 rounded-lg">
              <MaterialSymbol icon="settings" fill color="#000" size={24} />
            </button>
            <button className="aspect-square p-2 border border-gray-400 rounded-lg">
              <MaterialSymbol icon="visibility" fill color="#000" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
