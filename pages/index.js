import React, {Fragment, useState, useRef, useCallback} from 'react'

import { useInView } from 'react-intersection-observer';

//Pages Component
import Home from '../components/Home';
import Community from '../components/Community';
import Location from '../components/Location';
import Menu from '../components/Menu';
import SideNavigation from '../components/sideNavigation';

function index(props) {
    const [pageIndex ,setPageIndex] = useState(null);
    const [isInView, setIsInView] = useState(false);

    const _components = 
    [
    <Home key="home"/>,
    <Community key="community" reviewsData={props.reviews} isInView={isInView}/>,
    <Location />,
    <Menu key="menu"/>
    ];
        
    const ComponentTracker = (props) => {
      const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });
      console.log(props.component)
      return (
          <section ref={ref}>
              {props.component}
          </section>
      )
    };
 
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