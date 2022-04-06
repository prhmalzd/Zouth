import React from "react";
import styles from './oneEyeybrow.module.css'

const OneEyeBrow = (props) => {
  return (
    <div className={styles.eyeBrow}>
        <img className={styles.eyeBrowPNG} src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="eyeBrow"/>
    </div>
  )
}

export default OneEyeBrow;