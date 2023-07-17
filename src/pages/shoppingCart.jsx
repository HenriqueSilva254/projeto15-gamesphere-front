import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { UserContext } from "../contexts/userContext.jsx";
import GameListItemCompra from "../components/GameListItemCompra.jsx";
import Nav from "../components/nav.jsx";
import Jogos from "../ArrayGames/games.js";
import Auth from "../services/api.js";
import { useNavigate } from "react-router-dom";

function ShoppingCartPage() {
  const { userCart, setUserCart } = useContext(UserContext);
  const { totalPurchaseValue, setTotalPurchaseValue } = useState(0);

  const navigate = useNavigate();

  console.log(userCart);

  function handlePurchase() {
    Auth.purchaseGames(userCart).then(purchase()).catch();
  }

  function purchase() {
    console.log("Purchase");
    localStorage.removeItem("cart");
    window.location.reload()
    navigate("/store");
  }

  return (
    <ShoppingCartBody>
      <StorePageBlur />
      <Nav />
      <ShoppingCartContainer>
        <h1>Shopping Cart</h1>
        <ShoppingCartList>
          {userCart.map((game) => (
            <GameListItemCompra
              key={game.title}
              image={game.image}
              price={game.price}
              title={game.title}
              category={game.category.join(", ")}
            />
          ))}
        </ShoppingCartList>
        <PurchaseButton onClick={handlePurchase}>Comprar</PurchaseButton>
      </ShoppingCartContainer>
    </ShoppingCartBody>
  );
}

export default ShoppingCartPage;

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 60vw;
  min-width: 800px;
  z-index: 1;
  top: 80px;
`;

const PurchaseButton = styled.button`
  width: 100%;
`;

const ShoppingCartList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StorePageBlur = styled.div`
  height: 100%;
  width: 60vw;
  min-width: 800px;
  backdrop-filter: blur(8px);
  position: fixed;
`;

const ShoppingCartBody = styled.section`
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
