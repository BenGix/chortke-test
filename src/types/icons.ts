export type Colors = "dark" | "light" | "green";

export const iconsColors: Record<Colors, string> = {
  dark: "#313131",
  light: "#f5f5f5",
  green: "#54d49e",
};

// Define the interface for components that accept a variant
export interface Icons {
  variant: Colors;
  size?: string;
}
