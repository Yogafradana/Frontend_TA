import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (item) => {
    let test = cartItems
    test.push(item)
    setcartItems(test);

    // if (!cartItems[itemId]) {
    //   setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    // } else {
    //   setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // }
  };

  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmout = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmout += itemInfo.price * cartItems[item] ;
      }
    }
    return totalAmout;
  };

  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
