import React from "react";
import styles from './zouthLogo.module.css'

const Zouth = (props) => {
  return(
    <p
    style={{color: '#'+ props.color}}
    className={styles.logoName}>
      Zouth
    </p>
  )
}

export default Zouth