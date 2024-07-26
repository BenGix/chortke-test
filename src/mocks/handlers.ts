import { http, HttpResponse } from "msw";
import type { Product } from "../types/product";
import productData from "../data/products.json"; // Adjust the path as needed

export const handlers = [
  http.get("/api/products", () => {
    return HttpResponse.json(productData);
  }),

  http.post("/api/products", async ({ request }) => {
    const newProduct = (await request.json()) as Omit<Product, "id">;

    const id = productData.length
      ? Math.max(...productData.map((p) => p.id)) + 1
      : 1;

    const productToAdd: Product = { ...newProduct, id };

    productData.push(productToAdd);
    console.log(productToAdd);
    console.log(productData);
    return HttpResponse.json(productToAdd, { status: 201 });
  }),
];
