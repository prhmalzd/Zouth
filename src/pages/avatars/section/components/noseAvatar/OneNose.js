import React from "react";
import styles from './oneNose.module.css'

const OneNose = (props) => {
  return (
    <div className={styles.nose}>
        <img src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="nose"/>
    </div>
  )
}

export default OneNose;