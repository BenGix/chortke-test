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
  // Initialize state with the form fields including imageUrl
  const [formState, setFormState] = useState(initialFormState);
  const { handleAddProduct, error } = useAddProduct();

  // Handle input changes including imageUrl
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
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name of the product
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formState.ingredients}
            onChange={handleChange}
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="vegan"
              name="vegan"
              type="checkbox"
              checked={formState.vegan}
              onChange={handleChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
          </div>
          <label
            htmlFor="vegan"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Suitable for vegans
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex-grow">
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Weight in grams
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formState.weight}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="flex-grow">
            <label
              htmlFor="calories"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Calories
            </label>
            <input
              type="number"
              id="calories"
              name="calories"
              value={formState.calories}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formState.price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-6 border-t border-gray-300">
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-dark text-nowrap text-white py-2 px-4 rounded-lg"
        >
          <MaterialSymbol icon={"send"} size={24} fill color="#fff" />
          <span>Add product to menu</span>
        </button>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
}
