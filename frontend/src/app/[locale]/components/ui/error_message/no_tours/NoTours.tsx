import React from "react";
import styles from "./NoTours.module.css";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface NoToursProps {
  title: string;
  desc: string;
  image: StaticImageData | string;
}

const NoTours: React.FC<NoToursProps> = ({ title, desc, image }) => {
  const t = useTranslations("EmptyPages");

  return (
    <div className={styles.no_tours_block}>
      <h1 className={styles.no_tours_title}>{t(title)}</h1>
      <p className={styles.no_tours_desc}>{t(desc)}</p>
      {image && <Image className={styles.no_tours_image} quality={100} src={image} alt={title} />}
    </div>
  );
};

export default NoTours;
