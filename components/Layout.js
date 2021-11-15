import React, { Fragment } from 'react'
import Head from 'next/head'

//Components
import Navbar from '../components/navbar'


function Layout({children, pageIndex}) {

    return (
        <Fragment>
            <Head>
              <title>THE BEST FOODIE EXPERIENCE</title>
              <meta name="description" content="THE BEST FOODIE EXPERIENCE NOW IN LONDON"/>
              <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
              <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <Navbar/>
             {children}
        </Fragment>
    )
}

export default Layout;
