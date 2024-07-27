// components/forms/EditProductForm.tsx
import React, { useState, useEffect } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { useEditProduct } from "../../hooks/useEditProduct";
import type { Product } from "../../types/product";
import { useProducts } from "../../hooks/useFetchProducts";

type EditProductProps = {
  toggleEditProduct: () => void;
  onProductSubmit: () => void;
  productId: number | null; // Add the product ID for the product being edited
};

export function EditProductForm({
  toggleEditProduct,
  onProductSubmit,
  productId,
}: EditProductProps) {
  const { products } = useProducts();
  const [formState, setFormState] = useState<Omit<Product, "id"> | null>(null);
  const { handleEditProduct, error } = useEditProduct();

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormState((prevState) => {
      if (!prevState) return null;

      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState) {
      alert("No product selected to edit.");
      return;
    }

    if (
      !formState.name ||
      !formState.weight ||
      !formState.price ||
      !formState.imageUrl
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await handleEditProduct(productId!, {
        name: formState.name,
        description: formState.description,
        weight: formState.weight,
        price: formState.price,
        imageUrl: formState.imageUrl,
        vegan: formState.vegan,
      });
      onProductSubmit();
      toggleEditProduct();
      setFormState(null);
    } catch (err) {
      console.error(err);
      toggleEditProduct();
    }
  };

  if (!formState) return null; // If formState is not initialized, render nothing

  return (
    <form
      className="h-full w-full flex flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium ">
            Name of the product
          </label>
          <input
            className="bordered"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
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
            id="ingredients"
            name="ingredients"
            value={formState.description}
            onChange={handleChange}
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              className="bordered"
              id="vegan"
              name="vegan"
              type="checkbox"
              checked={formState.vegan}
              onChange={handleChange}
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
              className="bordered"
              type="number"
              id="weight"
              name="weight"
              value={formState.weight}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium">
            Price
          </label>
          <input
            className="bordered"
            type="number"
            id="price"
            name="price"
            value={formState.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium ">
            Image URL
          </label>
          <input
            className="bordered"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-6 border-t border-gray-300">
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-darker text-nowrap text-white py-2 px-4 rounded-lg"
        >
          <MaterialSymbol icon={"send"} size={24} fill color="#fff" />
          <span>Edit product</span>
        </button>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
}
