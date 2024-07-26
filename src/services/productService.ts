// src/services/productService.ts

import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "/api/products";

// Function to fetch products using axios
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (
  newProduct: Omit<Product, "id">
): Promise<Product> => {
  try {
    const response = await axios.post<Product>(API_URL, newProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
