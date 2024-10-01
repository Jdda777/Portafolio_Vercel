import React from "react";
import "./Card_list.css"; // Archivo opcional para estilos
import Card from "./Card";

const Card_list = () => {
  return (
    <>
      <div className="card-list">
        <Card
          linkUrl={"https://github.com/Jdda777/Responsive.git"}
          title="Página Responsive"
          content="Creación de Página Adaptiva usando HTML Y CSS"
          imageUrl="https://disenowebakus.net/imagenes/articulos/diseno-web-responsive-adaptable.jpg"
        />
        <Card
          linkUrl={"https://github.com/edwinmgallego/clase-practica-css.git"}
          title="Plataforma de ingreso"
          content="Replica de la plataforma de ingreso de la UAO"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_otoAMenN_1G-MShXGWt0V3IgHr-2tfSeQ&s"
        />
        <Card
          linkUrl={
            "https://stackblitz.com/edit/stackblitz-starters-8regsb?file=page2.html"
          }
          title="Portafolio en StackBlitz"
          content="Boceto de Portafolio desplegado en StackBlitz"
          imageUrl="https://marcago.com/wp-content/uploads/2022/03/portafolio-creativo-768x467-1.jpg"
        />
      </div>
      <div className="card-list">
        <Card
          linkUrl={"https://github.com/Jdda777/Js_Basics.git"}
          title="Número Igual o Mayor"
          content="La aplicación de logica en funcion flecha esta en la rama main"
          imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCULpqMSQ9npD9MESnSRCZs-rZY83s7-3IjScXYYFqU4I6ukQ7ngutELZX2ThJnCWPZq57W127lZyOStsShTzDlhr2KWyhmiUDDztK-maWtitWXnYAoMBsqQdbImTGP5VvzjCS3ZDksPM/s1600/Listado+de+operadores+relacionales.png"
        />
        <Card
          linkUrl={"https://github.com/Jdda777/componentes.git"}
          title="Card"
          content="Implementacion de componentes usando el Framework React"
          imageUrl="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
        />
        <Card
          linkUrl={"https://github.com/Jdda777/Contador.git"}
          title="Contador"
          content="Experimentación con React usando UseState"
          imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*MGlrNmHUaT_2Gku11LLfLw.png"
        />
      </div>
    </>
  );
};

export default Card_list;
