import React from "react";
import { useSelector } from "react-redux";
import styles from "./zouthArea.module.css";
import ZouthContent from "./zouthareaComponents/ZouthContent";
import ProfileInfo from "./zouthareaComponents/ProfileInfo";

const ZouthArea = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  return (
    <div className={styles.zouthArea} style={{ borderBottomColor: colorTheme }}>
      <ProfileInfo name={props.name} logo={props.logo} />
      <ZouthContent context={props.context} src={props.src} />
    </div>
  );
};

export default ZouthArea;
