import React, { useState } from "react";
import { useSelector } from "react-redux";
import ZouthnavLogo from "./navbarStuff/ZouthnavLogo";
import Leftnav from "./navbarComponents/Leftnav";
import Rightnav from "./navbarComponents/Rightnav";
import styles from "./navbar.module.css";
import ExitCart from "./navbarComponents/ExitCart";

const Navbar = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  const [showExitCart, setShowExitCart] = useState(false);
  const onExitHandler = () => {
    setShowExitCart(true);
  };
  const onHideExitCart = () => {
    setShowExitCart(false);
  };
  return (
    <div className={styles.navbar} style={{ backgroundColor: colorTheme }}>
      <Leftnav onExitHandler={onExitHandler} />
      <ZouthnavLogo />
      <Rightnav onShowAddPost={props.onShowAddPost} />
      {showExitCart && <ExitCart onHideExitCart={onHideExitCart} />}
    </div>
  );
};

export default Navbar;
