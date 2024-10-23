import React from "react";
import styles from "./tours_cards.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CardProps = {
  imageSrc: any;
  title: string;
  desc: string;
  linkTo: string;
  index: number;
};

const TourCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  desc,
  linkTo,
  index,
}) => {

  const pathname = usePathname();

  let locale: string;

  if (pathname.includes("ru")) {
    locale = "/ru";
  } else if (pathname.includes("en")) {
    locale = "/en";
  } else {
    locale = "/kg";
  }

  return (
    <Link href={locale + "/" + linkTo + "/" + index}>
      <div className={styles.slide_inner}>
        <Image quality={100} src={imageSrc} width={300} height={400} alt={title} />
        <div className={styles.title_desc_block}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
