import React from "react";
import styles from './oneEar.module.css'

const OneEar = (props) => {
  return (
    <div className={styles.ear}>
        <img className={styles.earPNG} src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="ear"/>
    </div>
  )
}

export default OneEar;