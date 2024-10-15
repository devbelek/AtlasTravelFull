import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./main_cards.module.css";
import PageLink from "../../ui/page_link/PageLink";
import { useTranslations } from "next-intl";

type MainCardProps = {
  imageSrc: StaticImageData | string;
  alt: string;
  rating: number;
  title: string;
  desc?: string;
  commentQuantity: number;
  linkTo: string;
};

const MainCard: React.FC<MainCardProps> = ({
  imageSrc,
  alt,
  rating,
  title,
  desc,
  commentQuantity,
  linkTo,
}) => {
  const button = useTranslations("Buttons");
  const reviews = useTranslations("TourDetailPage");

  let reviewRussian;
  const commentQuantityLastNumber = commentQuantity % 10;

  if (commentQuantity === 1) {
    reviewRussian = reviews("commentsQuantityOne");
  } else if (
    (commentQuantity > 21 &&
      commentQuantityLastNumber > 1 &&
      commentQuantityLastNumber < 5) ||
    (commentQuantityLastNumber > 1 && commentQuantityLastNumber < 5)
  ) {
    reviewRussian = reviews("commentsQuantityFew");
  } else {
    reviewRussian = reviews("commentsQuantityMany");
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.rating}>
          <span>{rating}</span>
        </div>
        <Image
          src={imageSrc}
          alt={alt}
          width={320}
          height={300}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {desc && <p className={styles.cardDesc}>{desc}</p>}
        <div className={styles.cardFooter}>
          <div className={styles.comments}>
            <span>
              {commentQuantity} {reviewRussian}
            </span>
          </div>
          <PageLink linkTo={linkTo} text={button("getDetails")} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
