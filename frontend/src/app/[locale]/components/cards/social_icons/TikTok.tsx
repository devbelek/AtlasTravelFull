import React from "react";
import styles from "./social_icons.module.css";
import Image from "next/image";
import tikTokIcon from "@/assets/socials/tiktok.svg";
import Link from "next/link";

const TikTok = () => {
  return (
    <Link href={"/"} className={`${styles.tik_tok} ${styles.social_icon}`}>
      <Image src={tikTokIcon} width={20} height={22} alt="TikTok icon" />
    </Link>
  );
};

export default TikTok;
