import React from "react";
import styles from './homePage.module.css'

import MainContainer from './sections/MainContainer'
import InfoContaiener from './sections/InfoContainer'

const HomePage = () => {
  return (
    <div className={styles.main}>
      <MainContainer />
      <InfoContaiener />
    </div>
  )
}

export default HomePage;