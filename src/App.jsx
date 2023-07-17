import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignInPage from "./pages/sign-in.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import StorePage from "./pages/store.jsx";
import GamePage from "./pages/game.jsx";
import CategoryGames from "./pages/categoryGames.jsx";
import ShoppingCartPage from "./pages/shoppingCart.jsx";
import UserProvider from "./contexts/userContext.jsx";

export default function App() {
  return (
    <PagesContainer>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/" element={<StorePage />} />
            <Route path="/Game/:title" element={<GamePage />} />
            <Route
              path="/CategoryGames/:category"
              element={<CategoryGames />}
            />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  width: calc(100vw - 50px);
  height: 100vh;
  /* padding: 25px; */
`;
