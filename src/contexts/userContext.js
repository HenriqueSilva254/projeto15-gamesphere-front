import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
//   const [userGames, setUserGames] = useState();
  const [shoppingCart, setShoppingCart] = useState();

  return (
    <UserContext.Provider
      value={{ shoppingCart, setShoppingCart }}
    >
      {children}
    </UserContext.Provider>
  );
}
