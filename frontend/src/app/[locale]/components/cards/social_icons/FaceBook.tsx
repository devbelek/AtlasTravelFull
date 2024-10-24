import React from 'react'
import styles from "./social_icons.module.css";
import Image from 'next/image';
import faceBookIcon from "@/assets/socials/facebook.svg";
import Link from 'next/link';
import { LinkProps } from './Whatsapp';

const FaceBook: React.FC<LinkProps> = ({ href }) => {
  return (
    <Link href={href ?? '/'} className={`${styles.facebook} ${styles.social_icon}`}>
        <Image src={faceBookIcon} width={12} height={23} alt='facebook icon'/>
    </Link>
  )
}

export default FaceBook