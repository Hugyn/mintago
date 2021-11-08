import React from 'react'
import Container from './container';

import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <Container>
            <div className={styles.footer}>
                <div className={styles.topFooter}>
                    <div className={styles.collab}>
                        <p className={styles.title}>COLLABORATE</p>
                        <span className={styles.withUs}>WITH US</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div className={styles.form}>
                        <form>
                            <label>
                                NAME
                                <input placeholder='name'/>
                            </label>
                            <label>
                                PHONE
                                <input placeholder='PHONE'/>
                            </label>
                            <label>
                                EXPERIENCE
                                <input placeholder='EXPERIENCE'/>
                            </label>
                            <div>
                            <label>
                                SURNAME
                                <input placeholder='SURNAME'/>
                            </label>
                            <label>
                                PHONE
                                <input placeholder='EMAIL ADDRESS'/>
                            </label>
                            <label>
                                EXPERIENCE
                                <input placeholder='WHERE DID YOU HEAR ABOUT US'/>
                            </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;
