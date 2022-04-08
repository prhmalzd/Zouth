import React from "react";
import styles from './colorBox.module.css'
import { colors } from "./colorList";


const ColorBox = props => {

  return (
    <div className={styles.colorChangeBox}>
      {
        colors.map((color, i) => {
          return (
            <span
            key={i}
            id={color.id}
            className={styles.colorChange}
            style={{backgroundColor: color.bg}}
            onClick={props.onGetColor}>
            </span>
          );
        })
      }
    </div>
  )
}

export default ColorBox