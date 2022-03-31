import React from "react";
import styles from './oneWorld.module.css'
import Button from "../../../stuff/Button";

const OneWorld = (props) => {
  return (
    <div className={styles.world}>
        <img className={styles.worldPNG} src={props.image} alt="world-map"/>
        <a href="">
          <Button
            checkedBtn={true}
            bg={'af87ce'}
            name={'button'}
            type={'button'}
            value={props.text}
          />
        </a>
    </div>
  )
}

export default OneWorld