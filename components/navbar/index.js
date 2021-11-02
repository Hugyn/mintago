import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image src="/logo.svg" height={36} width={73} alt="The best foodie experience awesome logo" />
            <ul className={styles.leftMenu}>
                <li>LINKS</li>
                <li>LINKS</li>
                <li>LINKS</li>
                <li>LINKS</li>
                <li>LINKS</li>
            </ul>

            <div className={styles.rightMenu}>
                <ul className={styles.navRight}>
                    <li>Contact</li>
                    <li>Log in</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
