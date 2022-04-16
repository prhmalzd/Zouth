import React from "react";
import styles from "./oneCity.module.css";
import Button from "../../../stuff/Button";
import { Link } from "react-router-dom";

const OneCity = (props) => {
  return (
    <div className={styles.city}>
      <img className={styles.cityPNG} src={props.image} alt="city-map" />
      <Link to={"/signup/avatars"}>
        <Button
          checkedBtn={true}
          bg={"a8f387"}
          name={"button"}
          type={"button"}
          value={props.text}
          width={"100px"}
        />
      </Link>
    </div>
  );
};

export default OneCity;
