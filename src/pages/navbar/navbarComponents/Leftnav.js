import React from "react";
import ExitLogo from "../navbarStuff/ExitLogo";
import Searchbar from "../navbarStuff/Serachbar";
import styles from "./leftNav.module.css";

const Leftnav = (props) => {
  return (
    <div className={styles.leftNav}>
      <ExitLogo onExitHandler={props.onExitHandler} />
      <Searchbar />
    </div>
  );
};

export default Leftnav;
