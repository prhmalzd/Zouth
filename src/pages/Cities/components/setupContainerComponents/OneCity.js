import React from "react";
import styles from './oneCity.module.css'
import Button from "../../../stuff/Button";

const OneCity = (props) => {
  return (
    <div className={styles.city}>
        <img className={styles.cityPNG} src={props.image} alt="city-map"/>
        <a href="">
          <Button
            checkedBtn={true}
            bg={'a8f387'}
            name={'button'}
            type={'button'}
            value={props.text}
            width={'100px'}
          />
        </a>
    </div>
  )
}

export default OneCity