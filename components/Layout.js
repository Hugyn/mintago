import React, { Fragment, useRef, useState } from 'react'
import Head from 'next/head'

//Components
import Navbar from '../components/navbar'
import Footer from './Footer'

import { useInView } from 'react-intersection-observer';
import Home from './Home';
import Community from './Community';
import Location from './Location';
import Menu from './Menu';
import SideNavigation from './sideNavigation';

function Layout({children, pageIndex}) {
  console.log(children);

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
