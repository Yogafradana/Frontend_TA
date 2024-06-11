import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Link, Routes } from "react-router-dom";
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
import { assets } from "./assets/assets";

const App = () => {
	return (
		<>
			<div className="app">
				{/* <Navbar /> */}
				
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
