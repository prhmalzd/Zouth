import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import styles from "../avatarChoose.module.css";
import classes from "./lipChoose.module.css";
import OneLip from "./OneLip";
import lip1 from "./images/1.png";
import lip2 from "./images/2.png";
import lip3 from "./images/3.png";
import lip4 from "./images/4.png";
import lip5 from "./images/5.png";
import lip6 from "./images/6.png";

const LipChoose = (props) => {
  const history = useHistory();
  const valid = useSelector((state) => state.avatar.lip.lipCheck);
  const [chooseMessage, setChooseMessage] = useState(false);
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.lipCatching({ srcLip: src, idLip: id, altLip: alt })
    );
  };
  const onChangePageHandler = () => {
    if (valid) history.push("/signup/avatars/nose-choose");
    else setChooseMessage(true);
  };
  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's lip</p>
      <div className={classes.lipContainer}>
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip1"}
          image={lip1}
        />
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip2"}
          image={lip2}
        />
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip3"}
          image={lip3}
        />
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip4"}
          image={lip4}
        />
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip5"}
          image={lip5}
        />
        <OneLip
          onClickImageHandler={onClickImageHandler}
          id={"lip6"}
          image={lip6}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars/eye-choose"}>
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

export default LipChoose;
