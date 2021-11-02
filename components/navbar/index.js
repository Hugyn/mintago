import React from 'react'
import Image from 'next/image'
import './Navbar.module.css'

function Navbar() {
    return (
        <div>
            <Image src="/logo.svg" height={36} width={73}/>
        </div>
    )
}

export default Navbar;
