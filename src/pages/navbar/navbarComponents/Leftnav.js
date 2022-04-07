import React from "react";
import ExitLogo from '../navbarStuff/ExitLogo'
import Searchbar from '../navbarStuff/Serachbar'
import styles from './leftNav.module.css'

const Leftnav = () => {
  return (
    <div className={styles.leftNav}>
      <ExitLogo/>
      <Searchbar/>
    </div>
  )
}

export default Leftnav;