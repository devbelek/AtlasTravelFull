"use client";

import React, { useEffect, useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";

import styles from "../../content_detail_page.module.css";
import Container from "../../components/layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import city from "@/assets/icons/city_country.svg";
import calendar from "@/assets/icons/calendar.svg";

import { useTranslations } from "next-intl";
import star from "@/assets/icons/Star 4.svg";

import OffersWithMainCard from "../../components/pages/main_page/offer_section/offer_main_card/OffersWithMainCard";
import OffersBlock from "../../components/pages/main_page/offer_section/OfferBlock";
import { axiosGetHome, axiosGetPopularHotels } from "@/services/home";
import { axiosGetToursDetails, axiosGetToursSimilar } from "@/services/tours";
import { TourDetailsInterface } from "@/types/tour";
import { usePathname } from "next/navigation";
import { getPluralValues } from "@/services/right_quanity";
import { cleanAndDecodeString, translate, useLocale } from "@/constants/locale";
import { axiosGetCity } from "@/services/cities";
import { CityInfo } from "@/types/city";
import starGrey from "@/assets/icons/Star 5.svg";
import { transferApi } from "@/constants/content";

const transferDetails: React.FC = () => {
  const [homeResultsArr, setHomeResultsArr] = useState<any[]>([]);
  const [transferDetails, setTransferDetails] =
    useState<TourDetailsInterface | null>(null);
  const [similarTransferArr, setSimilarTransferArr] = useState<any[]>([]);

  const [cityInfo, setCityInfo] = useState<CityInfo | null>(null);

  const locale = useLocale();

  const [error, setError] = useState("");

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
  const empty = useTranslations("EmptyPages");

  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const transferId = pathParts[pathParts.length - 1];

  useEffect(() => {
    const loadData = async () => {
      try {
        const homeResults = await axiosGetHome();

        setHomeResultsArr(homeResults.rest_ideas);

        const transferResults = await axiosGetToursDetails(
          transferApi,
          transferId
        );
        setTransferDetails(transferResults);

        const cityResult = await axiosGetCity(transferResults.city);
        setCityInfo(cityResult);

        const similarTransfer = await axiosGetToursSimilar(
          transferApi,
          transferId
        );
        setSimilarTransferArr(similarTransfer);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  const formatDate = (dateString: string): string => {
    return dateString.replace(/-/g, ".");
  };

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
              {transferDetails?.images.map((image, index) => (
                <SwiperSlide
                  key={image.id}
                  className={styles.swiper_image}
                  onClick={() => openModal(index)}
                >
                  <img src={image.image} alt={`image-${index + 1}`} />
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
              {transferDetails?.images?.map((image) => (
                <SwiperSlide key={image.id} className={styles.swiper_image}>
                  <img src={image.image} alt={`tour-image-${image.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.main_info}>
            <span className={styles.average_score}>
              {transferDetails?.average_rating}
            </span>
            <span className={styles.reviews_quantity}>
              {getPluralValues(
                transferDetails?.rating_count ?? 0,
                locale === "/ru"
                  ? ["отзыв", "отзыва", "отзывов"]
                  : locale === "/kg"
                  ? ["пикир", "сын-пикирлер", "сын-пикирлер"]
                  : ["review", "reviews", "reviews"]
              )}
            </span>

            <h1 className={styles.title}>
              {translate(
                transferDetails?.title_ru ?? "",
                transferDetails?.title_ky ?? "",
                transferDetails?.title_en ?? ""
              )}
            </h1>

            <div className={styles.icon_and_text}>
              <div className={styles.icon_and_text_inner}>
                <Image src={city} width={24} height={24} alt="city icon" />
                <p>
                  {translate(
                    cityInfo?.country.name_ru ?? "",
                    cityInfo?.country.name_ky ?? "",
                    cityInfo?.country.name_en ?? ""
                  )}
                  ,{" "}
                  {translate(
                    cityInfo?.name_ru ?? "",
                    cityInfo?.name_ky ?? "",
                    cityInfo?.name_en ?? ""
                  )}
                </p>
              </div>
              <div className={styles.icon_and_text_inner}>
                <Image src={calendar} width={24} height={24} alt="city icon" />
                <p>
                  {formatDate(transferDetails?.departure_date ?? "")} -{" "}
                  {formatDate(transferDetails?.return_date ?? "")}
                </p>
              </div>
            </div>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{
                __html: translate(
                  transferDetails?.description_ru ?? "",
                  transferDetails?.description_ky ?? "",
                  transferDetails?.description_en ?? ""
                ),
              }}
            ></p>
            <div className={styles.tag_block}>
              {transferDetails?.tags.map((tag) => (
                <div key={tag.id} className={styles.tag}>
                  <Image src={tag.icon} width={24} height={24} alt="icon" />
                  <p>{translate(tag.name_ru, tag.name_ky, tag.name_en)}</p>
                </div>
              ))}
            </div>

            <button className={styles.learn_more}>{t("getDetails")}</button>
          </div>
        </section>
      </Container>

      <section className={styles.comments_section}>
        <Container isVisible={true}>
          <h2 className={styles.section_title}>{tours("comments")}</h2>
          <div className={styles.comment_block}>
            {transferDetails &&
            transferDetails.comments &&
            transferDetails?.comments.length > 0 ? (
              transferDetails?.comments.map((comment) => (
                <div key={comment.id} className={styles.comment_block_item}>
                  <div className={styles.clent_info_block}>
                    <div className={styles.clent_info}>
                      <div className={styles.client_rate}>
                        {[...Array(5)].map((_, index) => (
                          <Image
                            key={index}
                            src={index < comment.rate ? star : starGrey}
                            width={17}
                            height={17}
                            alt="star rating"
                          />
                        ))}
                      </div>
                      <p className={styles.comment_date}>
                        {formatDate(comment.date)}
                      </p>
                    </div>
                    <p className={styles.client_name}>{comment.full_name}</p>
                  </div>
                  <p className={styles.client_comment}>
                    {cleanAndDecodeString(comment.text)}{" "}
                  </p>
                </div>
              ))
            ) : (
              <p className={styles.no_comments}>{empty("noComments")}</p>
            )}
          </div>
          <button className={styles.leave_comment}>{t("sendComment")}</button>
        </Container>
      </section>

      <section className={styles.similar_tours}>
        <Container>
          <OffersWithMainCard
            offerTitle={tours("sameCars")}
            slides={similarTransferArr}
            content={transferApi}
          />
        </Container>
      </section>

      <section className={styles.best_offers}>
        <Container>
          {homeResultsArr && homeResultsArr.length > 0 ? (
            <OffersBlock
              offerTitle={tours("vacationIdeas")}
              slides={homeResultsArr}
            />
          ) : (
            <></>
          )}
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
              {transferDetails?.images.map((image, index) => (
                <SwiperSlide
                  key={image.id}
                  className={styles.swiper_image}
                  onClick={() => openModal(index)}
                >
                  <img src={image.image} alt={`image-${index + 1}`} />
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
              {transferDetails?.images.map((image, index) => (
                <SwiperSlide
                  key={image.id}
                  className={styles.swiper_image}
                  onClick={() => openModal(index)}
                >
                  <img src={image.image} alt={`image-${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </main>
  );
};

export default transferDetails;
