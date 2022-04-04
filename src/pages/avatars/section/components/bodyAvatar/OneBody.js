import React from "react";
import styles from './oneBody.module.css'

const OneBody = (props) => {
  return (
    <div className={styles.body}>
        <img className={styles.bodyPNG} src={props.image} alt="world-map"/>
    </div>
  )
}

export default OneBody;