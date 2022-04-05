import React from "react";
import styles from './oneBody.module.css'

const OneBody = (props) => {
  return (
    <div className={styles.body}>
        <img className={styles.bodyPNG} src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="body"/>
    </div>
  )
}

export default OneBody;