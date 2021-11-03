import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.homeHero}>
          <h1>The best foodie<br/><span>experience</span></h1>
          <h3>now in London</h3>
        </div>
    </div>
  )
}
