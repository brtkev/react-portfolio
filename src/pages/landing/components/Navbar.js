import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav id={styles['main-container']}>
                <ul id={styles['main-container__ul']}>
                    {/* <li className={styles['main-container__li']} >
                        <Link className={styles['link']} to='/'>home</Link>
                    </li> */}
                    <li className={styles['main-container__li']} >
                        <Link className={styles['link']} to='/fiber'>Fiber</Link>
                    </li>
                </ul>
                
            </nav>
        )
    }
}
