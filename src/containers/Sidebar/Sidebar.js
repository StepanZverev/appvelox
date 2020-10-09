import React, { Component } from 'react';
import classes from './Sidebar.css';
import Button from '../../components/Button/Button'

const links = [
    { to: "/", label: "Профиль", exact: true, iconUrl: "./img/heart.svg" },
    { to: "/", label: "Врачи и клиники", exact: false, iconUrl: "./img/stethoscope.svg" },
    { to: "/", label: "Сообщения", exact: false, iconUrl: "./img/speak.svg" },
    { to: "/", label: "Тестирование", exact: false, iconUrl: "./img/test.svg" },
    { to: "/", label: "Полезно знать", exact: false, iconUrl: "./img/book.svg" }
]

export default class Sidebar extends Component {

    renderLinks() {
        return (links.map((link, index) => {
            return (
                <li key={index} className={classes.nav_item}>
                    <a to={link.to} exact={link.exact} href={"/"}>
                        <div
                            className={classes.icon}
                            style={{
                                maskImage: `url(${link.iconUrl})`,
                                WebkitMaskImage: `url(${link.iconUrl})`
                            }}>
                        </div>
                        {link.label}
                    </a>
                </li>
            );
        }));
    }

    render() {
        return (
            <div className={classes.Sidebar}>
                <div className={classes.logo}>
                    Логотип
                </div>
                <nav >
                    <ul className={classes.nav_list}>
                        {this.renderLinks()}
                    </ul>
                </nav>
                <div className={classes.space}>
                    <Button>Подать заявку</Button>
                </div>
                <div className={classes.nav_item}>
                    <a href={"/"}>
                        <div
                            className={classes.icon}
                            style={{ maskImage: "url('./img/help.svg')", WebkitMaskImage: "url('./img/help.svg')" }}>
                        </div>
                        Помощь
                    </a>
                </div>
                <a
                    href={"http://appvelox.ru/"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    <img
                        className={classes.appvelox}
                        src={'./img/appvelox.png'}
                        alt={"appvelox"}
                    />
                </a>

            </div>
        )
    }
}