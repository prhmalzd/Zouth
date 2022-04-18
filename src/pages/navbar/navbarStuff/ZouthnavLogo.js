import React from "react";
import styles from "./zouthnavLogo.module.css";

const ZouthnavLogo = (props) => {
  return (
    <div className={`${props.mobileNav ? styles.mobileZouth : styles.zouth}`}>
      Zouth
    </div>
  );
};

export default ZouthnavLogo;
