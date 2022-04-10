import React from "react";
import Navigation from './Navigation';
import ContentContainer from './ContentContainer'
import styles from './mainContainer.module.css'


const MainContainer = (props) => {
  return (
    <div className={styles.mainContainer}>
      <ContentContainer
      colorTheme={props.colorTheme}
      addPostState={props.addPostState}
      />
      <Navigation colorThemeForHover={props.colorThemeForHover}/>
    </div>
  )
}

export default MainContainer