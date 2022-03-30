import React from "react";
import styles from './atag.module.css'
const Atag = (props) => {
  return (
        <a className={styles.atag} href="#">{props.link}</a>
  )
}


export default Atag;