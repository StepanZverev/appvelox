import React from 'react'
import classes from './Profile.css'



const Profile = () => {
    return (
        <div className={classes.Profile}>
            <img
                className={classes.photo}
                src={"./img/profile-photo.jpg"}
                alt={"profile"}
            />
            <div className={classes.arrow}>
                <img
                    src={"./img/header-arrow.svg"}
                    alt={"arrow"}
                />
            </div>
        </div>
    )
}


export default Profile