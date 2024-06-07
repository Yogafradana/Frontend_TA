import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import TentangKami from "./pages/TentangKami/TentangKami";
import HubungiKami from "./pages/HubungiKami/HubungiKami";
import InformasiPesanan from "./pages/InformasiPesanan/InformasiPesanan";
import ReviewForm from "./pages/Review/ReviewForm";
import Menu from "./pages/Menu/Menu";
import CheckOrder from "./pages/CheckOrder/CheckOrder";
import CheckHistory from "./pages/CheckOrder/CheckHistory";

const App = () => {
  return (
    <>
      <div className="app">
        {/* <Navbar /> */}
        <div className="container remove-padding">
  <img className ="gambar-bacground-home"src="http://localhost:3000/static/media/header.907d2ef5e6c4cec6edff.png" alt="Snow"/>
  <div className="bottom-left">Bottom Left</div>
  <div className="top-left">Top Left</div>
  <div className="top-right"><Navbar/></div>
  <div className="bottom-right">Bottom Right</div>
  <div className="centered">Centered</div>
</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/informasi-pesanan" element={<InformasiPesanan />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkorder" element={<CheckOrder />} />
          <Route
            path="/order-history/:pemesanan_id"
            element={<CheckHistory />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
