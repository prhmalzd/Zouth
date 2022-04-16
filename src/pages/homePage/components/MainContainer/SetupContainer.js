import React from "react";
import { useSelector } from "react-redux";
import LoginContainer from "./setupContainerComponents/LoginContainer";
import AdditionalContainer from "../../../stuff/AdditionalContainer";
import styles from "./setupContainer.module.css";

const SetupContainer = (props) => {
  const showFP = useSelector((state) => state.fp.forgetpassPage);

  const loginAdditionalConteiner = (
    <AdditionalContainer
      text={"Don't you have any account yet?"}
      link={" Sign Up"}
      path={"/signup"}
    />
  );
  const forgetpassAdditionalConteiner = (
    <AdditionalContainer
      text={"Did you remember your Password? "}
      link={" Back to Sign In"}
      path={"/homepage"}
    />
  );

  return (
    <div className={styles.setupContainer}>
      <LoginContainer />
      {!showFP && loginAdditionalConteiner}
      {showFP && forgetpassAdditionalConteiner}
    </div>
  );
};

export default SetupContainer;
