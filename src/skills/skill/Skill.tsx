import React from 'react';
import style from '../Skills.module.css'
import styleContainer from '../../common/Container.module.css'

export type SkillPropsType = {
    title: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={`${styleContainer.link} ${style.skillContainer}`}>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;