import React from "react";
import TourCard from "../../../cards/tours_cards/TourCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.css";
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

type BestOffersProps = {
  offers: {
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

const BestOfferSwiper: React.FC<BestOffersProps> = ({ offers }) => {
  const t = useTranslations("OffersSwiperTitle");

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
    <>
      <div className={styles.best_offer_inner}>
        <div className={styles.best_offer_info}>
          <h3>{t("bestOffer")}</h3>
          <p>
            Не откладывайте - бронируйте авиабилеты заранее, чтобы обеспечить
            себе комфортный и безопасный перелет
          </p>
        </div>
        <div className={styles.best_offer_swiper}>
          <Swiper
            modules={[Navigation, EffectCards, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: `.${styles.swiper_button_prev}`,
              nextEl: `.${styles.swiper_button_next}`,
            }}
            pagination={{ clickable: true }}
            effect="cards"
            className={styles.swiper_cards}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <div className={styles.sided_pagination}>
              <div className={styles.dotted_border}></div>
              <div className={styles.swiper_button_prev}>
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17L9 9L1 0.999999"
                    stroke="white"
                    strokeWidth={2}
                  />
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
                  <path
                    d="M1 17L9 9L1 0.999999"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>

            {offers.map((offer) => (
              <SwiperSlide key={offer.linkTo + offer.id}>
                <TourCard
                  imageSrc={IMAGE_API_URL + offer.image.image}
                  index={offer.id}
                  title={
                    locale === "ru"
                      ? offer.title_ru
                      : locale === "ky"
                      ? offer.title_ky
                      : offer.title_en
                  }
                  desc={
                    translate(
                      offer.cityInfo?.name_ru ?? "", 
                      offer.cityInfo?.name_ky ?? "", 
                      offer.cityInfo?.name_en ?? "" 
                    ) ?? ""
                  }
                  linkTo={offer.linkTo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestOfferSwiper;
