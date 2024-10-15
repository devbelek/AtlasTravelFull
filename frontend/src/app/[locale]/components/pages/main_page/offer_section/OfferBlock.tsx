import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/swiper-bundle.css";
import "swiper/css";
import styles from "./offer_block.module.css";
import TourCard from "@/app/[locale]/components/cards/tours_cards/TourCard";

type OffersBlockProps = {
  offerTitle: string;
  slides: {
    image: StaticImageData;
    title: string;
    desc: string;
    alt: string;
  }[];
};

const OffersBlock: React.FC<OffersBlockProps> = ({ offerTitle, slides }) => {
  return (
    <div className={styles.vacation_ideas_block}>
      <div className={styles.offer_title_block}>
        <h2 className={styles.offer_title}>{offerTitle}</h2>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          685: {
            slidesPerView: 2,
          },
          970: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: `.${styles.swiper_button_prev}`,
          nextEl: `.${styles.swiper_button_next}`,
        }}
        className={styles.swiper_block}
      >
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <TourCard
              alt={slide.alt}
              imageSrc={slide.image}
              title={slide.title}
              desc={slide.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersBlock;
