import React from 'react'
import styles from "./social_icons.module.css";
import Image from 'next/image';
import telegramIcon from "@/assets/socials/telegram.svg";
import Link from 'next/link';

const Telegram = () => {
  return (
    <Link href={"/"} className={`${styles.telegram} ${styles.social_icon}`}>
        <Image src={telegramIcon} width={19} height={17} alt='Telegram icon'/>
    </Link>
  )
}

export default Telegram