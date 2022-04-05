import { useState } from 'react'
import styles from './avatarChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import BodyChoose from './bodyAvatar/BodyChoose'
import AvatarHolder from './commonComponents/AvatarHolder'
import ImageProvider from "./commonComponents/ImageProvider"
import HeadChoose from './headAvatar/HeadChoose'


const AvatarChoose = () => {
  const [pageHandler, setPageHandler] = useState(0)

  const pageChangeHandlerFor = () => {
    setPageHandler(pageHandler+1)
  }
  const pageChangeHandlerBack = () => {
    if(pageHandler === 0) {
      return
    }
    setPageHandler(pageHandler-1)
  }

  return (
  <ImageProvider>
    <div className={styles.avatarChoose}>
      <ZouthLogo
        color={'EA1A7F'}
      />
      <div className={styles.mainAvatar}>
        <p>Build your Avatar</p>
        <AvatarHolder/>
      </div>
          {pageHandler === 0 && <BodyChoose/>}
          {pageHandler === 1 && <HeadChoose/>}
      <div className={styles.svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24" onClick={pageChangeHandlerBack}><path className={styles.svg} fill="#EA1A7F" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.forArrow}`} width="24" height="24" viewBox="0 0 24 24" onClick={pageChangeHandlerFor}><path className={styles.svg} fill="#EA1A7F" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
      </div>
    </div>
  </ImageProvider>
  )
}

export default AvatarChoose;