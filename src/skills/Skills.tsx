import React from 'react';
import style from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    const skills = ['React', 'Redux', 'TypeScript', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Git', 'Ajax', 'REST API', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Websockets', 'Sass', 'Storybook', 'MUI']
    return (
        <div className={style.skills}>
            <h2 className={style.title}>My main skills are:</h2>
            <div>
                {skills.map((el, index) =>
                    <Skill title={el} key={el}/>)}
            </div>
        </div>
    );
};

export default Skills;