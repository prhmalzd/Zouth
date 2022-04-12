import React, {useState} from "react";
import LogoHolder from '../components/MainContainer/LogoHolder'

import SetupContainer from '../components/MainContainer/SetupContainer'
import styles from './mainContainer.module.css'


const MainContainer = (props) => {
  const [resetPass, setResetPass] = useState(false)
  const [forgetPassPage , setForgetPassPage] = useState(false)

  const forgetPasswordHandler = () => {
    setForgetPassPage(true)
    props.forgetPasswordHandler()
  }

  const resetPassHandler = () => {
    setResetPass(true)
    setForgetPassPage(false)
  }
  return (
    <div className={styles.mainContainer}>
      <LogoHolder resetPass={resetPass} forgetPassPage={forgetPassPage}/>
      <SetupContainer resetPassHandler={resetPassHandler} forgetPasswordHandler={forgetPasswordHandler}/>
    </div>
  )
}

export  default MainContainer;