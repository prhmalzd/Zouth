import React from "react";
import styles from './avatars.module.css'
import InfoContaiener from '../worlds/section/InfoContainer'
import MainContainer from './section/MainContainer'

const Avatars = () => {
  return (
    <div className={styles.main}>
      <MainContainer />
      <InfoContaiener />
    </div>
  )
}

export default Avatars;