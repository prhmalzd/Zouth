import React from "react";
import styles from './zouthArea.module.css'
import ZouthContent from './zouthareaComponents/ZouthContent'
import ProfileInfo from './zouthareaComponents/ProfileInfo'

const ZouthArea = () => {
  return (
    <div className={styles.zouthArea}>
      <ProfileInfo/>
      <ZouthContent/>
    </div>
  )
}

export default ZouthArea