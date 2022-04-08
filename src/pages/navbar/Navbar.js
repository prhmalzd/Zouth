import React from "react";
import ZouthnavLogo from './navbarStuff/ZouthnavLogo'
import Leftnav from './navbarComponents/Leftnav'
import Rightnav from './navbarComponents/Rightnav'
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={styles.navbar} style={{backgroundColor: props.colorTheme}}>
      <Leftnav/>
      <ZouthnavLogo/>
      <Rightnav onShowAddPost={props.onShowAddPost} onGetColor={props.onGetColor}/>
    </div>
  )
}

export default Navbar;