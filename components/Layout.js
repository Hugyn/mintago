import React, { Fragment } from 'react'
import Head from 'next/head'

//Components
import Navbar from '../components/navbar'
import Footer from './Footer'



function Layout({children, pageIndex}) {

    return (
        <Fragment>
            <Head>
              <title>THE BEST FOODIE EXPERIENCE</title>
              <meta name="description" content="THE BEST FOODIE EXPERIENCE NOW IN LONDON"/>
            </Head>
            <Navbar/>
             {children}
             <Footer/>
        </Fragment>
    )
}

export default Layout;
