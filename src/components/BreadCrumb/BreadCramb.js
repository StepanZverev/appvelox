import React from 'react';
import classes from './BreadCrumb.css';
import {NavLink} from 'react-router-dom';


const BreadCrumb = props => {
    return (
        <div className={classes.BreadCrumb}>
            <NavLink to={"/profile"} className={classes.link}>
                <div className={classes.icon}
                    style={{
                        maskImage: 'url("./img/back-arrow.svg")',
                        WebkitMaskImage: 'url("./img/back-arrow.svg")'
                    }}>
                </div>
                <span className={classes.text}>
                    {props.children}
                </span>
            </NavLink>
        </div>
    )
}


export default BreadCrumb