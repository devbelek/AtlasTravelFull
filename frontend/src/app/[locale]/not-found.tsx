import React from "react";
import styles from "./not-found.module.css";
import Container from "./components/layout/container/Container";
import PageLink from "./components/ui/page_link/PageLink";
import Image from "next/image";
import errorImage from "@/assets/error_images/not_found.png";

const NotFound = () => {
  return (
    <div className={styles.not_found_block}>
      <Container>
        <h1>Страница не найдена</h1>
        <p>
          Страница, которую вы ищете, возможно, была удалена или Временно
          недостуна.
        </p>
        <PageLink linkTo="/" text="На главную" />
        <Image src={errorImage} alt="404 page"/>
      </Container>
    </div>
  );
};

export default NotFound;
