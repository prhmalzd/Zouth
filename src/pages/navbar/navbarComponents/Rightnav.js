import React, { useState } from "react";
import styles from "./rightNav.module.css";
import Plus from "../navbarStuff/Plus";
import Profile from "../navbarStuff/Profile";
import Colorchange from "../navbarStuff/ColorChange";
import ColorBox from "./rightNavComponents/ColorBox";

const Rightnav = (props) => {
  const [showColorBox, setShowColorBox] = useState(false);
  const boxShowingHandler = () => {
    setShowColorBox((showColorBox) => !showColorBox);
  };
  return (
    <div className={styles.rightNav}>
      <Plus onShowAddPost={props.onShowAddPost} />
      <Profile />
      <Colorchange onBoxShow={boxShowingHandler} />
      {showColorBox && (
        <ColorBox showColorBox={showColorBox} onBoxShow={boxShowingHandler} />
      )}
    </div>
  );
};

export default Rightnav;
