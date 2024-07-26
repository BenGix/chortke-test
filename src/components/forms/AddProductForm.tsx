import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { useAddProduct } from "../../hooks/useAddProduct";

// Define the initial form state including the imageUrl
const initialFormState = {
  name: "",
  ingredients: "",
  weight: "",
  calories: "",
  price: "",
  vegan: false,
  imageUrl: "", // Added imageUrl to the state
};

type AddProductProps = {
  toggleAddProduct: () => void;
};

export function AddProductForm({ toggleAddProduct }: AddProductProps) {
  const [formState, setFormState] = useState(initialFormState);
  const { handleAddProduct, error } = useAddProduct();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formState.name ||
      !formState.weight ||
      !formState.calories ||
      !formState.price ||
      !formState.imageUrl // Check if imageUrl is provided
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await handleAddProduct({
        name: formState.name,
        description: formState.ingredients,
        weight: formState.weight,
        price: formState.price,
        imageUrl: formState.imageUrl, // Use formState.imageUrl
        vegan: formState.vegan,
      });
      toggleAddProduct();
      setFormState(initialFormState); // Reset form
    } catch (err) {
      console.error(err);
      toggleAddProduct();
    }
  };
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
            value={formState.ingredients}
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

          <div className="flex-grow">
            <label
              htmlFor="calories"
              className="block mb-2 text-sm font-medium "
            >
              Calories
            </label>
            <input
              className="bordered"
              type="number"
              id="calories"
              name="calories"
              value={formState.calories}
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
          <span>Add product to menu</span>
        </button>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
}
