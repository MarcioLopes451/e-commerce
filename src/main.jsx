import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './assets/pages/Home.jsx';
import ProductPage from './assets/pages/ProductPage.jsx';
import ProductDetailPage from './assets/pages/ProductDetailPage.jsx';
import { EcommerceLayout } from './assets/layout/EcommerceLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<EcommerceLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/:product" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
