import React from "react";
import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";

interface NavListItemProps {
  icon: SymbolCodepoints; // Expect an icon component as a prop
  label: string; // Expect a string for the label
}

const NavListItem: React.FC<NavListItemProps> = ({ icon, label }) => {
  return (
    <li className="flex items-center gap-2 cursor-pointer">
      <MaterialSymbol icon={icon} size={24} fill color="#313131" />{" "}
      <span className="flex-grow">{label}</span>
    </li>
  );
};

export default NavListItem;
