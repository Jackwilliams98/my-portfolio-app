import React from 'react'
import styles from 'styles/components/header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src='/images/logo.jpg' alt='webite logo' />
                    <span className={styles.logoText}>Jack Williams Development</span>
                </div>
            </div>
        </header>
    )
}

export default Header
