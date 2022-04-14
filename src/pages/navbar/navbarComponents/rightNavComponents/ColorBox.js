import React from "react";
import { useDispatch } from "react-redux";
import { colorchangeActions } from "../../../../store/colorChange";
import styles from "./colorBox.module.css";
import { colors } from "./colorList";

const ColorBox = (props) => {
  const dispatch = useDispatch();

  const changeColorHandler = (event) => {
    const id = event.target.id;
    switch (id) {
      case "color1":
        dispatch(colorchangeActions.yellow());
        break;
      case "color2":
        dispatch(colorchangeActions.green());
        break;
      case "color3":
        dispatch(colorchangeActions.red());
        break;
      case "color4":
        dispatch(colorchangeActions.purple());
        break;
      case "color5":
        dispatch(colorchangeActions.blue());
        break;
    }
    props.onBoxShow();
  };
  return (
    <div className={styles.colorChangeBox}>
      {colors.map((color, i) => {
        return (
          <span
            key={i}
            id={color.id}
            className={styles.colorChange}
            style={{ backgroundColor: color.bg }}
            onClick={changeColorHandler}
          ></span>
        );
      })}
    </div>
  );
};

export default ColorBox;
