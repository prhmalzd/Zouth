import React from "react";
import { useSelector } from "react-redux";
import ZouthnavLogo from "./navbarStuff/ZouthnavLogo";
import Leftnav from "./navbarComponents/Leftnav";
import Rightnav from "./navbarComponents/Rightnav";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  return (
    <div className={styles.navbar} style={{ backgroundColor: colorTheme }}>
      <Leftnav />
      <ZouthnavLogo />
      <Rightnav onShowAddPost={props.onShowAddPost} />
    </div>
  );
};

export default Navbar;
