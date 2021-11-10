import React, { Fragment,useState, useEffect } from 'react'

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'
import { InView } from 'react-intersection-observer';

const Component = ({children, id}) => {
  const [test, setTest] = useState("")

  
  return(
  <InView>
    {({ inView, ref, entry }) => {
      entry && entry.isIntersecting ? setTest(id) :null
      
         return(
          <section id={id} ref={ref}>
            {children}
          </section> 
        )
    }}
  </InView>
)
};

function index() {
  
  const _components = [<Home key="home"/>, <Community key="community"/>, <Menu key="menu"/>,<Community key="community"/>]

    return (
      _components.map((component, _i)=> {
        return(
          <Component id={_i}>
            {component}
          </Component>
        )
      })
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