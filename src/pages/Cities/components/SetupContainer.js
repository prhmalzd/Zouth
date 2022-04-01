import React from "react";
import CityChoose from "./setupContainerComponents/CityChoose";
import styles from './setupContainer.module.css'

const SetupContainer = () => {
  return (
    <div className={styles.setupContainer}>
      <CityChoose/>
    </div>
  )
}

export default SetupContainer;