import React from "react";
import LoginContainer from './setupContainerComponents/LoginContainer'
import AdditionalContainer from '../../../stuff/AdditionalContainer'

import styles from './setupContainer.module.css'

const SetupContainer = () => {
  return (
    <div className={styles.setupContainer}>
      <LoginContainer/>
      <AdditionalContainer
        text={"Don't you have any account yet?"}
        link={' Sign Up'}
      />
    </div>
  )
}

export default SetupContainer;