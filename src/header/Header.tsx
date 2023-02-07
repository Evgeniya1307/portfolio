import React from 'react';
import style from './Header.module.css'
import {ReactComponent as Tg} from '../icons/tg.svg'
import {ReactComponent as Github} from '../icons/github.svg'
import {ReactComponent as Linkedin} from '../icons/linkedin.svg'

type HeaderPropsType = {
    color: string
    text: string
    displayIcons?: string
}

const Header = (props: HeaderPropsType) => {

    return (
        <div className={style.header}>
            <div className={style.headerBlock} style={{backgroundColor: `${props.color}`}}></div>
            <div className={style.title}><p>Evgenia Starovoitova</p></div>
            <div className={style.title} style={{color: `${props.color}`}}><span>{props.text}</span></div>
            <div className={style.iconsBox} style={{display: `${props.displayIcons}`}}>
                <a href={'https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D1%82%D0%B0%D1%80%D0%B0%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2%D0%B0-0a2108232/'}>
                    <Linkedin className={style.icon}/>
                </a>
                <a href={'https://t.me/zhenechka_2020'}>
                    <Tg className={style.icon}/>
                </a>
                <a href={'https://github.com/Evgeniya1307'}> 
                    <Github className={style.icon}/>
                </a>
            </div>
        </div>
    );
};

export default Header;