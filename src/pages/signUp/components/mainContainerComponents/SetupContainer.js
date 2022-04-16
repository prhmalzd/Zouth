import React from "react";
import { useSelector } from "react-redux";
import SignUpContainer from "./setupContainerComponents/SignUpContainer";
import AdditionalContainer from "../../../stuff/AdditionalContainer";
import styles from "./setupContainer.module.css";

const SetupContainer = () => {
  const showtnr = useSelector((state) => state.tnr.tnrpage);

  return (
    <div className={styles.setupContainer}>
      <SignUpContainer />
      {!showtnr && (
        <AdditionalContainer
          text={"You already have an account?"}
          link={" Log In"}
          width={"400px"}
          path={"/homepage"}
        />
      )}
    </div>
  );
};

export default SetupContainer;
