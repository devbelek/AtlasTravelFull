import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

import Container from "../container/Container";
import TopHeader from "./top_header/TopHeader";
import BottomHeader from "./bottom_header/BottomHeader";

const Header = () => {
  return (
    <header className={styles.globalHeader}>
      <div className={styles.global_header_inner}>
        <Container>
          <TopHeader />
        </Container>
        <div className={styles.stroke}></div>
        <Container>
          <BottomHeader />
        </Container>
        <div className={styles.stroke}></div>
      </div>
    </header>
  );
};

export default Header;
