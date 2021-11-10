import React, {useState,useRef, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';


function Location(props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.65,
      });
 
    
    return (
        <div ref={ref} style={{width: "100%", height: "100vh", background:"#FFA"}}>
           Location
        </div>
    )
}

export default Location;
