import Card_list from "./Card_list";
import Skills from "./Skills";
import "./Portafolio.css";

const Portafolio = () => {
  return (
    <>
      <h1 className="mainTitle">Juan David Mendoza Gaspar</h1>
      <h1 className="subTitle">Estudiante Universitario</h1>
      <div className="description-block">
        <h3 className="descripcion">
          Soy un estudiante de Ingeniería Multimedia en la Universidad Autonoma
          de Occidente. Me especializo en Diseño Web. A lo largo de mi
          formación, he adquirido habilidades en Tecnologías como Unity, Blender
          y HTML/CSS. Tengo experiencia en proyectos que integran creatividad y
          tecnología. Estoy apasionado por la creación de experiencias
          inmersivas, el diseño de interfaces de usuario y la programación de
          videojuegos, además busco continuamente mejorar mis competencias en
          varias áreas de la programación.
        </h3>
      </div>
      <div className="skills-block">
        <Skills
          color={"#5377A6"}
          title={"Habilidades Blandas"}
          skill1={"Trabajo en Equipo"}
          skill2={"Lógica"}
          skill3={"Trabajo bajo presión"}
          skill4={"Adaptabilidad"}
        />
        <Skills
          color={"#034001"}
          title={"Habilidades Duras"}
          skill1={"Programación"}
          skill2={"Nivel B2 de Inglés"}
          skill3={"Manejo de Bases de Datos"}
          skill4={"Modelado 3D"}
        />
      </div>
      <h1 className="subTitle">Portafolio</h1>
      <Card_list />
    </>
  );
}
export default Portafolio;