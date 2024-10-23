"use client";

import Container from "./components/layout/container/Container";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";

import styles from "./page.module.css";

import ConsultForm from "./components/default_sections/consult_form/ConsultForm";
import DatePicker from "./components/pages/main_page/date_picker_section/DatePicker";
import OffersBlock from "./components/pages/main_page/offer_section/OfferBlock";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import {
  axiosGetBestOffers,
  axiosGetHome,
  axiosGetPopularHotels,
} from "@/services/home";
import BestOfferSwiper from "./components/pages/main_page/best_offer/BestOfferSwiper";
import CarRental from "./components/pages/main_page/car_rental/CarRental";
import CommentsSection from "./components/pages/main_page/comments_section/CommentsSection";
import AdvantageSection from "./components/pages/main_page/advantages_section/AdvantageSection";

export default function Home() {
  const [homeResultsArr, setHomeResultsArr] = useState<any[]>([]);
  const [bestChoices, setBestCoices] = useState<any[]>([]);
  const [popularHotels, setPopularHotels] = useState<any[]>([]);

  const [error, setError] = useState("");
  const t = useTranslations("OffersSwiperTitle");

  useEffect(() => {
    const loadData = async () => {
      try {
        const homeResults = await axiosGetHome();

        setHomeResultsArr(homeResults.rest_ideas);

        const bestOfferResult = await axiosGetBestOffers();
        setBestCoices(bestOfferResult.best_choices);

        const popularHotelsResult = await axiosGetPopularHotels();
        setPopularHotels(popularHotelsResult.popular_hotels);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <main>
      <DatePicker />
      <section className={styles.vacation_offers_block}>
        <Container>
          {homeResultsArr && homeResultsArr.length > 0 ? (
            <OffersBlock
              offerTitle={t("vacationIdeas")}
              slides={homeResultsArr}
            />
          ) : (
            <></>
          )}
          {popularHotels && popularHotels.length > 0 ? (
            <OffersBlock
              offerTitle={t("popularHotels")}
              slides={popularHotels}
            />
          ) : (
            <></>
          )}
        </Container>
      </section>
      <section className={styles.best_offers_block}>
        <Container>
          {bestChoices && bestChoices.length > 0 ? (
            <BestOfferSwiper offers={bestChoices} />
          ) : (
            <></>
          )}
        </Container>
      </section>

      <section className={styles.cars_block}>
        <Container>
          <CarRental />
        </Container>
      </section>

      <ConsultForm />

      <AdvantageSection />

      <CommentsSection />
    </main>
  );
}
