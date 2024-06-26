import { createContext, useEffect, useState, useReducer } from "react";

export const StoreContext = createContext(null);

const initialState = {
  cartItems: [],
};

const storeReducer = (state, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.menu_id !== action.payload
        ),
      };

    case "UPDATE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    default:
      return state;
  }
};

const StoreContextProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const updateKeterangan = (item) => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: item });
  };

  const removeFromCart = (menu_id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: menu_id });
  };

  const getTotalCartAmount = () => {
    //menghitung total
    let total = 0;
    state.cartItems.forEach((item) => {
      total += Number(item.harga);
    });
    return total;
  };

  const contextValue = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    updateKeterangan,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
