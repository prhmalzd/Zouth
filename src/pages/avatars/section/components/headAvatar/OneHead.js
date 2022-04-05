import React from "react";
import styles from './oneHead.module.css'

const OneHead = (props) => {
  return (
    <div className={styles.head}>
        <img className={styles.headPNG} src={props.image} onClick={props.onClickImageHandler} id={props.id} alt="head"/>
    </div>
  )
}

export default OneHead;