import React, {useState, useEffect, Fragment} from 'react'
// styles
import styles from "../styles/Community.module.css"

import { motion } from "framer-motion"

// components
import Container from '../components/container';
import ReviewCard from '../components/reviewCard'; 

function Community(props) {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setLoading(true)

        fetch("api/reviews")
        .then(async res => {
            if(res.status == 200){
                const data = await res.json();
                setReviews(()=> data.default)
                setLoading(false)
            } else {
                throw new Error('error fetching data')
            }
        })
        .catch((error)=> {
            console.log(error)
        })
        
    },[])

   
   
    props.isInView ? console.log("inView") : null
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

                <motion.div className={styles.reviewsContainer}>
                    { reviews && reviews.map((review)=> (
                        <ReviewCard 
                            startAnimation={props.isInView}
                            className={styles.reviewCard}
                            key={review.id}
                            id={review.id}
                            image="/images/Image_52.png" 
                            title={review.title}
                            cardContent={review.content}
                            commentsCount={review.commentsCount}
                            likesCount={parseInt(review.likesCount)}
                            detailCrosses="large"
                            detailStripes="true"
                        />
                    ))}
                    
                </motion.div>
            </Container>
        </Fragment>
    )
}

export default Community;
