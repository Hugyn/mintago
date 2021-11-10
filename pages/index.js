import React, { Fragment } from 'react'


import ComponentTracker from '../components/ComponentTracker'

function index(props) {
    return (
        <Fragment>
          <ComponentTracker component={<Home/>}/>
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