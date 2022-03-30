import React from "react";
import styles from './mainContainer.module.css'
import LogoHolder from '../components/mainContainerComponents/LogoHolder'
import SetupContainer from '../components/mainContainerComponents/SetupContainer'

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <LogoHolder/>
      <SetupContainer/>
    </div>
  )
}

export  default MainContainer;