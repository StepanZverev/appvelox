import React, { Component } from 'react';
import classes from './Services.css';
import Service from '../../components/Service/Service';

export default class Services extends Component {
    render() {
        return (
            <div className={classes.Services}>
                <Service
                    title={"Информация о пациенте"}
                    iconUrl={"./img/report.svg"}
                >
                    <ul>
                        <li>Ваши личные данные</li>
                        <li>Рекомендации врачей</li>
                        <li>История болезней</li>
                    </ul>
                </Service>
                <Service
                    title={"Результаты анализов"}
                    iconUrl={"./img/lab.svg"}
                >
                    <p>Вы можете узнать здесь результаты своих анализов</p>
                </Service>
                <Service
                    title={"Добавить  информацию"}
                    iconUrl={"./img/add.svg"}
                >
                    <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
                </Service>
                <Service
                    title={"История приемов"}
                    iconUrl={"./img/clock.svg"}
                >
                    <p>Вся информация о полученных услугах за все время хранится здесь</p>
                </Service>
            </div>
        )
    }
}