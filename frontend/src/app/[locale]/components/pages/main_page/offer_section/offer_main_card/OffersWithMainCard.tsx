import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import styles from "../offer_block.module.css";
import MainCard from "@/app/[locale]/components/cards/main_cards/MainCard";
import { translate } from "@/constants/locale";
import {
  flightsApi,
  hotelsApi,
  toursApi,
} from "@/constants/content";
import { CityInfo } from "@/types/city";

interface Image {
  id: number;
  image: string;
}

type OffersWithMainCardProps = {
  offerTitle: string;
  content: string;
  slides: {
    image: Image;
    id: number;
    alt: string;
    rating: number;
    title: string;
    desc?: string;
    rating_quantity: number;
    linkTo: string;
    cityInfo: CityInfo;
  }[];
};

const OffersWithMainCard: React.FC<OffersWithMainCardProps> = ({
  offerTitle,
  slides,
  content,
}) => {
  return (
    <div
      className={`${styles.vacation_ideas_block} ${styles.offers_with_main_card}`}
    >
      <div className={styles.offer_title_block}>
        <h2 className={styles.offer_title}>{offerTitle}</h2>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
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
        }}
        navigation={{
          prevEl: .${styles.swiper_button_prev},
          nextEl: .${styles.swiper_button_next},
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
            <MainCard
              key={index}
              imageSrc={process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL + slide.image.image}
              title={
                content == flightsApi
                  ? `${translate(
                      slide.cityInfo.country.name_ru,
                      slide.cityInfo.country.name_ky,
                      slide.cityInfo.country.name_en
                    )}, ${translate(
                      slide.cityInfo.name_ru,
                      slide.cityInfo.name_ky,
                      slide.cityInfo.name_en
                    )}`
                  : slide.title
              }
              rating={slide.rating}
              commentQuantity={slide.rating_quantity}
              desc={slide.desc}
              linkTo={
                content == toursApi
                  ? toursApi
                  : content == flightsApi
                  ? flightsApi
                  : content == hotelsApi
                  ? hotelsApi
                  : "car-rental"
              }
              index={slide.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersWithMainCard;