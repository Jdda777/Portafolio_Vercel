import React from "react";
import "./Card_list.css"; // Archivo opcional para estilos
import Card from "./Card";

const Card_list = () => {
  return (
    <div className="card-list">
      <Card
        title="Card Title 1"
        content="This is a description for the first card."
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        title="Card Title 2"
        content="This is a description for the second card."
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        title="Card Title 3"
        content="This is a description for the third card."
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
    
  );
};

export default Card_list;
