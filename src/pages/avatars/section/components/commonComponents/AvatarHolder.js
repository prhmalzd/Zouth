import React from "react";
import styles from './avatarHolder.module.css'
import { useContext } from "react";
import ImageContext from "./image-context";

const AvatarHolder = (props) => {

const imageCtx = useContext(ImageContext)
const {srcBody, idBody} = imageCtx.bodyImages
const {srcHead, idHead} = imageCtx.headImages

  return (
    <div className={styles.avatarHolder}>
      <img src={srcBody} id={idBody}/>
      <img src={srcHead} id={idHead}/>
    </div>
  )
}

export default AvatarHolder;