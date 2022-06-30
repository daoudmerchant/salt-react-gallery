import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiSaltShaker } from "react-icons/gi";

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

const MyLink = styled(Link)`
 &:first-child {
    margin-right: auto;
 }
 &:not(:first-child) {
    margin-inline: .5em;
 }
`

const Header = () => (
  <HeaderElem>
    <Nav>
      <MyLink to="/">
        <Logo />
      </MyLink>
        <MyLink to="/">
          <AiOutlineHome />
        </MyLink>
        <MyLink to="search">
          <AiOutlineSearch />
        </MyLink>
        <MyLink to="about">
          <AiOutlineInfoCircle />
        </MyLink>
    </Nav>
  </HeaderElem>
);

export default Header;
