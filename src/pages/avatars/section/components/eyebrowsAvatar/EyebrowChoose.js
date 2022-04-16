import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import classes from "./eyebrowChoose.module.css";
import styles from "../avatarChoose.module.css";
import OneEyeBrow from "./OneEyebrow";
import eyeBrow1 from "./images/1.png";
import eyeBrow2 from "./images/2.png";
import eyeBrow3 from "./images/3.png";
import eyeBrow4 from "./images/4.png";
import eyeBrow5 from "./images/5.png";

const EyeBrowChoose = (props) => {
  const history = useHistory();
  const valid = useSelector((state) => state.avatar.eyeBrow.eyeBrowCheck);
  const [chooseMessage, setChooseMessage] = useState(false);
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.eyeBrowCatching({
        srcEyeBrow: src,
        idEyeBrow: id,
        altEyeBrow: alt,
      })
    );
  };
  const onChangePageHandler = () => {
    if (valid) history.push("/signup/avatars/eye-choose");
    else setChooseMessage(true);
  };
  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's eyebrow</p>
      <div className={classes.eyeBrowContainer}>
        <OneEyeBrow
          onClickImageHandler={onClickImageHandler}
          id={"eyeBrow1"}
          image={eyeBrow1}
        />
        <OneEyeBrow
          onClickImageHandler={onClickImageHandler}
          id={"eyeBrow2"}
          image={eyeBrow2}
        />
        <OneEyeBrow
          onClickImageHandler={onClickImageHandler}
          id={"eyeBrow3"}
          image={eyeBrow3}
        />
        <OneEyeBrow
          onClickImageHandler={onClickImageHandler}
          id={"eyeBrow4"}
          image={eyeBrow4}
        />
        <OneEyeBrow
          onClickImageHandler={onClickImageHandler}
          id={"eyeBrow5"}
          image={eyeBrow5}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars/ear-choose"}>
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
        {chooseMessage && <p className={styles.warn}>Please Choose!</p>}
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

export default EyeBrowChoose;
