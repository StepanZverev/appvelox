import React from 'react';
import classes from './Card.css';
import Button from '../Button/Button'

const Card = props => {
    return (
        <div className={classes.Card}>
            <div className={classes.content}>
                <div className={classes.date}>
                    {props.date}
                </div>
                <div className={classes.clinic}>
                    {props.clinic}
                </div>
                <div className={classes.doctor}>
                    <img
                        className={classes.photo}
                        src={props.url}
                        alt={"doctor"}
                    />
                    <div>
                        <div className={classes.name}>
                            {props.name}
                        </div>
                        <div className={classes.department}>
                            {props.department}
                        </div>
                    </div>
                </div>
            </div>

            <Button className={classes.button}>
                Отменить
            </Button>

        </div>
    )
}


export default Card