import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import styles from "./offer_block.module.css";
import TourCard from "@/app/[locale]/components/cards/tours_cards/TourCard";
import { IMAGE_API_URL } from "@/constants/default_api";
import { usePathname } from "next/navigation";
import { translate } from "@/constants/locale";

interface Country {
  id: number;
  name: string;
  name_ru: string;
  name_ky: string;
  name_en: string;
}

interface CityInfo {
  id: number;
  name: string;
  name_ru: string;
  name_ky: string;
  name_en: string;
  country: Country;
}

type OffersBlockProps = {
  offerTitle: string;
  slides: {
    id: number;
    title: string;
    title_ru: string;
    title_ky: string;
    title_en: string;
    image: { image: string };
    description: string;
    description_ru: string;
    description_ky: string;
    description_en: string;
    linkTo: string;
    cityInfo?: CityInfo;
  }[];
};

const OffersBlock: React.FC<OffersBlockProps> = ({ offerTitle, slides }) => {
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.linkTo + slide.id}>
            <TourCard
              imageSrc={IMAGE_API_URL + slide.image.image}
              title={
                locale === "/ru"
                  ? slide.title_ru
                  : locale === "/en"
                  ? slide.title_en
                  : slide.title_ky
              }
              desc={
                translate(
                  slide.cityInfo?.name_ru ?? "", 
                  slide.cityInfo?.name_ky ?? "",
                  slide.cityInfo?.name_en ?? "" 
                ) ?? ""
              }
              linkTo={slide.linkTo}
              index={slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersBlock;
