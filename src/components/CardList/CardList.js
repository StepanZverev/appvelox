import React from 'react';
import Card from '../Card/Card';
import classes from './CardList.css';
import { NavLink } from 'react-router-dom';

const DAY_NAMES = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"]



function getFormatDate(date) {
    const day = DAY_NAMES[date.getDay()];
    const formatDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const formatMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const formatYear = date.getFullYear() % 100;

    return `${day} ${formatDate}.${formatMonth}.${formatYear} | ${date.getHours()}:${date.getMinutes()}`
}

function renderCards(cards, cardCount) {
    let result = [];

    for (let i = 0; i < cardCount; i++) {
        result[i] = cards[i];
    }

    return (
        result.map((card, index) => {

            const formatDate = getFormatDate(new Date(card.date))

            return (
                <Card
                    key={index}
                    date={formatDate}
                    clinic={card.clinic}
                    name={card.doctor}
                    department={card.department}
                    url={card.photoUrl}
                >
                    {card.toString()}
                </Card>
            )
        })
    )
};

function renderMore(amount) {

    if (amount <= 0) {
        return null;
    }

    return (
        <div className={classes.more}>
            <span>
                Еще {amount} записи
        </span>
            <br />
            <NavLink
                className={classes.link}
                to={"/appointments"}
            >
                Подробнее
        </NavLink>
        </div>
    )
};

const CardList = props => {
    let cls = [classes.CardList];

    if (props.vertical) {
        cls.push(classes.vertical)
    }

    return (
        <div className={cls.join(" ")}>

            {props.vertical ? renderCards(props.cards, props.cards.length) : renderCards(props.cards, 2)}

            {props.vertical ? null : renderMore(props.cards.length - 2)}
        </div>
    )
}


export default CardList