import React from "react";
import styles from "./swiper_buttons.module.css";
const SwiperButtons = () => {
  return (
    <>
      <div className={styles.swiper_button_prev}>
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth={2} />
        </svg>
      </div>
      <div className={styles.swiper_button_next}>
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons;
