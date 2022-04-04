import React from "react";
import AvatarChoose from "./AvatarChoose";
import styles from './setupContainer.module.css'

const SetupContainer = () => {
  return (
    <div className={styles.setupContainer}>
      <AvatarChoose/>
    </div>
  )
}

export default SetupContainer;