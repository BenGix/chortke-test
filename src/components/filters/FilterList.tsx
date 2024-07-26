import ListItem from "../utilities/ListItem";

export const FilterList = () => {
  return (
    <ul className="flex flex-grow justify-between max-w-2xl">
      <ListItem label="Main course" icon={"fastfood"} />
      <ListItem label="Side dishes" icon={"soup_kitchen"} />
      <ListItem label="Drinks" icon={"soup_kitchen"} />
      <ListItem label="Others" icon={"local_cafe"} />
    </ul>
  );
};
