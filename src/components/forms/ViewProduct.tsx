// components/forms/EditProductForm.tsx
import { useState, useEffect } from "react";
import type { Product } from "../../types/product";
import { useProducts } from "../../hooks/useFetchProducts";

type ViewProduct = {
  productId: number | null;
  toggleViewProduct: () => void;
};

export function ViewProduct({ productId }: ViewProduct) {
  const { products } = useProducts();
  const [formState, setFormState] = useState<Omit<Product, "id"> | null>(null);
  console.log("view");

  useEffect(() => {
    if (productId !== null) {
      const productToEdit = products.find(
        (product) => product.id === productId
      );
      if (productToEdit) {
        setFormState({
          name: productToEdit.name,
          description: productToEdit.description,
          weight: productToEdit.weight,
          price: productToEdit.price,
          vegan: productToEdit.vegan,
          imageUrl: productToEdit.imageUrl,
        });
      }
    }
  }, [productId, products]);

  if (!formState) return null; // If formState is not initialized, render nothing

  return (
    <form className="h-full w-full flex flex-col justify-between">
      <div className="grid gap-6">
        <div>
          <input
            disabled
            className="bordered"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            required
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block mb-2 text-sm font-medium "
          >
            Ingredients
          </label>
          <textarea
            disabled
            id="ingredients"
            name="ingredients"
            value={formState.description}
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              disabled
              className="bordered"
              id="vegan"
              name="vegan"
              type="checkbox"
              checked={formState.vegan}
            />
          </div>
          <label htmlFor="vegan" className="ms-2 text-sm font-medium ">
            Suitable for vegans
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex-grow">
            <label htmlFor="weight" className="block mb-2 text-sm font-medium ">
              Weight in grams
            </label>
            <input
              disabled
              className="bordered"
              type="number"
              id="weight"
              name="weight"
              value={formState.weight}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium">
            Price
          </label>
          <input
            disabled
            className="bordered"
            type="number"
            id="price"
            name="price"
            value={formState.price}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium ">
            Image URL
          </label>
          <input
            disabled
            className="bordered"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formState.imageUrl}
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-6 border-t border-gray-300"></div>
    </form>
  );
}
