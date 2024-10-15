"use client";

import Image from "next/image";

import Container from "./components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";

import photo_1 from "@/assets/3407438d256d758b4d89eb2565169df9.jpeg";
import photo_2 from "@/assets/6901c49957fdd359d9efbee42e4bb608.jpeg";
import photo_3 from "@/assets/b9252733aa4f9eb4320252f82b3866c5.jpeg";

import car_1 from "@/assets/cars/car1.jpeg";
import car_2 from "@/assets/cars/car2.jpeg";
import car_3 from "@/assets/cars/car3.jpeg";

import rocket from "@/assets/advantages/rocket-svgrepo-com 1.svg";
import weather from "@/assets/advantages/weather-svgrepo-com 1.svg";
import shield from "@/assets/advantages/shield-svgrepo-com 1.svg";
import money from "@/assets/advantages/money-svgrepo-com 1.svg";

import commentPerson from "@/assets/person/comments.jpeg";
import star from "@/assets/icons/Star 4.svg";
import styles from "./page.module.css";

import TourCard from "./components/cards/tours_cards/TourCard";
import AdvantageCard from "./components/pages/main_page/advantages_section/advantages_card/AdvantageCard";
import ConsultForm from "./components/default_sections/consult_form/ConsultForm";
import DatePicker from "./components/pages/main_page/date_picker_section/DatePicker";
import OffersBlock from "./components/pages/main_page/offer_section/OfferBlock";

import TripleImage from "./components/ui/triple_image/TripleImage";
import PageLink from "./components/ui/page_link/PageLink";
import { useEffect, useState } from "react";

import axios from "axios";
import { useTranslations } from "next-intl";

// const fetchHotels = async () => {
//   const api = "http://185.245.182.159/api/consultants";
//   try {
//     const response = await axios.get(api);
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error:", error.message);
//       if (error.response) {
        
//         console.error("Response data:", error.response.data);
//         console.error("Response status:", error.response.status);
//         console.error("Response headers:", error.response.headers);
//       } else if (error.request) {
       
//         console.error("Request error:", error.request);
//       } else {
        
//         console.error("Error setting up request:", error.message);
//       }
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     throw error;
//   }
// };

