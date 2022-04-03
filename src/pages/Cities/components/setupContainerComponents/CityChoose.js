
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
            <AllCities/>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#a8f387" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
  )
}

export default CityChoose;