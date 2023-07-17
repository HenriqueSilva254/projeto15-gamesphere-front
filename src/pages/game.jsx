import React, { useEffect } from "react";
import { styled } from "styled-components";
import Nav from "../components/nav.jsx";
import GameListItem from "../components/GameListItem";
import GamesHighlight from "../components/GamesHighlight";
import { Icon } from "@iconify/react";
import Jogos from "../ArrayGames/games.js";
import { useParams } from "react-router-dom";


function StorePage() {

  useEffect(() => {
         
  }, [])

  const {title} = useParams()
  const Game =  Jogos.find(j => j.title === title)
  console.log(Game)


  return (
    <StorePageBody>
      <StorePageBlur />
      <Nav />
      <StorePageContainer>
        <StorePageContent>
          <GameDescription>
            <GameImage>
              <img src={Game.background} alt="" />
              <h1> {Game.title} </h1>
              <p> {Game.description} </p>
              <a href="">{Game.category.join(", ")}</a>
            </GameImage>
            <Comprar>
              <p>Adicione ao carrinho por:</p> <p>"R${Game.price}"</p>
            </Comprar>

            <GameList>
              {Jogos.map((game) => (
                <GameListItem
                  key={game.title}
                  image={game.image}
                  price={game.price}
                  title={game.title}
                  category={game.category.join(", ")}
                />
              ))}
            </GameList>
          </GameDescription>
        </StorePageContent>
      </StorePageContainer>
    </StorePageBody>
  );
}

export default StorePage;
const Comprar = styled.div`
  background-color: #590808ac;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 30px;
    padding: 10px 20px 10px 20px;
    color: #f0a24b;
  }
`;
const GameImage = styled.div`
  margin-top: 55px;

  img {
    width: 100%;
    height: 550px;
  }
  h1 {
    margin: 20px;
  }
  a,
  p {
    margin: 20px;
    font-size: 20px;
    color: white;
  }
`;
const GameDescription = styled.div`
  background-color: #000000;

  width: 100%;
  height: 914px;
`;
const StorePageContainer = styled.div`
  height: 100%;
  width: 79vw;
  min-width: 800px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const StorePageContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StorePageBody = styled.section`
  overflow-x: hidden;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  div {
    margin: 8px 15px 10px 0px;
  }
`;

const GameListFilterContainer = styled.div`
  width: 150px;
  height: fit-content;
  padding: 12px 6px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;

  background-color: #d9d9d9;

  h2 {
    font-size: 18px;
    color: orange;
  }
`;

const StorePageBlur = styled.div`
  height: 100%;
  width: 1200px;
  min-width: 800px;
  backdrop-filter: blur(8px);
  position: fixed;
`;
