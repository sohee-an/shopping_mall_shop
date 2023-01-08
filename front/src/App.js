import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

import Announcement from "./components/home/Announcement";
import Navbar from "./components/home/Navbar";
import Slider from "./components/home/Slider";
import Categories from "./components/category/Categories";
import Products from "./components/product/Products";
import Newsletter from "./components/product/Newsletter";
import Footer from "./components/home/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
