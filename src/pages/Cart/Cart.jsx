import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [tableOptions, setTableOptions] = useState([]);
  const [newCartItem, setNewCartItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/meja/kosong")
      .then((response) => {
        const tables = response.data.map((meja) => ({
          value: meja.meja_id,
          label: `Table ${meja.nomor_meja}`,
        }));
        setTableOptions(tables);
      })
      .catch((error) => {
        console.error("There was an error fetching the table data!", error);
      });
  }, []);

  useEffect(() => {
    const groupedCart = Array.from(groupObject(cartItems, (item) => item.id));

    let newArray = [];
    for (let i = 0; i < groupedCart.length; i++) {
      //menghitung harga
      let price = 0;
      for (let k = 0; k < groupedCart[i][1].length; k++) {
        price += Number(groupedCart[i][1][k].harga);
      }

      newArray.push({
        nama_menu: groupedCart[i][1][0].nama_menu,
        deskripsi: groupedCart[i][1][0].deskripsi,
        harga: price,
        menu_id: groupedCart[i][1][0].menu_id,
        kategori: groupedCart[i][1][0].kategori,
        jumlah: groupedCart[i][1].length,
        gambar: groupedCart[i][1][0].gambar,
      });
    }
    setNewCartItem(newArray);
  }, [cartItems]);

  const groupObject = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  };

  const handleCheckout = () => {
  
    const orderData = {
      nama_pengunjung: name,
      meja_id: parseInt(table), // Pastikan meja_id adalah angka
      menus: newCartItem.map((item) => ({
        menu_id: item.menu_id,
        jumlah: parseInt(item.jumlah), // Pastikan jumlah adalah angka
        subtotal: parseFloat(item.harga) * parseInt(item.jumlah), // Pastikan harga adalah angka
      })),
      keterangan: additionalInfo || "", // Pastikan keterangan tidak null
      total_harga: getTotalCartAmount(), // Total harga sudah berupa angka
    };

    axios
      .post("http://127.0.0.1:8000/api/pemesanan", orderData)
      .then((response) => {
        console.log("Order successfully placed:", response.data);
        navigate(`/order-history/${response.data.pemesanan_id}`); // Pindah ke halaman detail pesanan
      })
      .catch((error) => {
        console.error("There was an error placing the order!", error);
      });
  }

  return (
    <div className="cart">
      <div className="cart-inputs">
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="table">Table:</label>
          <select
            id="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            <option value="">Select Table</option>
            {tableOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {newCartItem &&
          newCartItem.map((item, index) => (
            <div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={"http://127.0.0.1:8000" + item.gambar} alt="" />
                <p>{item.nama_menu}</p>
                <p>${item.harga}</p>
                <p>{item.jumlah}</p>
                <p>${item.harga * item.jumlah}</p>
                <p
                  onClick={() => removeFromCart(item.menu_id)}
                  className="cross"
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          ))}
      </div>

      <div className="additional-info">
        <label htmlFor="additional-info">Keterangan:</label>
        <textarea
          id="additional-info"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          rows="4"
          placeholder="Enter any additional notes here..."
        />
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>Rp{getTotalCartAmount() === 0 ? 0 : 2000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rp{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000}
              </b>
            </div>
          </div>
          <button onClick={handleCheckout}>Checkout</button>

        </div>
        <div className="cart-promocode"></div>
      </div>
    </div>
  );
};

export default Cart;
