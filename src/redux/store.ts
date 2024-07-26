// src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { ThemeState } from "./themeSlice";

// Define the type for the entire state tree
export interface RootState {
  theme: ThemeState;
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
