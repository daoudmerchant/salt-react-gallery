import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import Logo from "./Logo";

const HeaderElem = styled.header`
  background-color: steelblue;
  margin-bottom: 1em;
  color: white;
  & a:visited {
    color: white;
  }
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const MyNavLink = styled(NavLink)`
 &:first-child {
    margin-right: auto;
 }
`

const linkStyle = {
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
  paddingInline: ".4em"
}

const activeStyle = {
  color: "steelblue",
  backgroundColor: "white"
}

const Header = () => (
  <HeaderElem>
    <Nav>
      <MyNavLink to="/">
        <Logo />
      </MyNavLink>
        <NavLink style={({ isActive }) =>
              isActive ? {...linkStyle, ...activeStyle} : linkStyle
            } to="/">
          <AiOutlineHome />
        </NavLink>
        <NavLink style={({ isActive }) =>
              isActive ? {...linkStyle, ...activeStyle} : linkStyle
            } to="search">
          <AiOutlineSearch />
        </NavLink>
        <NavLink style={({ isActive }) =>
              isActive ? {...linkStyle, ...activeStyle} : linkStyle
            } to="about">
          <AiOutlineInfoCircle />
        </NavLink>
    </Nav>
  </HeaderElem>
);

export default Header;
