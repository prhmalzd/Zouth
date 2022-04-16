import React from "react";
import { Link } from "react-router-dom";
import styles from "./atag.module.css";
const Atag = (props) => {
  return (
    <Link className={styles.atag} to={`${props.path}`}>
      {props.link}
    </Link>
  );
};

export default Atag;
