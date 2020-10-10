import React, { Component } from 'react';
import classes from './Sidebar.css';
import Button from '../../components/Button/Button';
import {NavLink} from 'react-router-dom';

const links = [
    { to: "/profile", label: "Профиль", exact: true, iconUrl: "./img/heart.svg" },
    { to: "/1", label: "Врачи и клиники", exact: false, iconUrl: "./img/stethoscope.svg" },
    { to: "/2", label: "Сообщения", exact: false, iconUrl: "./img/speak.svg" },
    { to: "/3", label: "Тестирование", exact: false, iconUrl: "./img/test.svg" },
    { to: "/4", label: "Полезно знать", exact: false, iconUrl: "./img/book.svg" }
]

export default class Sidebar extends Component {
    renderLinks() {
        return (links.map((link, index) => {
            let cls = [classes.nav_item]

            if (document.location.pathname.indexOf(link.to)!== -1) {
                cls.push(classes.active)
            }

            return (
                <li key={index} className={cls.join(' ')}>
                    <NavLink to={link.to} exact={link.exact} href={"/"}>
                        <div
                            className={classes.icon}
                            style={{
                                maskImage: `url(${link.iconUrl})`,
                                WebkitMaskImage: `url(${link.iconUrl})`
                            }}>
                        </div>
                        {link.label}
                    </NavLink>
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
                    <NavLink to={"/5"}>
                        <div
                            className={classes.icon}
                            style={{ maskImage: "url('./img/help.svg')", WebkitMaskImage: "url('./img/help.svg')" }}>
                        </div>
                        Помощь
                    </NavLink>
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