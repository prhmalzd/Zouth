import React from "react";

import Informations from '../components/infoContainer/Informations'
import Footer from '../../stuff/Footer'

import styles from './infoContainer.module.css'



const InfoContainer = () => {
  return (
    <div className={styles.infoContainer}>
      <Informations/>

      <Footer />
    </div>
  )
}

export default InfoContainer;