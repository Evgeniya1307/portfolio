import React from 'react';
import style from './Navigation.module.css'
import {Link} from "react-scroll"

export type NavigationPropsType = {
    navigationList: Array<string>
}

const Navigation = (props: NavigationPropsType) => {
    return (
        <div className={style.navigation}>
            {props.navigationList.map((el, index) =>
                <Link to={el} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}
                      key={index}
                      className={style.navigationLink}>
                    {el}
                </Link>
            )}
        </div>
    );
};

export default Navigation;