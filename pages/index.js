import React, { Fragment,useState } from 'react'
import absoluteUrl from 'next-absolute-url'
import { InView } from 'react-intersection-observer';

//Components
import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'
import SideNavigation from '../components/sideNavigation'
import Footer from '../components/Footer';




function Index(props) {
  // console.log(props.reviews)
  const [state, setState] = useState(null);
  
  const _components = [
  <Home key="home"/>, 
  <Community reviewsData={props.reviews} animate={state == 1 ? true : false} key="community"/>,
  <Menu key="menu"/>,
  <Footer key="footer"/>
  ]


    return (
      <Fragment>
        <SideNavigation sectionCount={_components.length} pageIndex={state+1}/>
        
        {_components.map((component, _i)=> (
          <InView threshold={0.55} onChange={(inView, entry)=> inView && setState(_i)} key={_i} id={component.key}>
            {component}
          </InView>
        ))}
      </Fragment>
    )
}

export default Index;

export async function getServerSideProps({req}){
  const { origin } = absoluteUrl(req, "localhost:3000")
  const apiURL = `${origin}/api/reviews`

  const response = await fetch(apiURL);
  const reviewsData = await response.json();
  return {
    props: {
      reviews:reviewsData.default,
    }
  }
} 