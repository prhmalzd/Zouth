import React from "react";
import Modal from '../modalOverlay/Modal'
import styles from './addingPost.module.css'

const AddingPost = (props) => {
  return (
    <Modal onHideAddPost={props.onHideAddPost}>
        <p onClick={props.onHideAddPost}>Close</p>
        <div className={styles.postArea}>
          <textarea type="text" name="text" placeholder="What's up buddy?" className={styles.post}></textarea>
          <div className={styles.attachment}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg>
              <p className={styles.areaChooser}>World</p>
              <p className={styles.areaChooser}>City</p>
          </div>
        </div>
        <button className={styles.zouthBtn}>Zouth!</button>
    </Modal>
  )
}

export default AddingPost