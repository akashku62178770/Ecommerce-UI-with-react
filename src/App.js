import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <Header/>
      <SideLinks/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="browse">
            <Route index={true} element={<Browse />} />
            <Route
              index={false}
              path=":productID"
              element={<ProductDetails />}
            />
            {/* <Route index={false} path="search" element={<SearchPage />} /> */}
          </Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/product-detail" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
