import React from "react";
import styles from "./icon.module.css";

const ExitLogo = (props) => {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={props.onExitHandler}
    >
      <path
        fill="#fff"
        d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"
      />
    </svg>
  );
};

export default ExitLogo;
