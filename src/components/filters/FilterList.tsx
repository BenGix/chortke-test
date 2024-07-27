// FilterList.tsx
import React from "react";
import ListItem from "../utilities/ListItem";

type FilterListProps = {
  filter: "all" | "vegan" | "non-vegan";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "vegan" | "non-vegan">
  >;
};
export const FilterList: React.FC<FilterListProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <ul className="flex flex-grow gap-12 max-w-2xl">
      <ListItem
        label="All"
        icon="fastfood"
        onClick={() => setFilter("all")}
        isActive={filter === "all"}
      />

      <ListItem
        label="Vegan"
        icon="soup_kitchen"
        onClick={() => setFilter("vegan")}
        isActive={filter === "vegan"}
      />

      <ListItem
        label="Non-Vegan"
        icon="fastfood"
        onClick={() => setFilter("non-vegan")}
        isActive={filter === "non-vegan"}
      />
    </ul>
  );
};
