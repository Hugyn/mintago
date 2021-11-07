import React, {Component, useRef, useState} from 'react'
import '../styles/globals.css';

//Layout Component
import Layout from '../components/Layout';


import { InView } from 'react-intersection-observer';

//Pages Component
import Home from './Home';
import Community from './Community';
import Location from './Location';




function MyApp() {
  const [pageIndex ,setPageIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);

  const _components = [<Home/>, <Community isInView={isInView}/>, <Location />] 
  
  return (
    <Layout  pageIndex={pageIndex}>
      {_components.map((Component, _i)=> {
        return(
          <InView key={_i} threshold={0.75}>
            {({inView, ref, entry})=> {
              ///Community section animation
              inView && Component.type.name == "Community" ? setIsInView(true) : null
              
              inView && setPageIndex(_i++)
              return(
                <section id={Component.type.name.toLowerCase()}  ref={ref}>
                  {Component}
                </section>
              )
            }}
          </InView>
      )})} 
    </Layout>
  )
}

export default MyApp;
