import React, { useEffect, useState } from "react";
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
  const [avatar, setAvatar] = useState("");

  const randomChooseAvatar = () => {
    const ranAvatar = {
      body: randomChoose(2, 0),
      head: randomChoose(5, 1),
      ear: randomChoose(5, 2),
      eyeBrow: randomChoose(5, 3),
      eye: randomChoose(6, 4),
      lip: randomChoose(6, 5),
      nose: randomChoose(6, 6),
    };
    return ranAvatar;
  };

  useEffect(() => {
    const ranAvatar = randomChooseAvatar();
    setAvatar(ranAvatar);
  }, [setAvatar]);

  return (
    <div className={styles.avatarHolder}>
      <img src={srcBody ? srcBody : avatar.body} id={idBody} alt={altBody} />
      <img src={srcHead ? srcHead : avatar.head} id={idHead} alt={altHead} />
      <img src={srcEar ? srcEar : avatar.ear} id={idEar} alt={altEar} />
      <img src={srcEye ? srcEye : avatar.eye} id={idEye} alt={altEye} />
      <img
        src={srcEyeBrow ? srcEyeBrow : avatar.eyeBrow}
        id={idEyeBrow}
        alt={altEyeBrow}
      />
      <img src={srcLip ? srcLip : avatar.lip} id={idLip} alt={altLip} />
      <img src={srcNose ? srcNose : avatar.nose} id={idNose} alt={altNose} />
    </div>
  );
};

export default AvatarHolder;
