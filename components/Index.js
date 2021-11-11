import React, { Fragment, useState, useEffect } from 'react'

import Home from './Home'
import Community from './Community'
import Menu from './Menu'
import SideNavigation from './sideNavigation'
import { useInView, InView } from 'react-intersection-observer';



function Index(props) {
    const [state, setState] = useState(null)
    const [animation, setAnimation] = useState(false)
    const _components = [<Home key="home"/>, <Community reviewsData={props.communityReviews} animate={state == 1 ? true : false} key="community"/>, <Menu key="menu"/>]
  
      return (
        <Fragment>
        <SideNavigation sectionCount={_components.length} pageIndex={state+1}/>
        {_components.map((component, _i)=> {
          return(
            <InView threshold={0.55} onChange={(inView, entry)=> inView && setState(_i)} key={_i} id={_i}>
              {component}
            </InView>
          )
        })}
        </Fragment>
      )
}

export default Index
