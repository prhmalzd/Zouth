import React from "react";
import styles from './contentContainer.module.css'
import ZouthArea from "./components/ZouthArea";

const ContentContainer = () => {
 return (
    <div className={styles.contentContainer}>
      <ZouthArea/>
    </div>
 )
}

export default ContentContainer