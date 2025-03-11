import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailPage from './pages/ProductDetailPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/:product" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
