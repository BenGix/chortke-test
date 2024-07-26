import { useState } from "react";
import { addProduct } from "../services/productService";
import type { Product } from "../types/product";

export function useAddProduct() {
  const [error, setError] = useState<string | null>(null);

  const handleAddProduct = async (newProduct: Omit<Product, "id">) => {
    try {
      await addProduct(newProduct);
    } catch (err) {
      setError("Failed to add product");
    }
  };

  return { handleAddProduct, error };
}
