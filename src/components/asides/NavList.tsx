import { NavItem } from "../../types/navItem";
import NavListItem from "./NavListItem";

export const NavList: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: "grid_view", label: "Dashboard" },
    { icon: "shopping_bag", label: "Order" },
    { icon: "lunch_dining", label: "Product" },
    { icon: "location_on", label: "Restaurant" },
    { icon: "person", label: "Drivers" },
  ];

  return (
    <ul className="flex-grow flex flex-col gap-8">
      {navItems.map((item, index) => (
        <NavListItem key={index} icon={item.icon} label={item.label} />
      ))}
    </ul>
  );
};

export default NavList;
