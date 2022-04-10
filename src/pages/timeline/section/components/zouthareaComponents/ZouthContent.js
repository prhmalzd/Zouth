import React from "react";
import styles from './zouthContent.module.css'
import EnterActionContainer from './EnterActionContainer'

const ZouthContent = (props) => {
  return (
    <div className={styles.zouthContent}>
      <p className={styles.zouthText}>{props.context}</p>
      <img src={props.src} />
      <EnterActionContainer/>
    </div>
  )
}

export default ZouthContent