import React from "react";
import styles from './informations.module.css'



const Informations = () => {
  return (
    <div className={styles.informations}>
      <div className={styles.info}>
        <p>Population</p>
        <p className={styles.numbers}>+4400</p>
      </div>
      <div className={styles.info}>
        <p>Cities</p>
        <p className={styles.numbers}>+12</p>
      </div>
      <div className={styles.info}>
        <p>Contreis</p>
        <p className={styles.numbers}>+2</p>
      </div>
    </div>
  )
}


export default Informations;