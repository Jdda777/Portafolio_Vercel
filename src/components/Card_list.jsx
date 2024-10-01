import React from "react";
import "./Card_list.css"; // Archivo opcional para estilos
import Card from "./Card";

const Card_list = () => {
  return (
    <div className="card-list">
      <Card
        linkUrl={"https://github.com/Jdda777/Responsive.git"}
        title="Página Responsive"
        content="Creación de Página Adaptiva usando HTML Y CSS"
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        linkUrl={"https://github.com/edwinmgallego/clase-practica-css.git"}
        title="Plataforma de ingreso"
        content="Replica de la plataforma de ingreso de la UAO"
        imageUrl="https://via.placeholder.com/150"
      />
      <Card
        linkUrl={"https://stackblitz.com/edit/stackblitz-starters-8regsb?file=page2.html"}
        title="Portafolio en StackBlitz"
        content="Boceto de Portafolio desplegado en StackBlitz"
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default Card_list;
