import React from "react";
import styled from "styled-components";

const FooterElem = styled.footer`
    padding-block: 1.5em;
    position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: lightgrey;
   color: black;
   text-align: center;
`

const Icon = styled.img`
    max-height: 40px;
`

const Footer = () => (
    <FooterElem>
        <a href="https://github.com/daoudmerchant/unsplash-gallery-exercise" target="__blank">
            <Icon src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
        </a>
    </FooterElem>
)

export default Footer;