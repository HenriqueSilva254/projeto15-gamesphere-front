import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import StorePage from "./pages/store";
import GamePage from "./pages/game";
import CategoryGames from "./pages/categoryGames";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/" element={<StorePage />} />
          <Route path="/Game/:title" element={<GamePage />} />
          <Route path="/CategoryGames/:category" element={<CategoryGames />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  width: calc(100vw - 50px);
  height: 100vh;
  /* padding: 25px; */
`;
