import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import axios from "axios";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [bestSellerResponse, setBestSellerResponse] = useState(null);
  const [recommendationResponse, setRecommendationResponse] = useState(null);

  useEffect(() => {
    getBestSellerMenu();
    getRecommendationMenu();
  }, []);

  function getBestSellerMenu() {
    axios
      .get("http://127.0.0.1:8000/api/menu/best")
      .then(function (response) {
        setBestSellerResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getRecommendationMenu() {
    axios
      .get("http://127.0.0.1:8000/api/menu/rekomendasi")
      .then(function (response) {
        setRecommendationResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Best Seller</h2>
      <div className="food-display-list">
        {bestSellerResponse != null && bestSellerResponse.length > 0
          ? bestSellerResponse.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    item={item}
                    id={item.id}
                    name={item.nama_menu}
                    description={item.deskripsi}
                    price={item.harga}
                    image={"http://127.0.0.1:8000" + item.gambar}
                  />
                );
              }
            })
          : "Loading ..."}
      </div>

      <h2>Rekomendasi</h2>
      <div className="food-display-list">
        {recommendationResponse != null && recommendationResponse.length > 0
          ? recommendationResponse.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    item={item}
                    id={item.id}
                    name={item.nama_menu}
                    description={item.deskripsi}
                    price={item.harga}
                    image={"http://127.0.0.1:8000" + item.gambar}
                  />
                );
              }
            })
          : "Loading ..."}
      </div>
    </div>
  );
};

export default FoodDisplay;
