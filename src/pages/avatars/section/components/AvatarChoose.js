import { Switch, Route } from "react-router-dom";
import styles from "./avatarChoose.module.css";
import ZouthLogo from "../../../stuff/ZouthLogo";
import BodyChoose from "./bodyAvatar/BodyChoose";
import AvatarHolder from "./commonComponents/AvatarHolder";
import HeadChoose from "./headAvatar/HeadChoose";
import EarChoose from "./earsAvatar/EarChoose";
import EyeBrowChoose from "./eyebrowsAvatar/EyebrowChoose";
import EyeChoose from "./eyesAvatar/EyeChoose";
import LipChoose from "./lipsAvatar/LipChoose";
import NoseChoose from "./noseAvatar/NoseChoose";

const AvatarChoose = () => {
  return (
    <div className={styles.avatarChoose}>
      <ZouthLogo color={"EA1A7F"} />
      <div className={styles.mainAvatar}>
        <p>Build your Avatar</p>
        <AvatarHolder />
      </div>
      <Switch>
        <Route path={"/signup/avatars"} exact>
          <BodyChoose />
        </Route>
        <Route path={"/signup/avatars/head-choose"}>
          <HeadChoose />
        </Route>
        <Route path={"/signup/avatars/ear-choose"}>
          <EarChoose />
        </Route>
        <Route path={"/signup/avatars/eyebrow-choose"}>
          <EyeBrowChoose />
        </Route>
        <Route path={"/signup/avatars/eye-choose"}>
          <EyeChoose />
        </Route>
        <Route path={"/signup/avatars/lip-choose"}>
          <LipChoose />
        </Route>
        <Route path={"/signup/avatars/nose-choose"}>
          <NoseChoose />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
};

export default AvatarChoose;
