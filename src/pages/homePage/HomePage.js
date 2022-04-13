import React from "react";
import { useSelector } from "react-redux";
import styles from './homePage.module.css'

import MainContainer from './sections/MainContainer'
import InfoContaiener from './sections/InfoContainer'

const HomePage = () => {
const showFP = useSelector((state) => state.fp.forgetpassPage)
  return (
    <div className={styles.main}>
      <MainContainer/>
      {!showFP && <InfoContaiener />}
    </div>
  )
}

export default HomePage;