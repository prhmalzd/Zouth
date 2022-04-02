
import styles from './cityChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import AllCities from './AllCities'

const CityChoose = () => {
  return (
    <div className={styles.cityChoose}>
      <ZouthLogo
        color={'a8f387'}
      />
      <div className={styles.choosingArea}>
        <p>Choose your City</p>
          <div className={styles.cityContainer}>
            <svg id="arrowRight" className={`${styles.svg} ${styles.swapArrow1}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#c7c7c7" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
            <AllCities/>
            <svg id="arrowRight" className={`${styles.svg} ${styles.swapArrow2}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#a8f387" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#a8f387" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
  )
}

export default CityChoose;