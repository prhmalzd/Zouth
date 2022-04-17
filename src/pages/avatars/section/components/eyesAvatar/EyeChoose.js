import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import styles from "../avatarChoose.module.css";
import classes from "./eyeChoose.module.css";
import OneEye from "./OneEye";
import eye1 from "./images/1.png";
import eye2 from "./images/2.png";
import eye3 from "./images/3.png";
import eye4 from "./images/4.png";
import eye5 from "./images/5.png";
import eye6 from "./images/6.png";

const EyeChoose = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.eyeCatching({ srcEye: src, idEye: id, altEye: alt })
    );
  };
  const onChangePageHandler = () => {
    history.push("/signup/avatars/lip-choose");
  };
  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's eye</p>
      <div className={classes.eyeContainer}>
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye1"}
          image={eye1}
        />
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye2"}
          image={eye2}
        />
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye3"}
          image={eye3}
        />
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye4"}
          image={eye4}
        />
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye5"}
          image={eye5}
        />
        <OneEye
          onClickImageHandler={onClickImageHandler}
          id={"eye6"}
          image={eye6}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars/eyebrow-choose"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.svg} ${styles.backArrow}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              className={styles.svg}
              fill="#EA1A7F"
              d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
            />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svg} ${styles.forArrow} `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={onChangePageHandler}
        >
          <path
            className={styles.svg}
            fill={"#EA1A7F"}
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </div>
    </div>
  );
};

export default EyeChoose;
