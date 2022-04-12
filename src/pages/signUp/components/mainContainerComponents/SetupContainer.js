import React, {useState} from "react";
import SignUpContainer from './setupContainerComponents/SignUpContainer'
import AdditionalContainer from '../../../stuff/AdditionalContainer'

import styles from './setupContainer.module.css'

const SetupContainer = () => {
  const [termAndRules , setTernAndRules] = useState(false)
  const termAndRulesHandler = () => {
    setTernAndRules(termAndRules => !termAndRules)
  }

  return (
    <div className={styles.setupContainer}>
      <SignUpContainer termAndRules={termAndRulesHandler}/>
      {!termAndRules && <AdditionalContainer
        text={"You already have an account?"}
        link={' Log In'}
        width={'400px'}
      />}
    </div>
  )
}

export default SetupContainer;