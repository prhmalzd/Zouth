import React from "react";
import styles from './profileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
      <span className={styles.profilePicture}>{props.logo}</span>
      <p className={styles.profileName}>{props.name}</p>
    </div>
  )
}

export default ProfileInfo