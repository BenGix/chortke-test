// src/services/productService.ts

import axios from "axios";

export interface Product {
  id: number;
  name: string;
  weight: string;
  description: string;
  price: string;
  imageUrl: string;
}

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
