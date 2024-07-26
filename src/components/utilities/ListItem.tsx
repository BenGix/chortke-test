import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";

interface NavListItemProps {
  icon?: SymbolCodepoints; // Expect an icon component as a prop
  label: string; // Expect a string for the label
  onClick: () => void; // Expect a function for click handling
  isActive: boolean; // Expect a boolean for active state styling
}

const ListItem: React.FC<NavListItemProps> = ({
  icon,
  label,
  onClick,
  isActive,
}) => {
  return (
    <li
      className={`flex items-center gap-2 cursor-pointer py-6 text-dark  ${
        isActive ? "border-b border-gray-950" : "text-gray-800"
      }`}
      onClick={onClick}
    >
      {icon && <MaterialSymbol icon={icon} size={24} color="#313131" />}
      <span className="flex-grow">{label}</span>
    </li>
  );
};

export default ListItem;
