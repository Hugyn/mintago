import React, {Fragment, Profiler, useState} from 'react'

import { InView } from 'react-intersection-observer';

//Pages Component
import Home from '../components/Home';
import Community from '../components/Community';
import Location from '../components/Location';
import Menu from '../components/Menu';
import SideNavigation from '../components/sideNavigation';

function Index(props) {
    const [pageIndex ,setPageIndex] = useState(null);
    const [isInView, setIsInView] = useState(false);

    const _components = 
    [
    <Home/>,
    <Community reviewsData={props.reviews} isInView={isInView}/>,
    // <Location />,
    <Menu/>
    ];
    
    return (
        <Fragment>
            <SideNavigation sectionCount={_components.length} pageIndex={pageIndex}/>
                {_components.map((Component, _i)=> {
                    return(
                      <InView key={_i} threshold={0.75}>
                        {({inView, ref, entry})=> {
                          ///Community section animation
                          inView && Component.type.name == "Community" ? setIsInView(true) : null
                          inView && setPageIndex(_i++)
                          return(
                            <section id={Component.type.name.toLowerCase()}  ref={ref}>
                              {Component}
                            </section>
                          )
                        }}
                      </InView>
                    )
                })}
        </Fragment>
    )
}


export async function getServerSideProps(){
  const response = await fetch("http://localhost:3000/api/reviews");
  const reviewsData = await response.json();
  return {
    props: {
      reviews:reviewsData.default
    }
  }
} 
export default Index;