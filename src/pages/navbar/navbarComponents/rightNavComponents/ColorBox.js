import React from "react";
import styles from './colorBox.module.css'

const ColorBox = props => {
  return (
    <div className={styles.colorChangeBox}>
      <span id="color1" className={styles.colorChange} style={{backgroundColor: "#fec603"}}></span>
      <span id="color2" className={styles.colorChange} style={{backgroundColor: "#a8f387"}}></span>
      <span id="color3" className={styles.colorChange} style={{backgroundColor: "#EA1A7F"}}></span>
      <span id="color4" className={styles.colorChange} style={{backgroundColor: "#af87ce"}}></span>
      <span id="color5" className={styles.colorChange} style={{backgroundColor: "#16d6fa"}}></span>
    </div>
  )
}

export default ColorBox