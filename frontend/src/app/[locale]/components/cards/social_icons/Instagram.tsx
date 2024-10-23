import React from 'react'
import styles from "./social_icons.module.css";
import Image from 'next/image';
import instagramIcon from "@/assets/socials/instagram.svg";
import Link from 'next/link';
import { LinkProps } from './Whatsapp';

const Instagram: React.FC<LinkProps> = ({ href }) => {
  return (
    <Link href={href ?? '/'} className={`${styles.instagram} ${styles.social_icon}`}>
        <Image src={instagramIcon} width={20} height={20} alt='Instagram icon'/>
    </Link>
  )
}

export default Instagram