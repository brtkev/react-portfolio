import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/display.module.css';

export default class Display extends Component {
    render() {
        return (
            <div id={styles['main-container']}>
                <Link />
            </div>
        )
    }
}
