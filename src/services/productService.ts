// src/services/productService.ts

import axios from "axios";
import type { Product } from "../types/product";

// Function to fetch products using axios
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
