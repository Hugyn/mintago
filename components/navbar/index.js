import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'


const navLinks = ["About", "Community", "Location", "Our Menu", "Recipes"]

function Navbar() {

    return (
        <div className={styles.navbar}>
            <Image src="/logo.svg" height={36} width={73} alt="The best foodie experience awesome logo" />
            <ul className={styles.leftMenu}>
                {navLinks.map((el, _i)=> (
                   <li key={_i}><a href={`/${el}`}>{el}</a></li>
                ))}
            </ul>

            <div className={styles.rightMenu}>
                <ul className={styles.navRight}>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
