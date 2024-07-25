import { MaterialSymbol } from "react-material-symbols";
import profile from "../../assets/images/profile.jpg";
import logo from "../../../public/logo.png";
import NavList from "./component.tsx/NavList";

export const Aside = () => {
  return (
    <aside>
      <div className="flex flex-col flex-grow  gap-12">
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
      <div className="flex items-center gap-2 pt-6 border-t  border-gray-300 ">
        <img src={profile} alt="profile" className="w-10 rounded-full" />

        <span className="flex-grow ">Farzad Jambor</span>

        <MaterialSymbol icon={"more_vert"} size={28} fill color="#000" />
      </div>
    </aside>
  );
};
