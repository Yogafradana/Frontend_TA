import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/kategori') // Ganti dengan URL API yang benar
      .then(response => {
        setMenuList(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the menu data!", error);
      });
  }, []);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        In this single tutorial you will learn to build a food ordering website
        / app step by step using React JS. In this React JS project we will
        create the Home page to display the
      </p>
      <div className="explore-menu-list">
        {menuList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.nama_kategori ? "All" : item.nama_kategori
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.nama_kategori ? "active" : ""}
                src={item.image}
                alt={item.nama_kategori}
              />
              <p>{item.nama_kategori}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
