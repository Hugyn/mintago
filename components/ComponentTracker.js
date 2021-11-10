import React, {Fragment, useState, useRef, useCallback} from 'react'

import { useInView } from 'react-intersection-observer';
 
function ComponentTracker({children}) {
  
    const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });
    return (
        <section  ref={ref}>
            {children}
        </section>
    )
};

export default ComponentTracker;