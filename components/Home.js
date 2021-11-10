import Image from 'next/image'
import styles from '../styles/Home.module.css';

import { useInView } from 'react-intersection-observer';

 function Home(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.65,
  });
  return (
    <div ref={ref} className={styles.home}>
        <div className={styles.logoStamp}>
          <Image src='/stamp.svg' width={186} height={186}/>
        </div>
        <div className={styles.homeHero}>
          <h1>The best foodie<br/><span>experience</span></h1>
          <h3>now in London</h3>
        </div>
    </div>
  )
}
export default Home;