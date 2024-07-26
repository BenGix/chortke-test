import "./App.css";
import "react-material-symbols/rounded";

import { Aside } from "./components/asides/Aside";
import { SearchBar } from "./components/utilities/SearchBar";
import { MaterialSymbol } from "react-material-symbols";
import { FilterList } from "./components/filters/FilterList";
import { useState } from "react";
import { Overlay } from "./components/utilities/DarkOverlay";
import { ProductList } from "./components/ProductList";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAddProduct = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Aside />
      <main>
        <SearchBar />

        <div className="w-full flex justify-between items-center rounded-xl ps-12 pe-8 bg-white ">
          <FilterList />

          <MaterialSymbol icon={"more_vert"} size={28} fill color="#000" />
        </div>

        <ProductList toggleAddProduct={toggleAddProduct} />
      </main>

      {isExpanded && <Overlay toggleAddProduct={toggleAddProduct} />}

      <aside
        id="default-sidebar"
        className={`fixed  shadow-main flex flex-col items-start p-4 z-[100] top-0  right-0 w-1/3 h-screen bg-white transition-transform duration-300 ease-in-out transform ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between">
          <h2>Add new product</h2>

          <button onClick={toggleAddProduct}>
            <MaterialSymbol icon={"close"} size={24} color="#000" />
          </button>
        </div>

        <form className=" h-full w-full flex flex-col justify-between">
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="product-name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name of the product{" "}
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Ingredients
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                I agree with the
              </label>
            </div>

            <div className="flex gap-4">
              <div className="flex-grow">
                <label
                  htmlFor="product-name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name of the product{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>

              <div className="flex-grow">
                <label
                  htmlFor="product-name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name of the product{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="product-name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name of the product{" "}
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-6 border-t  border-gray-300 ">
            <button className="w-full flex justify-center items-center gap-2 bg-dark text-nowrap text-white py-2 px-4 rounded-lg">
              <MaterialSymbol icon={"send"} size={24} fill color="#fff" />

              <span>Send daily report</span>
            </button>
          </div>
        </form>
      </aside>
    </>
  );
}

export default App;
