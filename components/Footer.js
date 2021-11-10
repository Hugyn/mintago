import React from 'react'
import Container from './container';
import { useInView } from 'react-intersection-observer';

import styles from "../styles/Footer.module.css"

function Footer() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.65,
      });
    return (
        <div ref={ref} className={styles.backgroundSalmon}>
            <Container>
                    <div className={styles.topFooter}>
                        <div>
                            <div className={styles.collab}>
                                <p className={styles.title}>COLLABORATE</p>
                                <span className={styles.withUs}>WITH US</span>
                                <p className={styles.collabText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div >
                            <form className={styles.form}>
                                <div className={styles.inputs}>
                                    <label>
                                        NAME
                                        <br/>
                                        <input placeholder='name'/>
                                    </label>
                                    <label>
                                        PHONE
                                        <br/>
                                        <input placeholder='PHONE'/>
                                    </label>
                                    <label>
                                        EXPERIENCE
                                        <br/>
                                        <input placeholder='EXPERIENCE'/>
                                    </label>
                                </div>
                                <div className={styles.inputs}>
                                    <label>
                                        SURNAME
                                        <br/>
                                        <input placeholder='SURNAME'/>
                                    </label>
                                    <label>
                                        PHONE
                                        <br/>
                                        <input placeholder='EMAIL ADDRESS'/>
                                    </label>
                                    <label>
                                        EXPERIENCE
                                        <br/>
                                        <input placeholder='WHERE DID YOU HEAR ABOUT US'/>
                                    </label>
                                </div>
                            </form>
                        </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
