import React from "react";
import styles from './oneLip.module.css'

const OneLip = (props) => {
  return (
    <div className={styles.lip}>
        <img src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="lip"/>
    </div>
  )
}

export default OneLip;