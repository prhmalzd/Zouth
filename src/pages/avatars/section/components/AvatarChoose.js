
import styles from './avatarChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import BodyChoose from './bodyAvatar/BodyChoose'


const AvatarChoose = () => {
  return (
    <div className={styles.avatarChoose}>
      <ZouthLogo
        color={'EA1A7F'}
      />
      <div className={styles.mainAvatar}>
        <p>Build your Avatar</p>
        <div className={styles.avatarHolder}></div>
      </div>
      <div className={styles.choosingArea}>
        <p>Choose your Avatar's body</p>
          <BodyChoose />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24"><path className={styles.svg} fill="#EA1A7F" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
  )
}

export default AvatarChoose;