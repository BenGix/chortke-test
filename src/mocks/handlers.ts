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

  http.put("/api/products/:id", async ({ request, params }) => {
    const updatedProductData = (await request.json()) as Partial<Product>;
    const productId = Number(params.id);

    // Find the product by ID
    const productIndex = productData.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
      return HttpResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const updatedProduct = {
      ...productData[productIndex],
      ...updatedProductData,
    };
    productData[productIndex] = updatedProduct;

    console.log(updatedProduct);
    return HttpResponse.json(updatedProduct);
  }),

  http.patch("/api/products/:id", async ({ request, params }) => {
    const updatedFields = (await request.json()) as Partial<Product>;
    const productId = Number(params.id);

    // Find the product by ID
    const productIndex = productData.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
      return HttpResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Update the product
    const updatedProduct = { ...productData[productIndex], ...updatedFields };
    productData[productIndex] = updatedProduct;

    console.log(updatedProduct);
    return HttpResponse.json(updatedProduct);
  }),

];
