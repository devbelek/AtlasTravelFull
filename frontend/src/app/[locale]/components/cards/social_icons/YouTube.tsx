import React from 'react'
import styles from "./social_icons.module.css";
import Image from 'next/image';
import youTubeIcon from "@/assets/socials/youtube.svg";
import Link from 'next/link';
import { LinkProps } from './Whatsapp';

const YouTube: React.FC<LinkProps> = ({ href }) => {
  return (
    <Link href={href ?? '/'}  className={`${styles.youTube} ${styles.social_icon}`}>
        <Image src={youTubeIcon} width={20} height={22} alt='YouTube icon'/>
    </Link>
  )
}

export default YouTube