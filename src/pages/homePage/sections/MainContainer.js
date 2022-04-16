import React from "react";
import LogoHolder from "../components/MainContainer/LogoHolder";

import SetupContainer from "../components/MainContainer/SetupContainer";
import styles from "./mainContainer.module.css";

const MainContainer = (props) => {
  return (
    <div className={styles.mainContainer}>
      <LogoHolder />
      <SetupContainer />
    </div>
  );
};

export default MainContainer;
