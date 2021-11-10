import React, { Fragment } from 'react'

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'


function index(props) {
  const _components = [<Home key="home"/>, <Community key="community"/>, <Menu key="menu"/>]
    return (
        
        <Home/>
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