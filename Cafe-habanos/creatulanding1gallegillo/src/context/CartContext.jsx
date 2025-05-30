import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>{
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(prev => prev + 1);
  const removeFromCart = () => setCartCount(prev => Math.max(prev - 1, 0));

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)