export default function Home() {
  
  const t = useTranslations("OffersSwiperTitle");
  const car = useTranslations("CarsSection");
  const button = useTranslations("Buttons")
  const ideaOffers = [];
  const hotelOffers = [];

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

  for (let i = 0; i < 8; i++) {
    hotelOffers.push({
      image: photo_3,
      alt: "image 1",
      title: "ZEUS TURUNC HOTEL, 3*",
      desc: "Турция, Мармарис",
    });
  }
  

  useEffect(() => {
    // fetchHotels();
  }, []);

  return (
    <main>
      <DatePicker />
      <section className={styles.vacation_offers_block}>
        <Container>
          <OffersBlock offerTitle={t("vacationIdeas")} slides={ideaOffers} />
          <OffersBlock offerTitle={t("popularHotels")} slides={hotelOffers} />
        </Container>
      </section>
      <section className={styles.best_offers_block}>
        <Container>
          <div className={styles.best_offer_inner}>
            <div className={styles.best_offer_info}>
              <h3>{t("bestOffer")} </h3>
              <p>
                Не откладывайте - бронируйте авиабилеты заранее, чтобы
                обеспечить себе комфортный и безопасный перелет
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

                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_2}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    title="Дом на воде"
                    desc="Дубай"
                    alt="Дом на воде"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.cars_block}>
        <Container>
          <div className={styles.car_block_inner}>
            <div className={styles.car_images_block}>
              <TripleImage image1={car_1} image2={car_2} image3={car_3} />
            </div>
            <div className={styles.car_desc_block}>
              <div className={styles.title_block}>
                <h4>Путешествуйте</h4>
                <span className={styles.stroke}></span>
              </div>

              <h4 className={styles.car_block_title}>{car("carsSectionTitle")}</h4>
              <ul className={styles.desc_list}>
                <li className={styles.desc_list_item}>
                {car("cardsSectionDesc.0")}
                </li>
                <li className={styles.desc_list_item}>
                {car("cardsSectionDesc.1")}
                </li>
                <li className={styles.desc_list_item}>
                {car("cardsSectionDesc.2")}
                </li>
                <li className={styles.desc_list_item}>
                {car("cardsSectionDesc.3")}
                </li>
              </ul>

              <PageLink linkTo="/transfer" text={button("link")} />
            </div>
          </div>
        </Container>
      </section>

      <ConsultForm />

      <section className={styles.advantages_block}>
        <h4 className={styles.section_title}>Преимущества работы с нами</h4>
        <div className={styles.advantages_block_inner}>
          <Container isVisible={true}>
            <div className={styles.advantages_flex}>
              <div className={styles.advantages_flex_item}>
                <AdvantageCard
                  imageSrc={rocket}
                  alt="rocket icon"
                  title="Быстро"
                  desc="Никаких поездок в офис Никаких поездок в офис и ожиданий в очередях: онлайн-бронирование доступно в любое время и занимает считаные минуты."
                />
              </div>
              <div className={styles.advantages_flex_item}>
                <AdvantageCard
                  imageSrc={weather}
                  alt="weather icon"
                  title="Удобно"
                  desc="Вы можете самостоятельно сравнивать цены, отели и условия, прочитать отзывы туристов и выбирать оптимальное предложение."
                />
              </div>
              <div className={styles.advantages_flex_item}>
                <AdvantageCard
                  imageSrc={shield}
                  alt="shield icon"
                  title="Безопасно"
                  desc="надёжный туроператор с безупречной репутацией, а все банковские операции и онлайн-платежи на сайте абсолютно защищены."
                />
              </div>
              <div className={styles.advantages_flex_item}>
                <AdvantageCard
                  imageSrc={money}
                  alt="money icon"
                  title="Выгодно"
                  desc="Все спецпредложения, акции и горящие туры отображаются на сайте в реальном времени, их можно отслеживать и сразу выкупать по выгодной цене."
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className={styles.comments_block}>
        <Container>
          <div className={styles.comments_block_swiper}>
            <h2 className={styles.offer_title}>{t("comments")}</h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                665: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                prevEl: `.${styles.swiper_button_prev}`,
                nextEl: `.${styles.swiper_button_next}`,
              }}
              className={styles.swiper_comment_block}
            >
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
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Каждая деталь была продумана до мелочей, и мы смогли
                  насладиться красивыми пляжами и удивительной культурой Бали
                  без стресса и хлопот. Отличная работа!
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Наш гид был замечательным, и он показал нам много мест,
                  которые мы никогда бы не нашли сами. Отличный сервис и очень
                  профессиональная организация!
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Я бы определенно порекомендовал это турагентство всем моим
                  друзьям и семье!
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Каждая деталь была продумана до мелочей, и мы смогли
                  насладиться красивыми пляжами и удивительной культурой Бали
                  без стресса и хлопот. Отличная работа!
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Каждая деталь была продумана до мелочей, и мы смогли
                  насладиться красивыми пляжами и удивительной культурой Бали
                  без стресса и хлопот. Отличная работа!
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <Image
                    src={commentPerson}
                    alt="comment person"
                    width={60}
                    height={60}
                    className={styles.comment_person_image}
                  />
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>Давыдова Карина</p>
                    <div className={styles.client_rate}>
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                      <Image
                        src={star}
                        width={17}
                        height={17}
                        alt="star rating"
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.client_comment}>
                  Каждая деталь была продумана до мелочей, и мы смогли
                  насладиться красивыми пляжами и удивительной культурой Бали
                  без стресса и хлопот. Отличная работа!
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>
    </main>
  );
}
