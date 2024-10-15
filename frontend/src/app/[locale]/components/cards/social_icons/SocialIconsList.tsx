import React from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Instagram from "./Instagram";
import TikTok from "./TikTok";
import FaceBook from "./FaceBook";
import YouTube from "./YouTube";
import styles from "./social_icons.module.css";
const SocialIconsList = () => {
  return (
    <ul className={styles.icons_list}>
      <li>
        <Whatsapp />
      </li>
      <li>
        <Telegram />
      </li>
      <li>
        <Instagram />
      </li>
      <li>
        <TikTok />
      </li>
      <li>
        <FaceBook />
      </li>
      <li>
        <YouTube />
      </li>
    </ul>
  );
};

export default SocialIconsList;
