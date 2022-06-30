import React from "react";
import styled from "styled-components";
import "../App.css";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const CardText_container = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0px;
  position: absolute;
  padding: 1rem;
  background-color: #547556;
  color: white;
  transform: rotateY(180deg);
`;

const Card = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  object-fit: cover;
  aspect-ratio: 1/1;
  ${Div}:hover & {
    transform: rotateY(180deg);
  }
`;

const Image = ({ img }) => {
  return (
    <div className="card">
      <div className="card-container">
        <img
          className="card__image"
          src={img.urls.small}
          alt={img.alt_description}
        />
        <div className="card__Text">
          <p>Image description: {img.alt_description}</p>
          <p>Captured by: {img.user.first_name} {img.user.last_name}</p>
          <p>Twitter username: {img.user.twitter_username}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
