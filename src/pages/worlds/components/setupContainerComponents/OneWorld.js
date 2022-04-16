import React from "react";
import styles from "./oneWorld.module.css";
import Button from "../../../stuff/Button";
import { Link } from "react-router-dom";

const OneWorld = (props) => {
  return (
    <div className={styles.world}>
      <img className={styles.worldPNG} src={props.image} alt="world-map" />
      <Link to={"/signup/cities"}>
        <Button
          checkedBtn={true}
          bg={"af87ce"}
          name={"button"}
          type={"button"}
          value={props.text}
        />
      </Link>
    </div>
  );
};

export default OneWorld;
