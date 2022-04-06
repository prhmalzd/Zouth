import React from "react";
import styles from './oneEye.module.css'

const OneEye = (props) => {
  return (
    <div className={styles.eye}>
        <img className={styles.eyePNG} src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="eye"/>
    </div>
  )
}

export default OneEye;