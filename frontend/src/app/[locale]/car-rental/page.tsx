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
import { axiosGetTours } from "@/services/tours";
import { Transfer } from "@/types/tour";
import { axiosGetHome } from "@/services/home";
import { transferApi } from "@/constants/content";
import { translate } from "@/constants/locale";
import NoTours from "../components/ui/error_message/no_tours/NoTours";
import noToursImage from "@/assets/empty_pages/no_transfer.svg";

export default function CarRentals() {
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

  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [homeResultsArr, setHomeResultsArr] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const transfersArr = await axiosGetTours(transferApi);
        setTransfers(transfersArr);

        const homeResults = await axiosGetHome();
        setHomeResultsArr(homeResults.rest_ideas);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <main className={styles.transfer_page_main}>
      <section className={styles.ticket_picker_block}>
        <DarkerFilter />
        <Container>
          <TicketForm />
        </Container>
      </section>

      <section className={styles.cards_section}>
        <Container isVisible={true}>
          {transfers.length > 0 ? (
            <div className={styles.cards_flex}>
              {transfers.map((offer) => {
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
                    imageSrc={process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL + offer.image.image}
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
                    linkTo={"car-rental"}
                    index={offer.id}
                  />
                );
              })}
            </div>
          ) : (
            <NoTours
              title="noCars"
              desc="noCarsDesc"
              image={noToursImage}
            />
          )}
        </Container>
      </section>

      <section>
        <Container>
          {homeResultsArr ? homeResultsArr.length > 0 && (
            <OffersBlock
              offerTitle={t("vacationIdeas")}
              slides={homeResultsArr}
            />
          ): <></>}
        </Container>
      </section>
    </main>
  );
}
