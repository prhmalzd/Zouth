import React from "react";
import styles from './zouthContent.module.css'
import EnterActionContainer from './EnterActionContainer'

const ZouthContent = () => {
  return (
    <div className={styles.zouthContent}>
      <p className={styles.zouthText}>Are Titans good or bad creatures?</p>
      <EnterActionContainer/>
    </div>
  )
}

export default ZouthContent