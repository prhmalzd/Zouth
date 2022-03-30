import React from "react";
import styles from './additionalContainer.module.css'
import Atag from './Atag'
const AdditionalContainer = (props) => {
  return (
    <div className={styles.additionalContainer}>
      <p>
        {props.text}
        <Atag
        link={props.link}
        />
      </p>
    </div>
  )
}


export default AdditionalContainer;