import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import classes from "./bodyChoose.module.css";
import styles from "../avatarChoose.module.css";
import OneBody from "./OneBody";
import body1 from "./images/1.png";
import body2 from "./images/2.png";

const BodyChoose = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.bodyCatching({ srcBody: src, idBody: id, altBody: alt })
    );
  };
  const onChangePageHandler = () => {
    history.push("/signup/avatars/head-choose");
  };

  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's body</p>
      <div className={classes.bodyContainer}>
        <OneBody
          onClickImageHandler={onClickImageHandler}
          key={1}
          id={"body1"}
          image={body1}
        />
        <OneBody
          onClickImageHandler={onClickImageHandler}
          key={2}
          id={"body2"}
          image={body2}
        />
      </div>{" "}
      <div className={styles.svgContainer}>
        <Link to={"/signup/cities"}>
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

export default BodyChoose;
