import React from "react";
import styles from './cities.module.css'
import InfoContaiener from '../worlds/section/InfoContainer'
import MainContainer from './section/MainContainer'

const Cities = () => {
  return (
    <div className={styles.main}>
      <MainContainer />
      <InfoContaiener />
    </div>
  )
}

export default Cities;