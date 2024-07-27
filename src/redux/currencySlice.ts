import { createSlice } from "@reduxjs/toolkit";

export interface CurrencyState {
  currency: "USD" | "Toman";
}

const initialState: CurrencyState = {
  currency: "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    toggleCurrency: (state) => {
      state.currency = state.currency === "USD" ? "Toman" : "USD";
    },
  },
});

export const { toggleCurrency } = currencySlice.actions;
export default currencySlice.reducer;
