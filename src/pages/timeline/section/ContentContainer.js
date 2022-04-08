import React from "react";
import styles from './contentContainer.module.css'
import ZouthArea from "./components/ZouthArea";

const ContentContainer = (props) => {
 return (
    <div className={styles.contentContainer}>
      <ZouthArea colorTheme={props.colorTheme}/>
    </div>
 )
}

export default ContentContainer