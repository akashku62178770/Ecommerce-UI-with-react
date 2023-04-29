import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import SideLinks from "./components/SideLinks";
import Browse from "./pages/Browse";
import ProductDetails from "./pages/ProductDetails";
import Aboutus from "./pages/Aboutus";
import Register from "./components/header/Register";
import Ordering from "./pages/Ordering";
import OrderPage from "./pages/OrderPage";
import OrderDetails from "./pages/OrderDetails";
import { CartContext } from "./Context";
import { useState } from "react";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
const checkCart = localStorage.getItem("cartData");

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  const { access_token } = useSelector((state) => state.auth);
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Header />
        <SideLinks />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="browse/">
            <Route index={true} element={<Browse />} />
            <Route index={false} path=":id" element={<ProductDetails />} />
            {/* <Route index={false} path="search" element={<SearchPage />} /> */}
          </Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/register" element={!access_token ?<Register />:<Navigate to="/"} />  */}
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/orderdetails/:order_code" element={<OrderDetails />} />
          <Route path="/product-detail" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
