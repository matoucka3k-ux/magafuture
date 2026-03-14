// lib/CartContext.js — in-memory cart, zero persistence, zero data leaks

import { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext(null);

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size, color, quantity = 1 } = action.payload;
      const key = `${product.id}--${size}--${color}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { key, product, size, color, quantity, price: product.price },
        ],
      };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.key !== action.payload.key) };
    case "UPDATE_QTY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.key !== key) };
      }
      return {
        items: state.items.map((i) =>
          i.key === key ? { ...i, quantity } : i
        ),
      };
    }
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, size, color, quantity) => {
    dispatch({ type: "ADD_ITEM", payload: { product, size, color, quantity } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE_ITEM", payload: { key } });
  }, []);

  const updateQty = useCallback((key, quantity) => {
    dispatch({ type: "UPDATE_QTY", payload: { key, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, total, itemCount, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
