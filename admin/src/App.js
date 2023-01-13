import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import LogOut from "./pages/login/logOut";
import { useEffect, useState } from "react";

function App() {
  const [admin, setAdmin] = useState(false);
  const adminRedux = useSelector((state) => state.user.currentUser?.isAdmin);
  useEffect(() => {
    setAdmin(adminRedux);
  }, [adminRedux]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={admin ? <Login /> : <Home />} />
      </Routes>
      {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/logOut" element={<LogOut />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
