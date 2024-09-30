import "./App.css";
import Card_list from "./components/Card_list";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <h1 className="mainTitle">Juan David Mendoza Gaspar</h1>
      <h1 className="mainTitle">Jdda</h1>
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
      <Card_list />
    </>
  );
}

export default App;
