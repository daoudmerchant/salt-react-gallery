import React from "react";
import styled from "styled-components";

const HeaderElem = styled.header`
    background-color: steelblue;
    margin-bottom: 1em;
    color: white;
`

const Header = () => (
    <HeaderElem>
        <h1>LOGO</h1>
    </HeaderElem>
)

export default Header;