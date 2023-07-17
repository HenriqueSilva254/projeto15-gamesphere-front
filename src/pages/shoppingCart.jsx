import React, { useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "../contexts/userContext.jsx";
import GameListItem from "../components/GameListItem.jsx";
import Nav from "../components/nav.jsx";

function ShoppingCartPage() {
  const { userCart, setUserCart } = useContext(UserContext);

  console.log(userCart);

  return (
    <ShoppingCartBody>
      <StorePageBlur />
      <Nav />
      <ShoppingCartContainer>
        <h1>Shopping Cart</h1>
        <ShoppingCartList>
          {userCart.map((game) => (
            <GameListItem
              key={game.title}
              image={game.image}
              price={game.price}
              title={game.title}
            />
          ))}
        </ShoppingCartList>
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
