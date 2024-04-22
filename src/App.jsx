import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";
// Context
// import ProductsProvider from "./contexts/produtsContext";
// import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <div>
     {/* <CartProvider> */}
        {/* <ProductsProvider> */}
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        {/* </ProductsProvider> */}
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
