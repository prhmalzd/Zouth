import styles from "./icon.module.css";

const Minus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.svg} ${styles.mobileMinus}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={props.onHideMenu}
    >
      <path
        fill="#fff"
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"
      />
    </svg>
  );
};

export default Minus;
