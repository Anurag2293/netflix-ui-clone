import React from 'react'

import logo from './assets/logo.png'
import styles from './Navigation.module.css'
import SecondaryNavigation from '../SecondaryNavigation'

const Navigation = () => {
    const navItems = [
        'Home',
        'TV Shows',
        'Movies',
        'New & Popular',
        'My List'
    ]

    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
            <img className={styles.logo} src={logo} alt="" />
            <ul className={styles.navigationList}>
                {navItems.map((item, index) => (
                    <li className={styles.navigationItem} key={index}>{item}</li>
                ))}
            </ul>
            </div>
            <SecondaryNavigation />
        </div>
    )
}

export default Navigation