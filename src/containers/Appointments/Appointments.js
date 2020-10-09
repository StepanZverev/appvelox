import React, { Component } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCramb';
import CardList from '../../components/CardList/CardList';
import classes from './Appointments.css'
import Calendar from '../Calendar/Calendar'


export default class Appointments extends Component {

    state = {
		date: null
    };
    
    handleDateChange = date => this.setState({ date });

    render() {
        return (
            <div className={classes.Appointments}>
                <BreadCrumb>Мои записи</BreadCrumb>
                <div className={classes.content}>
                    <CardList vertical={true}/>
                    
                    <Calendar onChange={this.handleDateChange}/>
                </div>
            </div>
        )
    }
}