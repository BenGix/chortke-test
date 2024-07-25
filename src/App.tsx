import "./App.css";
import logo from "../public/logo.png";
import { NavList } from "./components/asides/NavList";
import "react-material-symbols/rounded";
import { MaterialSymbol } from "react-material-symbols";
import profile from "./assets/images/profile.jpg";

function App() {
  return (
    <>
      <aside>
        <div className="flex flex-col flex-grow p-8 gap-12">
          <img src={logo} alt="logo" className="max-w-40" />

          <NavList />

          <div className="flex flex-col gap-4 items-center text-center">
            <span className="text-sm font-light">done for the day?</span>

            <button className="flex items-center gap-2 bg-gradient-primary text-nowrap text-white py-2 px-4 rounded-lg">
              <MaterialSymbol icon={"send"} size={24} fill color="#fff" />

              <span>Send daily report</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-4 border-t  border-gray-300 ">
          <img src={profile} alt="profile" className="w-12 rounded-full" />

          <span className="flex-grow ">Farzad Jambor</span>

          <MaterialSymbol icon={"more_vert"} size={36} fill color="#000" />
        </div>
      </aside>
      <main></main>
    </>
  );
}

export default App;
