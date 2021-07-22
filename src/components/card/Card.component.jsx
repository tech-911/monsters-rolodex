import React from "react";
import "./Card.style.css";
const card = (props) => {
  return (
    <div className="card-container">
    <img src={`https://robohash.org/${props.items.id}902?set=set2&size=180x180`} alt="monsters"/>
      <p><b>Monster name is: </b> {props.items.name}</p>
      <p><b>Email: </b>{props.items.email}</p>
    </div>
  );
};

export default card;
 