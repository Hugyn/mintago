import React from 'react'
import '../styles/globals.css';

//Layout Component
import Layout from '../components/Layout';

function MyApp({Component, pageProps}) { 
  return (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp;
