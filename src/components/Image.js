import React from "react";
import styled from "styled-components";

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
`

const Image = ({img}) => {
    return (
        <Photo src={img.urls.small} alt={img.alt_description}/>
    )
}

export default Image;