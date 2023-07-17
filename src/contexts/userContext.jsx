import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  //   const [userGames, setUserGames] = useState();
  const [userCart, setUserCart] = useState([]);

  return (
    <UserContext.Provider value={{ userCart, setUserCart }}>
      {children}
    </UserContext.Provider>
  );
}
