import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import axios from "axios";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [Response, setResponse] = useState(null);

  // var Response = ""

  // const axios = require('axios');

  useEffect(() => {
    getMenu();
  }, []);

  function getMenu() {
    // Make a request for a user with a given ID

    // Mulai loading
    axios
      .get("http://127.0.0.1:8000/api/menu")
      .then(function (hasil_axios) {
        // Ketika axios ini selesai dan success kita harus apa?
        // Response = response
        // Tampilkan menu
        // console.log("Response axios: ", hasil_axios.data)
        // setResponse(hasil_axios)
        setResponse(hasil_axios.data);
      })
      .catch(function (error) {
        // Ketika ada error kita harus apa
        console.log(error);
        // Tampilkan halaman error
      })
      .finally(function () {
        // Ketika axios ini selesai mau itu error atau success kita harus apa?
        // Hentikan loading
      });
  }

  useEffect(() => {
    console.log("Response:", Response);
  }, [Response]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you | contoh</h2>
      <div className="food-display-list">
        {console.log("-", Response)}
        {Response != null && Response.length > 0
          ? Response.map((item, index) => {
              if (category === "All" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    item={item}
                    id={item.id}
                    name={item.nama_menu}
                    description={item.deskripsi}
                    price={item.harga}
                    image={"http://127.0.0.1:9000" + item.gambar}
                  />
                );
              }
            })
          : "Loading ..."}

        {/* {food_list.map((item, index) => {
					if (category === "All" || category === item.category) {
						return (
							<FoodItem
								key={index}
								id={item._id}
								name={item.name}
								description={item.description}
								price={item.price}
								image={item.image}
							/>
						);
					}
				})} */}
      </div>
    </div>
  );
};

export default FoodDisplay;
