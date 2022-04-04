import React from "react";
import styles from './logoHolder.module.css'


const LogoHolder = (props) => {
  return (
    <div className={styles.logoHolder}>
      <span className={`${styles.circle} ${styles.red}`}>
        <p>Avatars</p>
      </span>
      <span className={`${styles.circle} ${styles.green}`}></span>
      <span className={`${styles.circle} ${styles.blue}`}></span>     
      <span className={`${styles.circle} ${styles.yellow}`}></span>
      <span className={`${styles.circle} ${styles.purple}`}></span>
    </div>
  )
}

export default LogoHolder