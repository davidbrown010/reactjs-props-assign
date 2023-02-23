import React from 'react';

function Card({ imageURL, title, description }) {
  return (
    <div className="col">
      <img src={imageURL} style={{ width: 75, height: 75 }} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
