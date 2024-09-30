import React from "react";
import './Skills.css'

const Skills = ({title, skill1, skill2, skill3, skill4}) => {
    return(
        <div className="skill-list">
            <h2>{title}</h2>
            <ul>
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
                <li>{skill4}</li>
            </ul>

        </div>
    )
}
export default Skills;