import React from "react";
import { styled } from "styled-components";
import Nav from "../components/nav.jsx";
import GameListItem from "../components/GameListItem";
import GamesHighlight from "../components/GamesHighlight";
import { Icon } from "@iconify/react";
import Jogos from "../ArrayGames/games.js";

function StorePage() {
    const Category = ["Ação", "Terror", "Tiro", "Corrida", "Aventura", "RPG", "Plataforma"]
    return (
        <StorePageBody>
            <StorePageBlur />
            <Nav />
            <StorePageContainer>
                <StorePageContent>




                    <GameDescription>
                        <GameImage>
                            <img src={Jogos[3].background} alt="" />
                            <h1> {Jogos[3].title} </h1>
                            <p> {Jogos[3].description} </p>
                            <a href="">{Jogos[3].category}</a>
                        </GameImage>
                        <Comprar>
                            <p>Adicione ao carrinho por: {Jogos[3].price}</p>
                        </Comprar>

                        <GameList>
                            {Jogos.map(game => (
                                <GameListItem image={game.image} price={game.price} title={game.title} category={game.category} />
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
    background-color: #3e372bac;
    height: 50px;
    margin-top: 20px;
    p{
        font-size: 30px;
        padding: 10px 0px 10px 20px;
        
    }
`
const GameImage = styled.div`
    margin-top: 55px;

    img{
    width: 100%;
    height: 550px;
    }
    h1{
        margin: 20px;
    }
    a, p{  
        margin: 20px;
        font-size: 20px;
    }
`
const GameDescription = styled.div`
    background-color: #d9d9d9ac;
    width: 100%;
    height: 953px;
`
const StorePageContainer = styled.div`
  height: 100%;
  width: 79vw;
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
  margin-top: 15px;
  div{
    margin: 8px 0px 0px 0px;
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
