import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/Container.module.css'
import Project from "./project/Project";
import pizza from '../images/pizza.jpg';
import social from '../images/social.png'
import burger from '../images/burger.jpg'
import Header from "../header/Header";

const Projects = () => {
    const projects = [
        {
            title: 'Social network',
            link: 'https://github.com/Evgeniya1307/Social-network',
            image: social
        },
        {
            title: ' React-Pizza',
            link: 'https://github.com/Evgeniya1307/-React-Pizza-',
            image:pizza
        },
        {
            title: ' Restaurant-burger',
            link: 'https://github.com/Evgeniya1307/-Restaurant-burger',
            image: burger
        },
       
    ]
    return (
        <div id={'Projects'}>
            <Header color={'#41e163'} text={' / projects'} displayIcons={'none'}/>
            <div className={`${style.projects} ${styleContainer.page}`}>
                <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                    <h2>My projects</h2>
                    <div className={styleContainer.list}>
                        {projects.map((el, index) =>
                            <Project title={el.title}
                                     link={el.link}
                                     image={el.image}
                                     key={el.title}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;