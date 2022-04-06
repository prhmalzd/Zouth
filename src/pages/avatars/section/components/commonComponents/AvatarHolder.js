import React from "react";
import styles from './avatarHolder.module.css'
import { useContext } from "react";
import ImageContext from "./image-context";

const AvatarHolder = (props) => {

const imageCtx = useContext(ImageContext)
const {srcBody, idBody} = imageCtx.bodyImages
const {srcHead, idHead} = imageCtx.headImages
const {srcEar, idEar} = imageCtx.earImages
const {srcEyeBrow, idEyeBrow} = imageCtx.eyeBrowImages
const {srcEye, idEye} = imageCtx.eyeImages
const {srcLip, idLip} = imageCtx.lipImages
const {srcNose, idNose} = imageCtx.noseImages


  return (
    <div className={styles.avatarHolder}>
      <img src={srcBody} id={idBody}/>
      <img src={srcHead} id={idHead}/>
      <img src={srcEar} id={idEar}/>
      <img src={srcEye} id={idEye}/>
      <img src={srcEyeBrow} id={idEyeBrow}/>
      <img src={srcLip} id={idLip}/>
      <img src={srcNose} id={idNose}/>
    </div>
  )
}

export default AvatarHolder;