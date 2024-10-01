import React from "react";
import "./Skills.css";

const Skills = ({ color, title, skill1, skill2, skill3, skill4 }) => {
  return (
    <div className="skill-list" style={{ backgroundColor: color }}>
      <h2 className="titulo">{title}</h2>
      <ul>
        <li className="item">{skill1}</li>
        <li className="item">{skill2}</li>
        <li className="item">{skill3}</li>
        <li className="item">{skill4}</li>
      </ul>
    </div>
  );
};
export default Skills;
