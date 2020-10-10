import React from 'react';
import classnames from 'classnames'

import * as calendar from './_calendar';

import classes from './Calendar.css';

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });

        this.props.onChange(date);
    };

    renderMark(date) {
        const number = this.props.markList.filter(e => calendar.areEqual(e, date)).length;

        if (!number) {
            return null;
        }

        return (
            <span className={classes.mark}>
                {number}
            </span>
        )

    }

    render() {
        const { monthNames, weekDayNames } = this.props;
        const { selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className={classes.Calendar}>
                <div className={classes.header}>
                    <button
                        onClick={this.handlePrevMonthButtonClick}
                    >
                        <img
                            alt={"left"}
                            src={"./img/left-arrow.svg"}
                        />
                    </button>

                    <div className={classes.date}>
                        <span>{monthNames[this.month]},&nbsp;</span>
                        <span>{this.year}</span>
                    </div>

                    <button
                        onClick={this.handleNextMonthButtonClick}
                    ><img
                            alt={"right"}
                            src={"./img/right-arrow.svg"}
                        />
                    </button>
                </div>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className={classes.week}>
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames(classes.day, {
                                            [classes.selected]: calendar.areEqual(date, selectedDate),
                                            [classes.disabled]: date < this.state.currentDate - 1
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}
                                        {this.renderMark(date)}
                                    </td>

                                    :
                                    <td key={index} />
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}