import React, {useState, useEffect, Fragment} from 'react'
// styles
import styles from "../styles/Community.module.css"

import { motion, useAnimation } from "framer-motion"

// components
import Container from './container';
import ReviewCard from './reviewCard'; 

export default function Community(props) {
    const [reviews, setReviews] = useState(null);
    const control = useAnimation();


    useEffect(()=> {
       setReviews(()=> props.reviewsData)
    },[])

    
    const myVariant = {
        hidden: {
            opacity:0,
             y: 500
        },
        visible:{
            opacity: 1,
            y:0
        },
    }
    
    // Start animation when component is in viewport
    props.animate && control.start({
        y:0,
        opacity: 1
    })

    return (
        <Fragment>
            <Container>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>MEET OUR<br/><span className={styles.community}>COMMUNITY</span></h1>
                        <p className={styles.knowMore}>KNOW MORE</p>
                        <p className={styles.titleDescription}>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
                    </div>
                </div>

                <div className={styles.reviewsContainer}>
                   
                    { 
                        reviews && reviews.map((review, i)=> (
                            <motion.div className={styles.reviewCard}
                                key={review.id}
                                variants={myVariant}
                                initial='hidden'
                                animate={control}
                                transition={{delay:i * 0.3, duration:1.5, stiffness:300}}
                            >
                                <ReviewCard 
                                    startAnimation={props.isInView}
                                    id={review.id}
                                    image="/images/Image_52.png" 
                                    title={review.title}
                                    cardContent={review.content}
                                    commentsCount={review.commentsCount}
                                    likesCount={parseInt(review.likesCount)}
                                    detailCrosses={i == 0 ? "large" : i == 1 ? "small" : null}
                                    detailStripes={i == 0 ? "true" : null}
                                />
                            </motion.div>
                        ))
                    }
                   
                </div>
            </Container>
        </Fragment>
    )
}

