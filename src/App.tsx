import "./App.css";
import "react-material-symbols/rounded";

import { Aside } from "./components/asides/Aside";
import { SearchBar } from "./components/utilities/SearchBar";
import NavListItem from "./components/utilities/ListItem";

function App() {
  return (
    <>
      <Aside />
      <main>
        <SearchBar />
        <div className="flex justify-between w-full rounded-xl px-8 py-6 bg-white ">
          <ul className="flex flex-grow gap-16">
            <NavListItem label="Main course" icon={"fastfood"} />
            <NavListItem label="Side dishes" icon={"soup_kitchen"} />
            <NavListItem label="Drinks" icon={"soup_kitchen"} />
            <NavListItem label="Others" icon={"local_cafe"} />
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
