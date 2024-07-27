import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { ThemeState } from "./themeSlice";
import currencyReducer, { CurrencyState } from "./currencySlice";

// Define the type for the entire state tree
export interface RootState {
  theme: ThemeState;
  currency: CurrencyState;
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
    currency: currencyReducer,
  },
});

export default store;
