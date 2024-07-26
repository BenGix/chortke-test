import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";
import type { Product } from "../types/product"; // Assuming this import is correct

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to introduce a delay
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const loadProducts = async () => {
      try {
        setLoading(true);
        await delay(500); // Delay for 1 second
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};
