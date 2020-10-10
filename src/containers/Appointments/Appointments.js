import React, { Component } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCramb';
import CardList from '../../components/CardList/CardList';
import classes from './Appointments.css';
import Calendar from '../Calendar/Calendar';
import data from "../../data/data.json";


export default class Appointments extends Component {

    state = {
        date: null
    };

    handleDateChange = date => this.setState({ date });

    getClendarData(data) {
        let markList = [];

        data.cards.forEach(card => {
            markList.push(new Date(card.date));
        });

        console.log(markList);
        return markList;
    }

    render() {
        return (
            <div className={classes.Appointments}>
                <BreadCrumb>Мои записи</BreadCrumb>
                <div className={classes.content}>
                    <CardList
                        vertical={true}
                        cards={data.cards}
                    />

                    <Calendar
                        onChange={this.handleDateChange}
                        markList={this.getClendarData(data)}
                    />
                </div>
            </div>
        )
    }
}