import React, { Fragment } from 'react'

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'

import ComponentTracker from '../components/ComponentTracker'

function index(props) {
  const _components = [<Home/>, <Menu/>, <Community/>]
    return (
        <Fragment>
          {_components.map((component, _i)=> (
            <ComponentTracker key={_i}>
              {component}
            </ComponentTracker>
            )
          )}
          
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