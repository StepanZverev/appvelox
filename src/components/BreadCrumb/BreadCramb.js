import React from 'react'
import classes from './BreadCrumb.css'

const BreadCrumb = props => {
    return (
        <div className={classes.BreadCrumb}>
            <a href={"/"} className={classes.link}>
                <div className={classes.icon}
                    style={{
                        maskImage: 'url("./img/back-arrow.svg")',
                        WebkitMaskImage: 'url("./img/back-arrow.svg")'
                    }}>
                </div>
                <span className={classes.text}>
                    {props.children}
                </span>
            </a>
        </div>
    )
}


export default BreadCrumb