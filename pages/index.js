import React, { Fragment } from 'react'
import { InView } from 'react-intersection-observer';

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'


function index(props) {
  const _components = [<Home/>, <Community />, <Menu />]
    return (
        <Fragment>
          <InView>
            {({inView, ref, entry})=> {
              return (
                _components.map((component, _i)=> {
                  return(
                   <section ref={ref} key={_i}>
                     {component}
                   </section> 
                  )
                })
              )
            }}
          
          </InView>
        </Fragment>
    )
}

export default index;

// export async function getServerSideProps(){
//   const response = await fetch("http://localhost:3000/api/reviews");
//   const reviewsData = await response.json();
//   return {
//     props: {
//       reviews:reviewsData.default
//     }
//   }
// } 