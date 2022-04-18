import React from "react";
import styles from "./icon.module.css";

const Plus = (props) => {
  const toggleMenu = props.toggleMenu;
  const rotatePlus = props.rotatePlus;
  return (
    <svg
      onClick={!toggleMenu ? props.onShowAddPost : props.onHideMenu}
      className={`${styles.svg}`}
      style={{ transform: `rotate(${rotatePlus}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        onClick={props.onShowAddPost}
        fill="#fff"
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
      />
    </svg>
  );
};

export default Plus;
