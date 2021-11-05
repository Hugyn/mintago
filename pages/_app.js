import React, {useRef, useState} from 'react'
import '../styles/globals.css';

//Layout Component
import Layout from '../components/Layout';


import { InView } from 'react-intersection-observer';

//Pages Component
import Home from './Home';
import Community from './Community';
import Location from './Location';


const _components = [<Home/>, <Community />, <Location />] 

function MyApp() {
  const [pageIndex ,setPageIndex] = useState(null)
  
  return (
    <Layout  pageIndex={pageIndex}>
      {_components.map((Component, _i)=> (
          <InView key={_i} threshold={0.75}>
            {({inView, ref, entry})=> {
              inView && setPageIndex(_i++)
              return(
                <section id={Component.type.name.toLowerCase()}  ref={ref}>
                  {Component}
                </section>
              )
            }}
          </InView>
      ))} 
    </Layout>
  )
}

export default MyApp;
