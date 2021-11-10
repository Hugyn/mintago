import React, {Fragment, useState, useRef, useCallback} from 'react'

import { useInView } from 'react-intersection-observer';
 
 const ComponentTracker = (props) => {
  
    const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });
    return (
        <section ref={ref}>
            {props.component}
        </section>
    )
};
