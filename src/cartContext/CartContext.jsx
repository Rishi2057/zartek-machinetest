import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState({}); // stores all item counts globally

  const increment = (id) => {
    setCount(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  const decrement = (id) => {
    setCount(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1)
    }))
  }

  // total items for header
  const totalItems = Object.values(count).reduce((sum, v) => sum + v, 0)

  return (
    <CartContext.Provider value={{ count, increment, decrement, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
