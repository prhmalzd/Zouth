import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import classes from "./earChoose.module.css";
import styles from "../avatarChoose.module.css";
import OneEar from "./OneEar";
import ear1 from "./images/1.png";
import ear2 from "./images/2.png";
import ear3 from "./images/3.png";
import ear4 from "./images/4.png";
import ear5 from "./images/5.png";

const EarChoose = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.earCatching({ srcEar: src, idEar: id, altEar: alt })
    );
  };
  const onChangePageHandler = () => {
    history.push("/signup/avatars/eyebrow-choose");
  };

  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's ear</p>
      <div className={classes.earContainer}>
        <OneEar
          onClickImageHandler={onClickImageHandler}
          id={"ear1"}
          image={ear1}
        />
        <OneEar
          onClickImageHandler={onClickImageHandler}
          id={"ear2"}
          image={ear2}
        />
        <OneEar
          onClickImageHandler={onClickImageHandler}
          id={"ear3"}
          image={ear3}
        />
        <OneEar
          onClickImageHandler={onClickImageHandler}
          id={"ear4"}
          image={ear4}
        />
        <OneEar
          onClickImageHandler={onClickImageHandler}
          id={"ear5"}
          image={ear5}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars/head-choose"}>
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

export default EarChoose;
