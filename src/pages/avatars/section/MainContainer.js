import React from "react";
import styles from './mainContainer.module.css'
import LogoHolder from './components/LogoHolder'
import SetupContainer from './components/SetupContainer'

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <LogoHolder/>
      <SetupContainer/>
    </div>
  )
}

export  default MainContainer;