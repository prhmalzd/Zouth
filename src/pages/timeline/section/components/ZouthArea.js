import React from "react";
import styles from './zouthArea.module.css'
import ZouthContent from './zouthareaComponents/ZouthContent'
import ProfileInfo from './zouthareaComponents/ProfileInfo'

const ZouthArea = (props) => {
  return (
    <div className={styles.zouthArea} style={{borderBottomColor: props.colorTheme}}>
      <ProfileInfo/>
      <ZouthContent/>
    </div>
  )
}

export default ZouthArea