"use client";

import React from "react";
import styles from "./page.module.css";
import TicketForm from "../components/pages/main_page/date_picker_section/TicketFormComponent/FlightForm";
import Container from "../components/layout/container/Container";
import OffersBlock from "../components/pages/main_page/offer_section/OfferBlock";

import photo_1 from "@/assets/3407438d256d758b4d89eb2565169df9.jpeg";
import photo_2 from "@/assets/6901c49957fdd359d9efbee42e4bb608.jpeg";
import DarkerFilter from "../components/darker_filter/DarkerFilter";
import MainCard from "../components/cards/main_cards/MainCard";

import image_1 from "@/assets/ticket_cards/air/image_1.jpeg";
import image_2 from "@/assets/ticket_cards/air/image_2.jpeg";
import image_3 from "@/assets/ticket_cards/air/image_3.jpeg";
import image_4 from "@/assets/ticket_cards/air/image_4.jpeg";
import image_5 from "@/assets/ticket_cards/air/image_5.jpeg";
import image_6 from "@/assets/ticket_cards/air/image_6.jpeg";
import image_7 from "@/assets/ticket_cards/air/image_7.jpeg";
import image_8 from "@/assets/ticket_cards/air/image_8.jpeg";
import image_9 from "@/assets/ticket_cards/air/image_9.jpeg";
import image_10 from "@/assets/ticket_cards/air/image_10.jpeg";
import image_11 from "@/assets/ticket_cards/air/image_11.jpeg";
import image_12 from "@/assets/ticket_cards/air/image_12.jpeg";
import image_13 from "@/assets/ticket_cards/air/image_13.jpeg";
import image_14 from "@/assets/ticket_cards/air/image_14.jpeg";
import image_15 from "@/assets/ticket_cards/air/image_15.jpeg";
import OffersList from "../components/pages/offers_cards_list/OffersList";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Hotels({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
    image_13,
    image_14,
    image_15,
  ];
  const ideaOffers = [];

  for (let i = 0; i < 8; i++) {
    let imageSrc;
    if (i % 2 == 0) {
      imageSrc = photo_1;
    } else {
      imageSrc = photo_2;
    }

    ideaOffers.push({
      image: imageSrc,
      alt: "image 1",
      title: "Дом на воде",
      desc: "Дубай",
    });
  }

  const toursOffers = [];

  for (let i = 0; i < images.length; i++) {
    toursOffers.push({
      image: images[i],
      alt: "Турция, Мармарис",
      rating: 8.4,
      commentQuantity: 10,
      title: "Наименование тура",
      desc: "ОАЭ, Дубай",
    });
  }

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = toursOffers.slice(start, end);

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
    <main className={styles.hotels_page_main}>
      <section className={styles.ticket_picker_block}>
        <DarkerFilter />
        <Container>
          <TicketForm />
        </Container>
      </section>

      <OffersList
        per_page={per_page}
        itemQuantity={toursOffers.length}
        url={locale + "/hotels"}
      >
        {entries.map((offer, index) => (
          <MainCard
            key={index}
            imageSrc={offer.image}
            title={offer.title}
            rating={offer.rating}
            commentQuantity={offer.commentQuantity}
            desc={offer.desc}
            alt={offer.alt}
            linkTo={locale + "/hotels/" + index}
          />
        ))}
      </OffersList>

      <section>
        <Container>
          <OffersBlock offerTitle={t("popularHotels")} slides={ideaOffers} />
        </Container>
      </section>
    </main>
  );
}
