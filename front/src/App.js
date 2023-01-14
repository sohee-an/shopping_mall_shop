import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

import Announcement from "./components/home/Announcement";
import Navbar from "./components/home/Navbar";
import Slider from "./components/home/Slider";
import Categories from "./components/category/Categories";
import Products from "./components/product/Products";
import Newsletter from "./components/product/Newsletter";
import Footer from "./components/home/Footer";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  //유저가
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RegisterPage />}
            // element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <LoginPage />}
          />
          <Route path="/products" element={<ProductListPage />}>
            <Route path=":category" element={<ProductListPage />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
