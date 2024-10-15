"use client";

import React, { useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";

import styles from "./page.module.css";
import Container from "../../components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import city from "@/assets/icons/city_country.svg";
import calendar from "@/assets/icons/calendar.svg";

import planeTag from "@/assets/icons/plane_tag.svg";
import wifiTag from "@/assets/icons/wifi_tag.svg";
import bedTag from "@/assets/icons/bed_tag.svg";
import foodTag from "@/assets/icons/food_tag.svg";
import heartTag from "@/assets/icons/heart_tag.svg";
import transferTag from "@/assets/icons/transfer_tag.svg";
import { useTranslations } from "next-intl";
import star from "@/assets/icons/Star 4.svg";

import image_1 from "@/assets/ticket_cards/tours/image_1.jpeg";
import image_2 from "@/assets/ticket_cards/tours/image_2.jpeg";
import image_3 from "@/assets/ticket_cards/tours/image_3.jpeg";
import image_4 from "@/assets/ticket_cards/tours/image_4.jpeg";
import image_5 from "@/assets/ticket_cards/tours/image_5.jpeg";
import image_6 from "@/assets/ticket_cards/tours/image_6.jpeg";
import image_7 from "@/assets/ticket_cards/tours/image_7.jpeg";
import image_8 from "@/assets/ticket_cards/tours/image_8.jpeg";
import image_9 from "@/assets/ticket_cards/tours/image_9.jpeg";
import image_10 from "@/assets/ticket_cards/tours/image_10.jpeg";
import image_11 from "@/assets/ticket_cards/tours/image_11.jpeg";
import image_12 from "@/assets/ticket_cards/tours/image_12.jpeg";
import OffersWithMainCard from "../../components/pages/main_page/offer_section/offer_main_card/OffersWithMainCard";
import OffersBlock from "../../components/pages/main_page/offer_section/OfferBlock";

const TransferDetails: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [modalThumbsSwiper, setModalThumbsSwiper] = useState<SwiperType | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setThumbsSwiper(null);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const t = useTranslations("Buttons");
  const tours = useTranslations("OffersSwiperTitle");
  const offers = useTranslations("OffersSwiperTitle");

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
  ];

  const toursOffers = [];
  const ideaOffers = [];

  for (let i = 0; i < 8; i++) {
    let imageSrc;
    if (i % 2 == 0) {
      imageSrc = image_1;
    } else {
      imageSrc = image_2;
    }

    ideaOffers.push({
      image: imageSrc,
      alt: "image 1",
      title: "Дом на воде",
      desc: "Дубай",
    });
  }

  for (let i = 0; i < 12; i++) {
    toursOffers.push({
      image: images[i],
      alt: "Турция, Мармарис",
      rating: 8.4,
      commentQuantity: 2,
      title: "Наименование тура",
      desc: "ОАЭ, Дубай",
      linkTo: "/"
    });
  }

  return (
    <main className={styles.tour_detail_page}>
      <Container isVisible={true}>
        <section className={styles.main_info_section}>
          <div className={styles.swiper_block}>
            <Swiper
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={{
                prevEl: `.${styles.swiper_button_prev}`,
                nextEl: `.${styles.swiper_button_next}`,
              }}
              className={styles.upper_swiper}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide
                  key={i}
                  className={styles.swiper_image}
                  onClick={() => openModal(i)}
                >
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      i + 1
                    }.jpg`}
                    alt={`nature-${i + 1}`}
                  />
                </SwiperSlide>
              ))}
              <div className={styles.swiper_button_prev}>
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15L9 9L1 0.999999"
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
                    d="M1 15L9 9L1 0.999999"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </Swiper>
            <Swiper
              spaceBetween={8}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.lower_swiper}
              onSwiper={setThumbsSwiper}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide key={i} className={styles.swiper_image_bottom}>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      i + 1
                    }.jpg`}
                    alt={`thumbnail-${i + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.main_info}>
            <span className={styles.average_score}>8.4</span>
            <span className={styles.reviews_quantity}>10 отзывов</span>

            <h1 className={styles.title}>Наименование тура</h1>

            <div className={styles.icon_and_text}>
              <div className={styles.icon_and_text_inner}>
                <Image src={city} width={24} height={24} alt="city icon" />
                <p>ОАЭ, Дубай</p>
              </div>
              <div className={styles.icon_and_text_inner}>
                <Image src={calendar} width={24} height={24} alt="city icon" />
                <p>28.09.2024 - 14.10.2024</p>
              </div>
            </div>
            <p className={styles.desc}>
              Погрузитесь в атмосферу спокойствия и роскоши на Мальдивах —
              месте, где бесконечные белоснежные пляжи встречаются с кристально
              чистыми лагунами. Этот тур идеально подходит для тех, кто хочет
              убежать от повседневной суеты и насладиться романтикой и
              уединением. Вас ждут уютные виллы с видом на океан, ужины на
              берегу под звездным небом, дайвинг среди коралловых рифов и
              расслабляющие SPA-процедуры.
            </p>
            <div className={styles.tag_block}>
              <div className={styles.tag}>
                <Image src={planeTag} width={24} height={24} alt="icon" />
                <p>Перелет</p>
              </div>
              <div className={styles.tag}>
                <Image src={wifiTag} width={24} height={24} alt="icon" />
                <p>Бесплатный Wi-fi</p>
              </div>
              <div className={styles.tag}>
                <Image src={bedTag} width={24} height={24} alt="icon" />
                <p>Проживание</p>
              </div>
              <div className={styles.tag}>
                <Image src={foodTag} width={24} height={24} alt="icon" />
                <p>Питание BB</p>
              </div>
              <div className={styles.tag}>
                <Image src={heartTag} width={24} height={24} alt="icon" />
                <p>Страховка</p>
              </div>
              <div className={styles.tag}>
                <Image src={transferTag} width={24} height={24} alt="icon" />
                <p>Трансфер</p>
              </div>
            </div>

            <button className={styles.learn_more}>{t("getDetails")}</button>
          </div>
        </section>
      </Container>

      <section className={styles.comments_section}>
        <Container isVisible={true}>
          <h2 className={styles.section_title}>{offers("comments")}</h2>
          <div className={styles.comment_block}>
            <div className={styles.comment_block_item}>
              <div className={styles.clent_info_block}>
                <div className={styles.clent_info}>
                  <div className={styles.client_rate}>
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                  </div>
                  <p className={styles.comment_date}>28.03.2024</p>
                </div>
                <p className={styles.client_name}>Давыдова Карина</p>
              </div>
              <p className={styles.client_comment}>
                Поездка на Мальдивы с Atlas Travel была просто волшебной! Все
                было организовано на высшем уровне: от перелета до проживания в
                шикарной вилле с видом на океан. Особенно запомнились ужины на
                пляже и потрясающий дайвинг. Это было наше лучшее путешествие —
                спасибо за незабываемые впечатления!
              </p>
            </div>
            <div className={styles.comment_block_item}>
              <div className={styles.clent_info_block}>
                <div className={styles.clent_info}>
                  <div className={styles.client_rate}>
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                  </div>
                  <p className={styles.comment_date}>28.03.2024</p>
                </div>
                <p className={styles.client_name}>Давыдова Карина</p>
              </div>
              <p className={styles.client_comment}>
                Поездка на Мальдивы с Atlas Travel была просто волшебной! Все
                было организовано на высшем уровне: от перелета до проживания в
                шикарной вилле с видом на океан. Особенно запомнились ужины на
                пляже и потрясающий дайвинг. Это было наше лучшее путешествие —
                спасибо за незабываемые впечатления!
              </p>
            </div>
            <div className={styles.comment_block_item}>
              <div className={styles.clent_info_block}>
                <div className={styles.clent_info}>
                  <div className={styles.client_rate}>
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                    <Image
                      src={star}
                      width={15}
                      height={15}
                      alt="star rating"
                    />
                  </div>
                  <p className={styles.comment_date}>28.03.2024</p>
                </div>
                <p className={styles.client_name}>Давыдова Карина</p>
              </div>
              <p className={styles.client_comment}>
                Поездка на Мальдивы с Atlas Travel была просто волшебной! Все
                было организовано на высшем уровне: от перелета до проживания в
                шикарной вилле с видом на океан. Особенно запомнились ужины на
                пляже и потрясающий дайвинг. Это было наше лучшее путешествие —
                спасибо за незабываемые впечатления!
              </p>
            </div>
          </div>
          <button className={styles.leave_comment}>{t("sendComment")}</button>
        </Container>
      </section>

      <section className={styles.similar_tours}>
        <Container isVisible={true}>
          <OffersWithMainCard
            offerTitle={tours("sameCars")}
            slides={toursOffers}
          />
        </Container>
      </section>

      <section className={styles.best_offers}>
        <Container>
          <OffersBlock
            offerTitle={offers("popularHotels")}
            slides={ideaOffers}
          />
        </Container>
      </section>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.modal_content}>
            <button
              className={styles.modal_close}
              onClick={closeModal}
            ></button>
            <Swiper
              slidesPerView={1}
              spaceBetween={100}
              navigation={{
                prevEl: `.${styles.swiper_button_prev}`,
                nextEl: `.${styles.swiper_button_next}`,
              }}
              thumbs={{
                swiper:
                  modalThumbsSwiper && !modalThumbsSwiper.destroyed
                    ? modalThumbsSwiper
                    : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.upper_swiper_modal}
              initialSlide={activeIndex}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide key={i} className={styles.swiper_image}>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      i + 1
                    }.jpg`}
                    alt={`nature-${i + 1}`}
                  />
                </SwiperSlide>
              ))}
              <div className={styles.swiper_button_prev}>
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15L9 9L1 0.999999"
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
                    d="M1 15L9 9L1 0.999999"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </Swiper>
            <Swiper
              spaceBetween={8}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.lower_swiper_modal}
              onSwiper={setModalThumbsSwiper}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide key={i} className={styles.swiper_image_bottom}>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${
                      i + 1
                    }.jpg`}
                    alt={`thumbnail-${i + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </main>
  );
};

export default TransferDetails;

