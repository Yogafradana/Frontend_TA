import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOrder.css";
import Banner from "../../components/Navbar/Banner";

const CheckOrder = () => {
  const [pemesanan_id, setOrderCode] = useState("");
  const navigate = useNavigate();

  const handleOrderCheck = () => {
    if (pemesanan_id) {
      navigate(`/order-history/${pemesanan_id}`);
    } else {
      alert("Please enter a valid order code");
    }
  };

  return (
    <>
    <Banner />
    <div className="order-check-container">
      <h1>Cek Detail Pemesanan</h1>
      <p>Lihat Informasi yang sudah anda pesan</p>
      
      <div className="order-check-form">
        <label htmlFor="pemesanan_id">Kode Pemesanan</label>
        <p>Kode yang didapat setelah melakukan pemesanan</p>
        <input
          type="text"
          id="pemesanan_id"
          value={pemesanan_id}
          onChange={(e) => setOrderCode(e.target.value)}
          placeholder="Contoh kode: 123XXXXXX"
        />
        <button onClick={handleOrderCheck}>Cari Detail Pemesanan</button>
      </div>
    </div>
    </>
  );
};

export default CheckOrder;
