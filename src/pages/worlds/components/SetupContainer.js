import React from "react";
import WorldChoose from "./setupContainerComponents/WorldChoose";
import styles from './setupContainer.module.css'

const SetupContainer = () => {
  return (
    <div className={styles.setupContainer}>
      <WorldChoose/>
    </div>
  )
}

export default SetupContainer;