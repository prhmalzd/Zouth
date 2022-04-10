import React from "react";
import styles from './zouthArea.module.css'
import ZouthContent from './zouthareaComponents/ZouthContent'
import ProfileInfo from './zouthareaComponents/ProfileInfo'

const ZouthArea = (props) => {
  return (
    <div className={styles.zouthArea} style={{borderBottomColor: props.colorTheme}}>
      <ProfileInfo name={props.name} logo={props.logo}/>
      <ZouthContent context={props.context} src={props.src}/>
    </div>
  )
}

export default ZouthArea