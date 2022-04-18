import React from "react";
import Navigation from "./Navigation";
import ContentContainer from "./ContentContainer";
import styles from "./mainContainer.module.css";

const MainContainer = (props) => {
  return (
    <div className={styles.mainContainer}>
      <ContentContainer />
      <Navigation />
    </div>
  );
};

export default MainContainer;
