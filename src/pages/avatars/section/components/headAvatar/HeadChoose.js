
import styles from './bodyChoose.module.css'
import ZouthLogo from '../../../../stuff/ZouthLogo'
import OneAvatar from './OneAvatar'


const HeadChoose = () => {
  return (
    <div className={styles.bodyChoose}>
      <ZouthLogo
        color={'af87ce'}
      />
      <div className={styles.choosingArea}>
        <p>Choose your World</p>
          <div className={styles.bodyContainer}>
            <OneAvatar
              image ={aot}
              text={'Attack On Titans'}
            />
            <OneAvatar
              image ={op}
              text={'One Piece'}
            />
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#af87ce" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
  )
}

export default HeadChoose;