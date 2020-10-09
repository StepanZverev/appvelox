import React from 'react'
import classes from './Service.css'

const Service = props => {
    return (
        <div className={classes.Service}>
            <div className={classes.wrapper}>
                <div
                    className={classes.icon}
                    style={{
                        maskImage: `url(${props.iconUrl})`,
                        WebkitMaskImage: `url(${props.iconUrl})`
                    }}>
                </div>
            </div>
            <div className={classes.content}>
                <h4 className={classes.title}>{props.title}</h4>
                {props.children}
            </div>

        </div>
    )
}


export default Service