import React, { Component } from 'react';
import classes from './Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                {this.props.children}
            </div>
        );
    }
}