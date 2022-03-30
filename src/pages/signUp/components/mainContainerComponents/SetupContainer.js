import React from "react";
import SignUpContainer from './setupContainerComponents/SignUpContainer'
import AdditionalContainer from '../../../stuff/AdditionalContainer'

import styles from './setupContainer.module.css'

const SetupContainer = () => {
  return (
    <div className={styles.setupContainer}>
      <SignUpContainer/>
      <AdditionalContainer
        text={"You already have an account?"}
        link={' Log In'}
        width={'400px'}
      />
    </div>
  )
}

export default SetupContainer;