import React, { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

function Nav() {
  const [menu, setMenu] = useState(<StyledIcon icon="ci:hamburger" />)
  return (
    <NavContainer>
      <NavLeft>
        <div>{menu}</div>
      </NavLeft>
      <NavRight>
        <StyledIcon icon="material-symbols:shopping-cart" />
        <StyledIcon icon="material-symbols:account-circle" />
      </NavRight>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
   width: 100%;
  height: 50px;
  z-index: 10;

  background-color: #D9D9D9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  filter: drop-shadow(0px 0px 10px #000000a6);
`;

const StyledIcon = styled(Icon)`
    font-size: 30px;
    color: #F0A24B;
    :hover {
        color: #f38405;
    }
`

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: 16px;
  `;
const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-right: 16px;
  `;
