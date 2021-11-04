import React from 'react'

//styles
import styles from "./SideNavigation.module.css"


const sections = [1,2,3,4]

function SideNavigation(props) {
    return(
        <div className={styles.sideNavigationContainer}>
            <span className={styles.pageIndexNumber}>{props.pageIndex}</span>
            {sections.map((el)=> (
                <span key={el} className={styles.sideNavigationSlot}></span>
            ))}
        </div>
    )
}


export default SideNavigation;