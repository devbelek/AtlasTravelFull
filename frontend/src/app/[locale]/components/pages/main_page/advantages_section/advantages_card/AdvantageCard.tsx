import React from "react";
import styles from "./advantage_cards.module.css";
import Image, { StaticImageData } from "next/image";

type AdvantageProps = {
  imageSrc: string | StaticImageData;
  alt: string;
  title: string;
  desc: string;
};

const AdvantageCard: React.FC<AdvantageProps> = ({
  imageSrc,
  alt,
  title,
  desc,
}) => {
  return (
    <>
      <div className={styles.rounded_block}>
        <Image
          className={styles.image_in_round}
          src={imageSrc}
          layout="responsive"
          alt={alt}
        />
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.desc}>{desc}</p>
    </>
  );
};

export default AdvantageCard;
