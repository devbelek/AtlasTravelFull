import React from "react";
import styles from "./tours_cards.module.css";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  imageSrc: string | StaticImageData;
  alt: string;
  title: string;
  desc: string;
};

const TourCard: React.FC<CardProps> = ({ imageSrc, alt, title, desc }) => {
  return (
    <div className={styles.slide_inner}>
      <Image src={imageSrc} width={300} height={400} alt={alt} />
      <div className={styles.title_desc_block}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default TourCard;
