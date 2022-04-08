import React from "react";
import styles from './colorChange.module.css'

const ColorChange = (props) => {
 return <span id="mainColor" className={styles.colorChange} onClick={props.onBoxShow}></span>
}

export default ColorChange