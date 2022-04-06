import { useState} from 'react'
import styles from './avatarChoose.module.css'
import ZouthLogo from '../../../stuff/ZouthLogo'
import BodyChoose from './bodyAvatar/BodyChoose'
import AvatarHolder from './commonComponents/AvatarHolder'
import ImageProvider from "./commonComponents/ImageProvider"
import HeadChoose from './headAvatar/HeadChoose'
import EarChoose from './earsAvatar/EarChoose'
import EyeBrowChoose from './eyebrowsAvatar/EyebrowChoose'
import EyeChoose from './eyesAvatar/EyeChoose'
import LipChoose from './lipsAvatar/LipChoose'
import NoseChoose from './noseAvatar/NoseChoose'
import Button from '../../../stuff/Button'


const AvatarChoose = () => {
  const [pageHandler, setPageHandler] = useState(0)
  const [doneCreating, setDoneCreating] = useState(false)
  const [eventCatcher, setEventCatcher] = useState('')
  const [notValid, setNotValid] = useState(true)

  const pageChangeHandlerFor = () => {
    if(!eventCatcher && pageHandler === 0) {
      setNotValid(false)
    } else if (!eventCatcher.bodyImages.alt && pageHandler === 1) {
      setNotValid(false)
    } else if (!eventCatcher.headImages.alt && pageHandler === 2) {
      setNotValid(false)
    } else if (!eventCatcher.earImages.alt && pageHandler === 3) {
      setNotValid(false)
    } else if (!eventCatcher.eyeBrowImages.alt && pageHandler === 4) {
      setNotValid(false)
    } else if (!eventCatcher.eyeImages.alt && pageHandler === 5) {
      setNotValid(false)
    } else {
      setNotValid(true)
      setPageHandler(pageHandler+1)
    }
    
  }
  const pageChangeHandlerBack = () => {
    if(pageHandler === 0) {
      return
    }
    setPageHandler(pageHandler-1)
  }
  const onDoneAvatarCreating = (event) => {
    setEventCatcher(event)
    if(pageHandler === 6) {
      if (
        event.bodyImages.alt === 'body'
      && event.earImages.alt === 'ear'
      && event.eyeImages.alt === 'eye'
      && event.eyeBrowImages.alt === 'eyeBrow'
      && event.headImages.alt === 'head'
      && event.lipImages.alt === 'lip'
      ) {
        setDoneCreating(true)
      }
    }
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
      </div >
          {pageHandler === 0 && <BodyChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 1 && <HeadChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 2 && <EarChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 3 && <EyeBrowChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 4 && <EyeChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 5 && <LipChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
          {pageHandler === 6 && <NoseChoose onDoneAvatarCreating={onDoneAvatarCreating}/>}
      <div className={styles.svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.backArrow}`} width="24" height="24" viewBox="0 0 24 24" onClick={pageChangeHandlerBack}><path className={styles.svg} fill="#EA1A7F" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.svg} ${styles.forArrow} ${pageHandler === 6 && styles.done}`} width="24" height="24" viewBox="0 0 24 24" onClick={pageChangeHandlerFor}><path className={styles.svg} fill={pageHandler === 6 ? "#c7c7c7" : "#EA1A7F"} d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
        {pageHandler === 6 && <Button name={"done"} value={"Done!"} type={"submit"} width={"100px"} bg={"EA1A7F"} checkedBtn={doneCreating && true}/>}
      </div>
      {!notValid && <p className={styles.warn}>Please Choose!</p>}
    </div>
  </ImageProvider>
  )
}

export default AvatarChoose;