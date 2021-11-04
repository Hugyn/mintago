import React from 'react'
import Head from 'next/head'

//Components
import Navbar from '../components/navbar'
import SideNavigation from './sideNavigation';


function Layout({children, pageIndex}) {
    
    return (
        <div>
            <Head>
              <title>THE BEST FOODIE EXPERIENCE</title>
              <meta name="description" content="THE BEST FOODIE EXPERIENCE NOW IN LONDON"/>
            </Head>
            <Navbar/>
            <SideNavigation pageIndex={pageIndex}/>

            {children}
        </div>
    )
}

export default Layout;
