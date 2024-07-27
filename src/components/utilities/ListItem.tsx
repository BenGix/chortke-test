import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NavLink } from "react-router-dom";
interface NavListItemProps {
  icon?: SymbolCodepoints;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  to?: string;
}

const ListItem: React.FC<NavListItemProps> = ({
  icon,
  label,
  onClick,
  isActive,
  to,
}) => {
  // Access the current theme from the Redux store
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Determine colors based on theme
  const iconColor = theme === "dark" ? "#22c55e" : "#313131"; // Different icon color for dark theme
  const textColor = theme === "dark" ? "#FFFFFF" : "#313131"; // Text color based on theme

  return (
    <>
      {!to && (
        <li
          className={`flex items-center gap-2 cursor-pointer py-6 ${
            isActive ? `border-b border-black` : ""
          }`}
          onClick={onClick}
        >
          {icon && <MaterialSymbol icon={icon} size={24} color={iconColor} />}
          <span style={{ color: textColor }} className="flex-grow">
            {label}
          </span>
        </li>
      )}
      {to && (
        <li className="">
          <NavLink
            to={to}
            className={({ isActive }) =>
              ` flex items-center gap-2 cursor-pointer py-6 ${
                isActive ? `border-r border-green-300 bg-teal-100` : ""
              }`
            }
          >
            {icon && <MaterialSymbol icon={icon} size={24} color={iconColor} />}
            <span style={{ color: textColor }} className="flex-grow">
              {label}
            </span>
          </NavLink>
        </li>
      )}
    </>
  );
};

export default ListItem;
