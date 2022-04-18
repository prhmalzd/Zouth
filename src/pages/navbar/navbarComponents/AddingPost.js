import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../stuff/modalOverlay/Modal";
import styles from "./addingPost.module.css";
import { addpostActions } from "../../../store/addingPost-redux";

const AddingPost = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  const coloronHover = useSelector((state) => state.cCh.coloronHover);
  const dispatch = useDispatch();

  const textAreaContent = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const [errorHandler, setErrorHandler] = useState(false);

  const onSubmitTextContent = () => {
    const text = textAreaContent.current.value;
    if (!text.trim()) {
      setErrorHandler(true);
      return;
    }
    dispatch(
      addpostActions.addPostHandler({
        name: "Parham",
        logo: "P",
        context: text,
        src: imageUrl,
      })
    );
    props.onHideAddPost();
  };

  const onEnterHandler = (key) => {
    const text = textAreaContent.current.value;
    if (text.trim() && key.code !== "Enter") {
      setErrorHandler(false);
      return;
    }
    if (key.code === "Enter" && text.trim()) {
      dispatch(
        addpostActions.addPostHandler({
          name: "Parham",
          logo: "P",
          context: text,
          src: imageUrl,
        })
      );
      props.onHideAddPost();
    } else {
      setErrorHandler(true);
    }
  };

  const onImageHandler = (image) => {
    const imgUrl = URL.createObjectURL(image.target.files[0]);
    setImageUrl(imgUrl);
  };

  return (
    <Modal onHide={props.onHideAddPost}>
      <p onClick={props.onHideAddPost}>Close</p>
      <div className={`${styles.postArea} ${errorHandler && styles.errorArea}`}>
        <textarea
          type="text"
          name="text"
          placeholder="What's up buddy?"
          className={styles.post}
          ref={textAreaContent}
          onKeyDown={onEnterHandler}
        ></textarea>
        <div className={styles.attachment}>
          <div className={styles.imageHolder}>
            <img src={imageUrl} />
            <input
              type="file"
              name="img"
              accept="image/jpeg"
              onChange={onImageHandler}
            />
          </div>
          <p
            className={styles.areaChooser}
            style={{ backgroundColor: `${colorTheme}` }}
          >
            World
          </p>
          <p
            className={styles.areaChooser}
            style={{ backgroundColor: `${colorTheme}` }}
          >
            City
          </p>
        </div>
      </div>
      {errorHandler && <p className={styles.error}>Pls write something...</p>}
      <button
        className={`${styles.zouthBtn} ${styles[coloronHover]}`}
        onClick={onSubmitTextContent}
        style={{ borderColor: `${colorTheme}` }}
      >
        Zouth!
      </button>
    </Modal>
  );
};

export default AddingPost;
