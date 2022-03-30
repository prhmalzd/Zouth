import React from "react";
import styles from './signup.module.css'
import InfoContaiener from './section/InfoContainer'
import MainContainer from './section/MainContainer'

const Signup = () => {
  return (
    <div className={styles.main}>
      <MainContainer />
      <InfoContaiener />
    </div>
  )
}

export default Signup;