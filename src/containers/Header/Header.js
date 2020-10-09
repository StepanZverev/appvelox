import React, { Component } from 'react'
import classes from './Header.css'
import Profile from '../../components/Profile/Profile'

const icons = [
    { url: "./img/search.svg" },
    { url: "./img/bell.svg" },
    { url: "./img/eye.svg" }
]

export default class Header extends Component {

    renderHeaderButtons() {
        return (
            icons.map((icon, index) => {
                return (
                    <div
                        key={index}
                        className={classes.btn}
                        style={{
                            maskImage: `url("${icon.url}")`,
                            WebkitMaskImage: `url("${icon.url}")`
                        }}
                    >
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <header className={classes.Header}>
                <h3 className={classes.title}>Мой профиль</h3>
                <div className={classes.buttons}>
                    {this.renderHeaderButtons()}
                </div>
                <Profile/>
            </header>
        )
    }
}