import React, { Fragment,useState, useEffect } from 'react'

import Home from '../components/Home'
import Community from '../components/Community'
import Menu from '../components/Menu'
import SideNavigation from '../components/sideNavigation'
import { useInView, InView } from 'react-intersection-observer';

const Component = ({children, id}) => {
  const [test, setTest] = useState("")
  const { ref, inView, entry } = useInView({
    threshold: 0.55,
  });
  entry && entry.isIntersecting ? console.log(id) :null
  return(
    <section id={id} ref={ref}>
      {children}
    </section> 
)
};

function index(props) {
  console.log(props.reviews)
  const [state, setState] = useState(null)
  const [animation, setAnimation] = useState(false)
  const _components = [<Home key="home"/>, <Community reviewsData={props.reviews} animate={true} key="community"/>, <Menu key="menu"/>]

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