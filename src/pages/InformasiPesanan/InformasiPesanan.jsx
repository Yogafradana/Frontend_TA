import React from "react";
import "./InformasiPesanan.css";

const Informasi4 = () => {
  const order = {
    id: "123456789",
    customerName: "Pelanggan A",
    tableNumber: "01",
    orderNumber: "123456789",
    orderDate: "2024-05-06 20:20:00",
    items: [
      { id: 1, name: "Americano", price: 28000, quantity: 1 },
      { id: 2, name: "Cappuccino", price: 33000, quantity: 1 },
      { id: 3, name: "Piccolo", price: 33000, quantity: 1 },
    ],
    totalAmount: 106000,
  };

  return (
    <div className="informasi4">
      <header>
        <h1>Cafe Microdata</h1>
      </header>
      <div className="completion-message">
        <h2>Sudah Selesai</h2>
        <p>Terimakasih Sudah Order Di Cafe Microdata</p>
        <button className="review-button">Ulasan</button>
      </div>
      <section className="order-summary">
        <h3>Informasi Pesanan</h3>
        <div className="order-details">
          <div className="order-id">
            <h4>ID Pesanan</h4>
            <p>{order.id}</p>
          </div>
          <div className="order-info-grid">
            <div>
              <p>Nama</p>
              <p>{order.customerName}</p>
            </div>
            <div>
              <p>Meja</p>
              <p>{order.tableNumber}</p>
            </div>
            <div>
              <p>Nomor Pesanan</p>
              <p>{order.orderNumber}</p>
            </div>
            <div>
              <p>Tanggal Pesanan</p>
              <p>{order.orderDate}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="order-items">
        <h3>Rincian Pesanan</h3>
        <table>
          <thead>
            <tr>
              <th>Jumlah</th>
              <th>Nama Menu</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
                <td>Rp {item.price.toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">Total</td>
              <td>Rp {order.totalAmount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer>
        <button className="back-button">Kembali Ke Halaman Utama</button>
        <p>Copyright © 2024 PKL-POUNELA-2024</p>
      </footer>
    </div>
  );
};
export default Informasi4;
