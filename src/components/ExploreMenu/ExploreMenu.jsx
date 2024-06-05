import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
import axios from "axios";

const ExploreMenu = ({ category }) => {
  const [bestSellerResponse, setBestSellerResponse] = useState(null);
  const [recommendationResponse, setRecommendationResponse] = useState(null);

  useEffect(() => {
    getBestSellerMenu();
    getRecommendationMenu();
  }, []);

  const getBestSellerMenu = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/menu/best");
      setBestSellerResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecommendationMenu = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/menu/rekomendasi");
      setRecommendationResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => {
      if (category === "All" || category === item.category) {
        const imageUrl = `http://127.0.0.1:8081/images/${item.gambar}`;
        return (
          <div className="card" key={index}>
            <img src={imageUrl} className="card-img-top" alt={item.nama_menu} />
            <div className="card-body">
              <h5 className="card-title">{item.nama_menu}</h5>
              <p className="card-text">{item.deskripsi}</p>
              <p className="card-text text-right font-weight-bold">{item.harga}</p>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="container my-5">
      <div className="section">
        <h2>Rekomendasi Menu</h2>
        <div className="food-display-list">
          {recommendationResponse ? renderMenuItems(recommendationResponse) : "Loading..."}
        </div>
      </div>
      <div className="section mt-5">
        <h2>Best Seller</h2>
        <div className="food-display-list">
          {bestSellerResponse ? renderMenuItems(bestSellerResponse) : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
