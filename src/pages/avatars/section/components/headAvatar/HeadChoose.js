import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import classes from "./headChoose.module.css";
import styles from "../avatarChoose.module.css";
import OneHead from "./OneHead";
import head1 from "./images/1.png";
import head2 from "./images/2.png";
import head3 from "./images/3.png";
import head4 from "./images/4.png";
import head5 from "./images/5.png";

const HeadChoose = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.headCatching({ srcHead: src, idHead: id, altHead: alt })
    );
  };
  const onChangePageHandler = () => {
    history.push("/signup/avatars/ear-choose");
  };
  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's head</p>
      <div className={classes.headContainer}>
        <OneHead
          onClickImageHandler={onClickImageHandler}
          id={"head1"}
          image={head1}
        />
        <OneHead
          onClickImageHandler={onClickImageHandler}
          id={"head2"}
          image={head2}
        />
        <OneHead
          onClickImageHandler={onClickImageHandler}
          id={"head3"}
          image={head3}
        />
        <OneHead
          onClickImageHandler={onClickImageHandler}
          id={"head4"}
          image={head4}
        />
        <OneHead
          onClickImageHandler={onClickImageHandler}
          id={"head5"}
          image={head5}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars"}>
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

export default HeadChoose;
