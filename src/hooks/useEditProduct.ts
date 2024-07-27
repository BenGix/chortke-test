// hooks/useEditProduct.ts
import { useState } from "react";
import { updateProduct } from "../services/productService";
import type { Product } from "../types/product";

export function useEditProduct() {
  const [error, setError] = useState<string | null>(null);

  const handleEditProduct = async (
    id: number,
    updatedFields: Partial<Product>
  ) => {
    try {
      await updateProduct(id, updatedFields);
      setError(null); // Clear any existing error after successful update
    } catch (err) {
      setError("Failed to edit product");
    }
  };

  return { handleEditProduct, error };
}
