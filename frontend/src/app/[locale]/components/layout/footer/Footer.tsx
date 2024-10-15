import React from "react";
import styles from "./footer.module.css";
import UpperFooter from "./upper_footer/UpperFooter";
import BottomFooter from "./bottom_footer/BottomFooter";
import Container from "../container/Container";

const Footer = () => {
  return (
    <footer className={styles.global_footer}>
      <Container>
        <UpperFooter />
      </Container>
      <div className={styles.stroke}></div>
      <Container>
        <BottomFooter />
      </Container>
    </footer>
  );
};

export default Footer;
