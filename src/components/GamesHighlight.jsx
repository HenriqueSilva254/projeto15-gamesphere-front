import React from "react";
import { styled } from "styled-components";

function GamesHighlight() {
  return (
    <GamesHightlightContainer>
      <GamesHightlightBox></GamesHightlightBox>
    </GamesHightlightContainer>
  );
}

export default GamesHighlight;

const GamesHightlightContainer = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GamesHightlightBox = styled.div`
  width: 650px;
  height: 380px;
  background-color: #646464;
`;
