import React from 'react';
import data from "../../data/data.json";
import Card from '../Card/Card';
import classes from './CardList.css'

const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"]



function getFormatDate(date) {
    const day = days[date.getDay()];
    const formatDate = date.getDate()<10? `0${date.getDate()}`:date.getDate();
    const formatMonth = date.getMonth()+1<10? `0${date.getMonth()+1}`:date.getMonth()+1;
    const formatYear = date.getFullYear()%100;

    return `${day} ${formatDate}.${formatMonth}.${formatYear} | ${date.getHours()}:${date.getMinutes()}`
}

function renderCards(cardCount) {
    let result = [];

    for (let i = 0; i < cardCount; i++) {
        result[i] = data.cards[i];
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

function renderMore() {
    const cardInPage = 2;

    if (data.cards.length <= cardInPage) {
        return null;
    }

    return (
        <div className={classes.more}>
            <span>
                Еще {data.cards.length - cardInPage} записи
        </span>
            <br />
            <a
                className={classes.link}
                href={"/"}
            >
                Подробнее
        </a>
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

            {props.vertical ? renderCards(data.cards.length): renderCards(2)}

            {props.vertical ? null : renderMore()}
        </div>
    )
}


export default CardList