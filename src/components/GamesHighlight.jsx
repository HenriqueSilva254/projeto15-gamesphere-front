import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GamesHighlight() {
  return (
    <GamesHightlightContainer>
      {/* <ArrowContainer>
        <StyledIcon icon="material-symbols:arrow-back-ios" />
      </ArrowContainer> */}
      <StyledCarousel>
        <GamesHightlightBox>Um Jogo</GamesHightlightBox>
        <GamesHightlightBox>Um Jogo</GamesHightlightBox>
      </StyledCarousel>
      {/* <ArrowContainer>
        <StyledIcon icon="material-symbols:arrow-forward-ios" />
      </ArrowContainer> */}
    </GamesHightlightContainer>
  );
}

export default GamesHighlight;

const GamesHightlightContainer = styled.div`
  width: 500px;
  height: fit-content;
  margin-top: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GamesHightlightBox = styled.div`
  width: 650px;
  height: 380px;
  padding: 8px;
  background-color: #d9d9d9;
`;

const GamesHightlightBoxTitle = styled.div`
  width: 650px;
  height: 380px;
  background-color: #d9d9d9;
`;

const StyledIcon = styled(Icon)`
  font-size: 80px;
  color: #d9d9d9;
`;

const ArrowContainer = styled.div`
  :hover {
    color: #f38405;
  }
`;
const StyledCarousel = styled(Carousel)`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: #f38405;
  }
`;
