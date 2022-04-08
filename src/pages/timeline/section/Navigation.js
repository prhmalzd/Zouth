import React from "react";
import styles from './navigation.module.css'

const Navigation = (props) => {

return (
  <div className={`${styles.navigation} ${styles[props.colorThemeForHover]}`}>
    <p>World</p>
    <p>City</p>
    <p>Top</p>
  </div>
)
}

export default Navigation