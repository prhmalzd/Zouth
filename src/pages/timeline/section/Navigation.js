import React from "react";
import { useSelector } from "react-redux";
import styles from "./navigation.module.css";

const Navigation = (props) => {
  const coloronHover = useSelector((state) => state.cCh.coloronHover);
  return (
    <div className={`${styles.navigation} ${styles[coloronHover]}`}>
      <p>World</p>
      <p>City</p>
      <p>Top</p>
    </div>
  );
};

export default Navigation;
