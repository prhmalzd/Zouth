import React from "react";
import styles from './worlds.module.css'
import InfoContaiener from './section/InfoContainer'
import MainContainer from './section/MainContainer'

const worlds = () => {
  return (
    <div className={styles.main}>
      <MainContainer />
      <InfoContaiener />
    </div>
  )
}

export default worlds;