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
import ReviewList from './pages/Review/ReviewList';
import ReviewForm from './pages/Review/ReviewForm';
import TerimakasihForm from './pages/Review/TerimakasihForm';
import Menu from './pages/Menu/Menu';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/informasi-pesanan" element={<InformasiPesanan />} />
          <Route path="/ReviewList" element={<ReviewList />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/terimakasihform" element={<TerimakasihForm />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
