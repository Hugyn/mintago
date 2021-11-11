import React, { Fragment, useState, useEffect } from 'react'

import Home from './Home'
import Community from './Community'
import Menu from './Menu'
import SideNavigation from './sideNavigation'
import { useInView, InView } from 'react-intersection-observer';



function Index(props) {
    console.log(props.communityReviews)
    const [state, setState] = useState(null)
    const [animation, setAnimation] = useState(false)
    const _components = [<Home key="home"/>, <Community reviewsData={props.communityReviews} animate={true} key="community"/>, <Menu key="menu"/>]
  
      return (
        <Fragment>
        <SideNavigation sectionCount={_components.length} pageIndex={state+1}/>
        {_components.map((component, _i)=> {
          return(
            <InView onChange={(inView, entry)=> inView && setState(_i)} key={_i} id={_i}>
              {component}
            </InView>
          )
        })}
        </Fragment>
      )
}

export default Index