import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

function Nav() {
  return (
    <NavContainer>
      <NavLeft>

        <Icon icon="ci:hamburger" />
      </NavLeft>
      <NavRight>
        <Icon icon="material-symbols:shopping-cart" />
        <Icon icon="material-symbols:account-circle" />
      </NavRight>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  width: 100%;
  height: 50px;

  background-color: #646464;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  filter: drop-shadow(0px 0px 10px #000000a6);
`;



const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  `;
const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;
