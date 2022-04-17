import React from "react";
import { useSelector } from "react-redux";
import styles from "./avatarHolder.module.css";
import { avatarStorage } from "./avatars-storage";

const randomChoose = (maxnumber, placenumber) => {
  const ranNum = Math.floor(Math.random() * maxnumber) + 1;
  return avatarStorage[placenumber][ranNum];
};

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
  const ranBody = randomChoose(2, 0);
  const ranHead = randomChoose(5, 1);
  const ranEar = randomChoose(5, 2);
  const ranEyeBrow = randomChoose(5, 3);
  const ranEye = randomChoose(6, 4);
  const ranLip = randomChoose(6, 5);
  const ranNose = randomChoose(6, 6);

  return (
    <div className={styles.avatarHolder}>
      <img src={srcBody ? srcBody : ranBody} id={idBody} alt={altBody} />
      <img src={srcHead ? srcHead : ranHead} id={idHead} alt={altHead} />
      <img src={srcEar ? srcEar : ranEar} id={idEar} alt={altEar} />
      <img src={srcEye ? srcEye : ranEye} id={idEye} alt={altEye} />
      <img
        src={srcEyeBrow ? srcEyeBrow : ranEyeBrow}
        id={idEyeBrow}
        alt={altEyeBrow}
      />
      <img src={srcLip ? srcLip : ranLip} id={idLip} alt={altLip} />
      <img src={srcNose ? srcNose : ranNose} id={idNose} alt={altNose} />
    </div>
  );
};

export default AvatarHolder;
