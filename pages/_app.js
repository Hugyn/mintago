import React, {Component, useRef, useState} from 'react'
import '../styles/globals.css';

//Layout Component
import Layout from '../components/Layout';
import Home from '../components/Home';
import Community from '../components/Community';
import Menu from '../components/Menu';


function MyApp({Component, pageProps}) { 
  
  return (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp;
