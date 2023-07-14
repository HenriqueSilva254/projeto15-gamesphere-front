import React from "react";
import { styled } from "styled-components";
import Nav from "../components/nav";
import GameListItem from "../components/GameListItem";
import GamesHighlight from "../components/GamesHighlight";
import { Icon } from "@iconify/react";

function StorePage() {
  return (
    <StorePageBody>
      <StorePageContainer>
        <Nav />
        <GamesHighlight />
        <GameListContainer>
          <GameListFilterContainer>
            
          </GameListFilterContainer>
          <GameList>
            {/* MAP DOS JOGOS */}
          </GameList>
        </GameListContainer>
      </StorePageContainer>
    </StorePageBody>
  );
}

export default StorePage;

const GameListContainer = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: row;

  background-color: lightgray;
`;

const GameList = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: row;

  background-color: lightgray;
`;

const GameListFilterContainer = styled.div`
  width: 140px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  background-color: lightgray;
`;

const StorePageContainer = styled.div`
  height: 100%;
  width: 60vw;
  backdrop-filter: blur(8px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StorePageBody = styled.section`
  overflow-x: hidden;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://cdn.discordapp.com/attachments/1129133285423980654/1129138765651267855/9b5719d2-481e-410a-bfb6-886d32ad2aea.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
