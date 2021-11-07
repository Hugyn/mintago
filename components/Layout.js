import React, { useEffect, useState } from 'react'
import Head from 'next/head'

//Components
import Navbar from '../components/navbar'
import SideNavigation from './sideNavigation';


function Layout({children, pageIndex}) {
    const [sectionCount, setSectionCount] = useState(null)

    useEffect(()=> {
        setSectionCount(()=> Object.keys(children).length)
    },[])
    
    return (
        <div>
            <Head>
              <title>THE BEST FOODIE EXPERIENCE</title>
              <meta name="description" content="THE BEST FOODIE EXPERIENCE NOW IN LONDON"/>
            </Head>
            <Navbar/>
            <SideNavigation sectionCount={sectionCount} pageIndex={pageIndex}/>
            
            {children}

        </div>
    )
}

export default Layout;
