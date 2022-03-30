import React from "react";
import styles from './additionalContainer.module.css'
import Atag from './Atag'
const AdditionalContainer = (props) => {
  return (
    <div className={styles.additionalContainer} style={{width: props.width || '350px'}}>
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