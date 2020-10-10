import React, { Component } from 'react';
import classes from './Profile.css';
import CardList from '../../components/CardList/CardList';
import Services from '../Services/Services';
import data from '../../data/data.json';

export default class Profile extends Component {

    render() {
        return (
            <div className={classes.Profile}>
                <div className={classes.title}>
                    Записи на прием
                </div>

                <CardList vertical={false} cards={data.cards}/> 

                <div className={classes.title}>
                    Электронная карта
                </div>
                <Services/>

            </div>
            
        )
    }
}