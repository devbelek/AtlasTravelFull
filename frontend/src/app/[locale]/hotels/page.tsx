"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import TicketForm from "../components/pages/main_page/date_picker_section/TicketFormComponent/FlightForm";
import Container from "../components/layout/container/Container";
import OffersBlock from "../components/pages/main_page/offer_section/OfferBlock";
import DarkerFilter from "../components/darker_filter/DarkerFilter";
import MainCard from "../components/cards/main_cards/MainCard";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { axiosGetPopularHotels } from "@/services/home";
import { IMAGE_API_URL } from "@/constants/default_api";
import { axiosGetTours } from "@/services/tours";
import { hotelsApi } from "@/constants/content";
import { Hotel } from "@/types/tour";
import { translate } from "@/constants/locale";

export default function Hotels() {
  const [hotelsArr, setHotelsArr] = useState<Hotel[]>([]);
  const [popularHotelsArr, setPopularHotelsArr] = useState<any[]>([]);
  const [error, setError] = useState("");

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

  useEffect(() => {
    const loadData = async () => {
      try {
        const hotelsArr = await axiosGetTours(hotelsApi);
        setHotelsArr(hotelsArr);

        const popularHotels = await axiosGetPopularHotels();
        setPopularHotelsArr(popularHotels.popular_hotels);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <main className={styles.hotels_page_main}>
      <section className={styles.ticket_picker_block}>
        <DarkerFilter />
        <Container>
          <TicketForm />
        </Container>
      </section>

      <section className={styles.cards_section}>
        <Container isVisible={true}>
          <div className={styles.cards_flex}>
            {hotelsArr.length > 0 ? (
              hotelsArr.map((offer, index) => {
                let title;

                if (locale === "/kg") {
                  title = offer.title_ky;
                } else if (locale === "/ru") {
                  title = offer.title_ru;
                } else {
                  title = offer.title_en;
                }

                return (
                  <MainCard
                    key={offer.linkTo + offer.id}
                    imageSrc={IMAGE_API_URL + offer.image.image}
                    title={translate(
                      offer.title_ru,
                      offer.title_ky,
                      offer.title_en
                    )}
                    rating={offer.rating}
                    commentQuantity={offer.rating_quantity}
                    desc={translate(
                      offer.cityInfo.country.name_ru,
                      offer.cityInfo.country.name_ky,
                      offer.cityInfo.country.name_en
                    )}
                    linkTo={"hotels"}
                    index={offer.id}
                  />
                );
              })
            ) : (
              <p>Нет доступных отелей</p>
            )}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          {popularHotelsArr && popularHotelsArr.length > 0 ? (
            <OffersBlock
              offerTitle={t("popularHotels")}
              slides={popularHotelsArr}
            />
          ) : (
            <></>
          )}
        </Container>
      </section>
    </main>
  );
}
