import React, { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function Nav() {
  const [menu, setMenu] = useState(<StyledIcon icon="ci:hamburger" />);
  return (
    <NavContainer>
      <NavLeft>
        {/* <div>{menu}</div> */}
       <Link to={"/"}>Home</Link>
       <Link>Biblioteca</Link>
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
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 10px #000000a6);
 
`;

const StyledIcon = styled(Icon)`
  font-size: 30px;
  color: #f0a24b;
  :hover {
    color: #f38405;
  }
`;

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 16px;
  width: 200px;

  a{
    color: #f0a24b;
    padding-top: 0px;
  }
  a:hover{
    transition: 2s;
    font-size: 19px;
    color: #fc8700;
  }
`;

const NavButtonsContainer = styled.div`
  display: flex;
`;
const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-right: 16px;
`;
