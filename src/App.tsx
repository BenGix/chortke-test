// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-material-symbols/rounded";
import { Aside } from "./components/asides/Aside";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import Product from "./pages/products/Product";
import Restaurant from "./pages/restaurant/Restaurant";
import { Orders } from "./pages/order/Orders";
import { Drivers } from "./pages/drivers/Drivers";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Router>
      <div className={theme}>
        <Aside />
        <main>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/drivers" element={<Drivers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
