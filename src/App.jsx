import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import HomePage from "./pages/home";
import StorePage from "./pages/store";
import GamePage from "./pages/game";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */} 
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/Game" element={<GamePage />} />
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
