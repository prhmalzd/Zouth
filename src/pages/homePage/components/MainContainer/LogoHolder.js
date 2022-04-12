import React from "react";
import styles from './logoHolder.module.css'


const LogoHolder = (props) => {
  const resetPass = props.resetPass
  const forgetPassPage = props.forgetPassPage
  return (
    <div className={styles.logoHolder}>
      <span className={`${styles.circle} ${styles.red}`} style={{backgroundColor : forgetPassPage && '#a8a8a8'}}></span>
      <span className={`${styles.circle} ${styles.green}`} style={{backgroundColor : forgetPassPage && '#a5a5a5'}}></span>
      <span className={`${styles.circle} ${styles.blue}`} style={{backgroundColor : forgetPassPage && '#c2c2c2'}}></span>     
      <span className={`${styles.circle} ${styles.yellow}`} style={{backgroundColor : forgetPassPage && '#d1d1d1'}}>
        {!resetPass && !forgetPassPage && <p>Log In</p>}
        {resetPass && !forgetPassPage && <p>Email Was Sent</p>}
      </span>
      <span className={`${styles.circle} ${styles.purple}`} style={{backgroundColor : forgetPassPage && '#7e7e7e'}}></span>
    </div>
  )
}

export default LogoHolder