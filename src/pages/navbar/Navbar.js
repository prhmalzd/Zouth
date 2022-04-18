import React, { useState } from "react";
import { useSelector } from "react-redux";
import ZouthnavLogo from "./navbarStuff/ZouthnavLogo";
import Leftnav from "./navbarComponents/Leftnav";
import Rightnav from "./navbarComponents/Rightnav";
import MobileNav from "./mobileNav/MobileNav";
import styles from "./navbar.module.css";
import ExitCart from "./navbarComponents/ExitCart";
import AddingPost from "./navbarComponents/AddingPost";

const Navbar = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  const [showExitCart, setShowExitCart] = useState(false);
  const [showCartValid, setshowCartValid] = useState(false);

  const onExitHandler = () => {
    setShowExitCart(true);
  };
  const onHideExitCart = () => {
    setShowExitCart(false);
  };
  const onShowAddPost = () => {
    setshowCartValid(true);
  };
  const HidingCartHandler = () => {
    setshowCartValid(false);
  };
  return (
    <div className={styles.navbar} style={{ backgroundColor: colorTheme }}>
      <Leftnav onExitHandler={onExitHandler} />
      <ZouthnavLogo mobileNav={false} />
      <Rightnav onShowAddPost={onShowAddPost} />
      {showExitCart && <ExitCart onHideExitCart={onHideExitCart} />}
      {showCartValid && <AddingPost onHideAddPost={HidingCartHandler} />}
      <MobileNav onShowAddPost={onShowAddPost} />
    </div>
  );
};

export default Navbar;
