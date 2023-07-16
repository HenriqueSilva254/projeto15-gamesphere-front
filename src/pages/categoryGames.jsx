import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Nav from "../components/nav.jsx";
import GameListItem from "../components/GameListItem.jsx";
import GamesHighlight from "../components/GamesHighlight.jsx";
import { Icon } from "@iconify/react";
import Jogos from "../ArrayGames/games.js";
import GameFilterMenu from "../components/GameFilterMenu.jsx";
import { useParams } from "react-router-dom";

function CategoryGames() {
  const {category} = useParams()
  const [categoria, setCategoria] = useState([])
  
  console.log(category)
  useEffect(()=>{
    const gamefilter = () => Jogos.filter(j => j.category.includes(category) )
    setCategoria(gamefilter)
  }, [category])
  return (
    <StorePageBody>
      <StorePageBlur />
      <Nav />
      <StorePageContainer>
        <StorePageContent>
          <GameListContainer>
            <GameFilterMenu />
            <GameList>
              {categoria.map((game) => (
                <GameListItem
                  key={game.title}
                  image={game.image}
                  price={game.price}
                  title={game.title}
                  category={game.category.join(", ")}
                />
              ))}
            </GameList>
          </GameListContainer>
        </StorePageContent>
      </StorePageContainer>
    </StorePageBody>
  );
}

export default CategoryGames;

const StorePageContainer = styled.div`
  height: 100%;
  width: 60vw;
  min-width: 800px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StorePageContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StorePageBody = styled.section`
  overflow-x: hidden;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const GameListContainer = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const GameList = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const StorePageBlur = styled.div`
  height: 100%;
  width: 60vw;
  min-width: 800px;
  backdrop-filter: blur(8px);
  position: fixed;
`;
