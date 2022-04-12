import React, {useState} from "react";
import styles from './homePage.module.css'

import MainContainer from './sections/MainContainer'
import InfoContaiener from './sections/InfoContainer'

const HomePage = () => {
const [forgrtPass , setForgetPass] = useState(false)
const forgetPasswordHandler = () => {
  setForgetPass(true)
}
  return (
    <div className={styles.main}>
      <MainContainer forgetPasswordHandler={forgetPasswordHandler}/>
      {!forgrtPass && <InfoContaiener />}
    </div>
  )
}

export default HomePage;