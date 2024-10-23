"use client"

import React from "react";
import styles from "./blog_cards.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DarkerFilter from "../../darker_filter/DarkerFilter";
import arrow from "@/assets/icons/blog_arrow.svg";
import { usePathname } from "next/navigation";

interface BlogCardsProps {
  src: string;
  alt: string;
  isCardBig?: boolean;
  title: string | undefined;
  desc?: string | null;
  index: number;
}

const BlogCards: React.FC<BlogCardsProps> = ({
  src,
  alt,
  isCardBig = false,
  title,
  desc,
  index
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
    <div
      className={`${styles.blog_card} ${isCardBig ? styles.big_blog_card : ""}`}
    >
      <Link href={locale + "/blog/" + index}>
        <DarkerFilter isAllowHover={true} />
        <Image quality={100} src={src} alt={alt} className={styles.blog_image} width={300} height={400}/>
        <div className={styles.blog_info}>
          <h2 className={styles.blog_title}>{title}</h2>
          {desc && isCardBig ? (
            <p className={styles.blog_desc}>{desc}</p>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;
