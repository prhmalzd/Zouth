
import styles from './cityChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import OneCity from './OneCity'
import aot1 from '../../../stuff/images/aot1.jpg'
import op1 from '../../../stuff/images/op1.webp'
import op2 from '../../../stuff/images/op2.webp'

const CityChoose = () => {
  return (
    <div className={styles.cityChoose}>
      <ZouthLogo
        color={'a8f387'}
      />
      <div className={styles.choosingArea}>
        <p>Choose your City</p>
          <div className={styles.cityContainer}>
            <svg id="arrowRight" className={`${styles.svg} ${styles.turn1}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#c7c7c7" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
            <OneCity
              image ={aot1}
              text={'Shiganshina'}
            />
            <OneCity
              image ={op1}
              text={'Skypiea'}
            />
            <OneCity
              image ={op2}
              text={'Alabasta'}
            />
            <svg id="arrowRight" className={`${styles.svg} ${styles.turn2}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#a8f387" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
          </div>
      </div>
    </div>
  )
}

export default CityChoose;