// src/redux/themeSlice.ts

import { createSlice } from "@reduxjs/toolkit";

// Define the type for the theme state
export interface ThemeState {
  theme: "light" | "dark"; // Only allow these two string values
}

const initialState: ThemeState = {
  theme: "light", // default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
