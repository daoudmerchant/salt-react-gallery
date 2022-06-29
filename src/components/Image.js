import React from "react";

const Image = ({img}) => {
    return (
        <img src={img.urls.small} alt={img.alt_description}/>
    )
}

export default Image;