import React, {useRef} from 'react'
import '../styles/globals.css';

//Layout Component
import Layout from '../components/Layout';


import { InView } from 'react-intersection-observer';

//Pages Component
import Home from './Home';
import Community from './Community';
import Location from './Location';

function MyApp() {
  
  return (
    <Layout>
      <Home/>
      <Community />

      <InView>
        {({inView, ref, entry})=> {
          inView && console.log("on")
          return (
            <section ref={ref}>
              <Location />
              <h1>{`in view ${inView}`}</h1>
            </section>
          )
        }}
      </InView>
    </Layout>
  )
}

export default MyApp;
