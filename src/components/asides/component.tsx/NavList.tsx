// components/asides/component.tsx/NavList.tsx
import React from "react";
import ListItem from "../../utilities/ListItem";
import { NavItem } from "../../../types/navItem";

export const NavList: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: "lunch_dining", label: "Product", route: "/" },
    { icon: "shopping_bag", label: "Order", route: "/order" },
    { icon: "location_on", label: "Restaurant", route: "/restaurant" },
    { icon: "person", label: "Drivers", route: "/drivers" },
  ];

  return (
    <ul className="flex-grow flex flex-col">
      {navItems.map((item, index) => (
        <ListItem
          key={index}
          icon={item.icon}
          label={item.label}
          to={item.route}
        />
      ))}
    </ul>
  );
};

export default NavList;
