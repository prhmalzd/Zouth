import React from "react";
import { useSelector } from "react-redux";
import styles from "./avatarHolder.module.css";

const AvatarHolder = (props) => {
  const { srcBody, idBody, altBody } = useSelector(
    (state) => state.avatar.body.bodyHolder
  );
  const { srcHead, idHead, altHead } = useSelector(
    (state) => state.avatar.head.headHolder
  );
  const { srcEar, idEar, altEar } = useSelector(
    (state) => state.avatar.ear.earHolder
  );
  const { srcEyeBrow, idEyeBrow, altEyeBrow } = useSelector(
    (state) => state.avatar.eyeBrow.eyeBrowHolder
  );
  const { srcEye, idEye, altEye } = useSelector(
    (state) => state.avatar.eye.eyeHolder
  );
  const { srcLip, idLip, altLip } = useSelector(
    (state) => state.avatar.lip.lipHolder
  );
  const { srcNose, idNose, altNose } = useSelector(
    (state) => state.avatar.nose.noseHolder
  );

  return (
    <div className={styles.avatarHolder}>
      <img src={srcBody} id={idBody} alt={altBody} />
      <img src={srcHead} id={idHead} alt={altHead} />
      <img src={srcEar} id={idEar} alt={altEar} />
      <img src={srcEye} id={idEye} alt={altEye} />
      <img src={srcEyeBrow} id={idEyeBrow} alt={altEyeBrow} />
      <img src={srcLip} id={idLip} alt={altLip} />
      <img src={srcNose} id={idNose} alt={altNose} />
    </div>
  );
};

export default AvatarHolder;
