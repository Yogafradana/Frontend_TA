import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState("Semua");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        let response;
        if (category === "Semua") {
          response = await axios.get("http://127.0.0.1:8000/api/menu/default");
        } else if (category === "10") {
          response = await axios.get(
            "http://127.0.0.1:8000/api/menu/kategori/10"
          );
        } else if (category === "11") {
          response = await axios.get(
            "http://127.0.0.1:8000/api/menu/kategori/11"
          );
        } else if (category === "12") {
          response = await axios.get(
            "http://127.0.0.1:8000/api/menu/kategori/12"
          );
        } else {
          console.error("Unknown category:", category);
          return;
        }
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleMenuClick = async (menuId) => {
    if (selectedMenu && selectedMenu.id === menuId) {
      setSelectedMenu(null); // Hide details if the same menu is clicked again
    } else {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/menu/${menuId}`);
        setSelectedMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu details:", error);
      }
    }
  };

  

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="semua-menu">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => handleCategoryChange("Semua")}
        >
          Semua
        </button>
        <button
          className="filter-button"
          onClick={() => handleCategoryChange("10")}
        >
          Makanan
        </button>
        <button
          className="filter-button"
          onClick={() => handleCategoryChange("11")}
        >
          Minuman
        </button>
        <button
          className="filter-button"
          onClick={() => handleCategoryChange("12")}
        >
          Cemilan
        </button>
      </div>
      <div className="menu-container">
        <div className={`menu-details ${selectedMenu ? "active" : ""}`}>
          {selectedMenu && (
            <div>
              <h2>{selectedMenu.nama_menu}</h2>
              <img src={selectedMenu.gambar} alt={selectedMenu.nama_menu} />
              <p><strong>Nama:</strong> {selectedMenu.nama_menu}</p>
              <p><strong>Deskripsi:</strong> {selectedMenu.deskripsi}</p>
              <p><strong>Harga:</strong> {selectedMenu.harga}</p>
              {/* Tambahkan field lain sesuai dengan data yang Anda miliki */}
              <button className="back-button" onClick={() => setSelectedMenu(null)}>
                Kembali
              </button>
            </div>
          )}
        </div>
       
      <div className="menu-items">
        {menuItems.map((item, index) => {
          const imageUrl = `http://127.0.0.1:8081/images/${item.gambar}`;
          return (
            <div className="menu-item" key={index}>
              <img
                src={imageUrl}
                alt={item.nama_menu}
                className="menu-item-image"
                onClick={() => handleMenuClick(item.id)}
              />
              <h3 className="menu-item-name">{item.nama_menu}</h3>
              <p className="menu-item-description">
                {item.deskripsi} <a href="#detail">Detail</a>
              </p>
              <div className="menu-item-footer">
                <span className="menu-item-price">{item.harga}</span>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Menu;
