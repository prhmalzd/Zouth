import React from "react";
import styles from './logoHolder.module.css'
import { useSelector } from "react-redux";

const LogoHolder = (props) => {

  const color = useSelector((state) => state.fp.color)
  const changePass = useSelector((state) => state.fp.changepass)

  return (
    <div className={styles.logoHolder}>
      <span className={`${styles.circle} ${styles.red}`} style={{backgroundColor : !color && '#a8a8a8'}}></span>
      <span className={`${styles.circle} ${styles.green}`} style={{backgroundColor : !color && '#a5a5a5'}}></span>
      <span className={`${styles.circle} ${styles.blue}`} style={{backgroundColor : !color && '#c2c2c2'}}></span>     
      <span className={`${styles.circle} ${styles.yellow}`} style={{backgroundColor : !color && '#d1d1d1'}}>
        {!changePass && color && <p>Log In</p>}
        {changePass && color && <p>Email Was Sent</p>}
      </span>
      <span className={`${styles.circle} ${styles.purple}`} style={{backgroundColor : !color && '#7e7e7e'}}></span>
    </div>
  )
}

export default LogoHolder