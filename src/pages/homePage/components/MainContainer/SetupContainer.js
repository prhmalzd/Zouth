import React, {useState} from "react";
import LoginContainer from './setupContainerComponents/LoginContainer'
import AdditionalContainer from '../../../stuff/AdditionalContainer'

import styles from './setupContainer.module.css'

const SetupContainer = (props) => {
  const [forgetPass, setForgetPass] = useState(false)
  
  const forgetPasswordHandler = () => {
    setForgetPass(true)
    props.forgetPasswordHandler()
  }
  const resetPasswordSubmitHandler = () => {
    props.resetPassHandler()
  }


  const loginAdditionalConteiner = (
    <AdditionalContainer
      text={"Don't you have any account yet?"}
      link={' Sign Up'}
    />
  )
  const forgetpassAdditionalConteiner = (
    <AdditionalContainer
      text={"Did you remember your Password? Back to"}
      link={' Sign In'}
    />
  )

  return (
    <div className={styles.setupContainer}>
      <LoginContainer forgetPasswordHandler={forgetPasswordHandler} forgetResetSubmitHandler={resetPasswordSubmitHandler}/>
      {!forgetPass && loginAdditionalConteiner}
      {forgetPass && forgetpassAdditionalConteiner}
    </div>
  )
}

export default SetupContainer;