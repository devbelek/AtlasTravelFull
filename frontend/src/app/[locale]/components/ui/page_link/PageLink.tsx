import React from "react";
import styles from "./page_link.module.css";
import Link from "next/link";

type PageLinkProps = {
  text: string;
  linkTo: string;
};

const PageLink: React.FC<PageLinkProps> = ({ text, linkTo }) => {
  return (
    <Link href={linkTo} className={styles.page_link}>
      {text}
    </Link>
  );
};

export default PageLink;
