// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

// Mock data for product cards
const productData = [
  {
    id: 1,
    name: "Shrimp Burger",
    weight: "350g",
    description: "wheat bun, pickles, crispy shrimp, seafood sauce",
    price: "$20",
    imageUrl:
      "https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png",
  },
  // Add more products here if needed
];

export const handlers = [
  // Define the mock API endpoint using the new API
  http.get("/api/products", () => {
    return HttpResponse.json(productData);
  }),
];
