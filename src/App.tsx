import "./App.css";
import "react-material-symbols/rounded";

import { Aside } from "./components/asides/Aside";
import { SearchBar } from "./components/utilities/SearchBar";
import { MaterialSymbol } from "react-material-symbols";
import { FilterList } from "./components/filters/FilterList";
import { ProductCards } from "./components/utilities/cards/ProductCards";

function App() {
  return (
    <>
      <Aside />
      <main>
        <SearchBar />
        <div className="w-full flex justify-between items-center rounded-xl ps-12 pe-8 bg-white ">
          <FilterList />
          <MaterialSymbol icon={"more_vert"} size={28} fill color="#000" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 ">
          <ProductCards />
        </div>
      </main>
    </>
  );
}

export default App;
