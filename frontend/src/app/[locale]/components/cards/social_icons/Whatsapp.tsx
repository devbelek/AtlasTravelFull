import React from "react";
import styles from "./social_icons.module.css";
import Image from "next/image";
import whatsAppIcon from "@/assets/socials/whatsapp.svg";
import Link from "next/link";

export interface LinkProps {
  href?: string;
}

const Whatsapp: React.FC<LinkProps> = ({ href }) => {
  
  return (
    <Link href={href ?? '/'} className={`${styles.whatsApp} ${styles.social_icon}`}>
      <Image src={whatsAppIcon} width={20} height={22} alt="Whatsapp icon" />
    </Link>
  );
};

export default Whatsapp;
