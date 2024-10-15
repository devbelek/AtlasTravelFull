"use client";
import React, { useEffect, useState } from "react";
import styles from "./top_header.module.css";
import Image from "next/image";
import phoneIcon from "@/assets/icons/phone.svg";
import ChangeLanguage from "./change_language/ChangeLanguage";
const TopHeader = () => {
  
  return (
    <div className={styles.top_header}>
      <div className={styles.phone_block}>
        <div className={styles.phone_block_inner}>
          <Image src={phoneIcon} alt="Phone Icon" width={17} height={17} />
          <a href="tel:+996700123456" className={styles.phone_numbers}>+996 700 123 456</a>
        </div>
        <div className={styles.phone_block_inner}>
          <Image src={phoneIcon} alt="Phone Icon" width={17} height={17} />
          <a href="tel:+996700123456" className={styles.phone_numbers}>+996 700 123 456</a>
        </div>
      </div>
      <div>
        <ChangeLanguage/>
      </div>
    </div>
  );
};

export default TopHeader;
