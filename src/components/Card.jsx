import React from "react";
import "./Card.css"; // Archivo opcional para estilos

const Card = ({ title, content, imageUrl, linkUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <a href={linkUrl}>
          <h2 className="card-title">{title}</h2>
        </a>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
