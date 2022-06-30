import React from "react";
import styled from "styled-components";
import {IoLogoOctocat} from "react-icons/io"
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
        <a href="https://github.com/daoudmerchant/salt-react-gallery" target="__blank">
<IoLogoOctocat/>       </a>
    </FooterElem>
)

export default Footer;
