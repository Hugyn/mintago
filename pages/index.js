import React, { Fragment,useState, useEffect } from 'react'

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'
import SideNavigation from '../components/sideNavigation'
import { useInView, InView } from 'react-intersection-observer';
import Index from '../components/Index'



function index(props) {
  console.log(props.reviews)
  // const [state, setState] = useState(null)
  // const [animation, setAnimation] = useState(false)
  

    return (
      // <Fragment>
      // <SideNavigation sectionCount={_components.length} pageIndex={state+1}/>
      // {_components.map((component, _i)=> {
      //   return(
      //     <InView onChange={(inView, entry)=> inView && setState(_i)} key={_i} id={_i}>
      //       {component}
      //     </InView>
      //   )
      // })}
      // </Fragment>
      <Index communityReviews={props.reviews}/>
    )
}

export default index;

export async function getServerSideProps(){
  const response = await fetch("http://localhost:3000/api/reviews");
  const reviewsData = await response.json();
  return {
    props: {
      reviews:reviewsData.default
    }
  }
} 