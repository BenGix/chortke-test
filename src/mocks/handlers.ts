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
  {
    id: 2,
    name: "Shrimp Burger",
    weight: "350g",
    description: "wheat bun, pickles, crispy shrimp, seafood sauce",
    price: "$20",
    imageUrl:
      "https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png",
  },
  {
    id: 3,
    name: "Shrimp Burger",
    weight: "350g",
    description: "wheat bun, pickles, crispy shrimp, seafood sauce",
    price: "$20",
    imageUrl:
      "https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png",
  },
  {
    id: 4,
    name: "Shrimp Burger",
    weight: "350g",
    description: "wheat bun, pickles, crispy shrimp, seafood sauce",
    price: "$20",
    imageUrl:
      "https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png",
  },
  {
    id: 5,
    name: "Shrimp Burger",
    weight: "350g",
    description: "wheat bun, pickles, crispy shrimp, seafood sauce",
    price: "$20",
    imageUrl:
      "https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png",
  },
];

export const handlers = [
  http.get("/api/products", () => {
    return HttpResponse.json(productData);
  }),
];
