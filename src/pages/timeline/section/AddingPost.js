import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modalOverlay/Modal";
import styles from "./addingPost.module.css";

const AddingPost = (props) => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);
  const coloronHover = useSelector((state) => state.cCh.coloronHover);

  const textAreaContent = useRef();
  const [imageUrl, setImageUrl] = useState("");

  const onSubmitTextContent = () => {
    const text = textAreaContent.current.value;
    props.onSubmitHandler(text, imageUrl);
  };

  const onEnterHandler = (key) => {
    if (key.code === "Enter") {
      const text = textAreaContent.current.value;
      props.onSubmitHandler(text, imageUrl);
    }
  };

  const onImageHandler = (image) => {
    const imgUrl = URL.createObjectURL(image.target.files[0]);
    setImageUrl(imgUrl);
  };
  return (
    <Modal onHideAddPost={props.onHideAddPost}>
      <p onClick={props.onHideAddPost}>Close</p>
      <div className={styles.postArea}>
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
