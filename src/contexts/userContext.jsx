import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setUserCart(JSON.parse(storedCart));
    }
  }, []);

  function updateCart(userCart) {
    setUserCart(userCart);
    localStorage.setItem("cart", JSON.stringify(userCart));
  }

  return (
    <UserContext.Provider value={{ userCart, setUserCart, updateCart }}>
      {children}
    </UserContext.Provider>
  );
}
