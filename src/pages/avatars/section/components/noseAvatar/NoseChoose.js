import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { avatarActions } from "../../../../../store/avatar-redux";
import styles from "../avatarChoose.module.css";
import classes from "./noseChoose.module.css";
import OneNose from "./OneNose";
import Button from "../../../../stuff/Button";
import nose1 from "./images/1.png";
import nose2 from "./images/2.png";
import nose3 from "./images/3.png";
import nose4 from "./images/4.png";
import nose5 from "./images/5.png";
import nose6 from "./images/6.png";

const NoseChoose = (props) => {
  const history = useHistory();
  const valid = useSelector((state) => state.avatar.nose.noseCheck);
  const [chooseMessage, setChooseMessage] = useState(false);
  const dispatch = useDispatch();

  const onClickImageHandler = (event) => {
    event.preventDefault();
    const src = event.target.src;
    const id = event.target.id;
    const alt = event.target.alt;
    dispatch(
      avatarActions.noseCatching({ srcNose: src, idNose: id, altNose: alt })
    );
  };
  const onChangePageHandler = () => {
    if (valid) history.push("/timeline");
    else setChooseMessage(true);
  };
  return (
    <div className={classes.choosingArea}>
      <p>Choose your Avatar's Nose</p>
      <div className={classes.noseContainer}>
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose1"}
          image={nose1}
        />
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose2"}
          image={nose2}
        />
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose3"}
          image={nose3}
        />
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose4"}
          image={nose4}
        />
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose5"}
          image={nose5}
        />
        <OneNose
          onClickImageHandler={onClickImageHandler}
          id={"nose6"}
          image={nose6}
        />
      </div>
      <div className={styles.svgContainer}>
        <Link to={"/signup/avatars/lip-choose"}>
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
        <Button
          name={"done"}
          value={"Done!"}
          type={"submit"}
          width={"100px"}
          bg={"EA1A7F"}
          checkedBtn={valid && true}
          onClick={onChangePageHandler}
        />
      </div>
    </div>
  );
};

export default NoseChoose;
