import React from 'react';
import style from './Project.module.css'
import styleContainer from '../../common/Container.module.css'

export type ProjectPropsType = {
    title: string
    link: string
    image?: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={`${styleContainer.itemContainer} ${style.project}`}>
            <a href={`${props.link}`}>
                <img className={style.img} src={props.image}/>
            </a>
            <h3 className={styleContainer.link}>{props.title}</h3>
        </div>
    );
};

export default Project;