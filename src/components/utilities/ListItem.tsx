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
  const iconColor = theme === "dark" ? "#22c55e" : "#313131"; // Different icon color for dark theme
  const textColor = theme === "dark" ? "#FFFFFF" : "#313131"; // Text color based on theme
  const borderColor = theme === "dark" ? "border-gray-100" : "border-gray-900"; // Border color based on theme

  return (
    <li
      className={`flex items-center gap-2 cursor-pointer py-6 ${
        isActive ? `border-b ${borderColor}` : ""
      }`}
      onClick={onClick}
    >
      {icon && <MaterialSymbol icon={icon} size={24} color={iconColor} />}
      <span style={{ color: textColor }} className="flex-grow">
        {label}
      </span>
    </li>
  );
};

export default ListItem;
