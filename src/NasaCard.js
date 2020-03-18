import React from "react";

const NasaCard = props => {
  return (
    <div className="mainCard">
      <h1 className="title">{props.title} </h1>
      <h2 className="date">{props.date}</h2>
      <p className="explain">{props.explain}</p>

      <img className="nasa-image" alt="universe" src={props.img} />
    </div>
  );
};

export default NasaCard;
