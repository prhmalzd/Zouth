import React from "react";
import styles from './rightNav.module.css'
import Plus from '../navbarStuff/Plus'
import Profile from '../navbarStuff/Profile'
import Colorchange from '../navbarStuff/ColorChange'

const Rightnav = () => {
  return (
    <div className={styles.rightNav}>
      <Plus/>
      <Profile/>
      <Colorchange/>
    </div>
  )
}

export default Rightnav;