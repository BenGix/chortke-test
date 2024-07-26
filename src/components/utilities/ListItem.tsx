import React from "react";
import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Import RootState

interface NavListItemProps {
  icon?: SymbolCodepoints; // Expect an icon component as a prop
  label: string; // Expect a string for the label
  onClick?: () => void; // Expect a function for click handling
  isActive?: boolean; // Expect a boolean for active state styling
}

const ListItem: React.FC<NavListItemProps> = ({
  icon,
  label,
  onClick,
  isActive,
}) => {
  // Access the current theme from the Redux store
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Determine colors based on theme
  const iconColor = theme === "dark" ? "#22c55e" : "#313131";
  const Color = theme === "dark" ? "#FFFFFF" : "#313131";

  return (
    <li
      className={`flex items-center gap-2 cursor-pointer py-6 ${
        isActive ? "border-b border-gray-950" : ""
      }`}
      onClick={onClick}
    >
      {icon && <MaterialSymbol icon={icon} size={24} color={iconColor} />}
      <span className={`flex-grow text-[${Color}]`}>{label}</span>
    </li>
  );
};

export default ListItem;
