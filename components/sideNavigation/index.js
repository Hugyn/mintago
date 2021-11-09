import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
//styles
import styles from "./SideNavigation.module.css"





function SideNavigation(props) {
    
    const sideNavRef = useRef()
    const currentSection = props.pageIndex; 
    const sectionCount = props.sectionCount;
    const currentSectionZero = currentSection-1;
    
   


    return(
        <div ref={sideNavRef} className={styles.sideNavigationContainer}>
            <span 
            style={{top:`${30*currentSectionZero}px`}} 
            className={styles.pageIndexNumber}>
                0{currentSection}
            </span>

            {[...Array(sectionCount)].map((el, _i)=> (
                <span 
                key={_i} 
                id={_i}  
                className={styles.sideNavigationSlot}
                >
                    <span className={`${styles.sideNavigationLine} ${_i == currentSectionZero ? styles.active : null}`}></span>
                </span>
            ))}
        </div>
    )

}



export default SideNavigation;