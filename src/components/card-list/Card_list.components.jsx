import React from "react";
import Card from "../card/Card.component";
import "./Card_list.style.css";
function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((value) => (
        <Card key={value.id} items={value} />
      ))}
    </div>
  );
}

export default CardList;
 