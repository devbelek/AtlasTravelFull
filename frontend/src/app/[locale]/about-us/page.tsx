"use client";

import React from "react";
import styles from "./page.module.css";
import Container from "../components/layout/container/Container";
import Image from "next/image";

import image_1 from "@/assets/photos_anim/photo_1.jpeg";
import image_2 from "@/assets/photos_anim/photo_2.jpeg";
import image_3 from "@/assets/photos_anim/photo_3.jpeg";
import image_4 from "@/assets/photos_anim/photo_4.jpeg";
import image_5 from "@/assets/photos_anim/photo_5.jpeg";
import image_6 from "@/assets/photos_anim/photo_6.jpeg";

import photo_1 from "@/assets/3407438d256d758b4d89eb2565169df9.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TourCard from "../components/cards/tours_cards/TourCard";
import FaqComponent from "../components/pages/about_page/faq_component/FaqComponent";
import ConsultForm from "../components/default_sections/consult_form/ConsultForm";
import { useTranslations } from "next-intl";

export default function About() {
  const about = useTranslations("AboutPage");
  return (
    <>
      <section className={styles.about_us_block}>
        <Container>
          <div className={styles.about_us_flex}>
            <div className={styles.about_us_info}>
              <h1 className={styles.section_title}>{about("aboutUs")}</h1>
              <p className={styles.section_desc}>
                Atlas Travel — это современная туристическая компания, которая
                предлагает широкий спектр услуг для путешественников, мечтающих
                об уникальных и незабываемых поездках. Мы специализируемся на
                организации индивидуальных туров, корпоративных поездок и
                групповых путешествий по всему миру. Наша миссия — сделать
                каждое ваше путешествие максимально комфортным, безопасным и
                интересным, учитывая все ваши пожелания и потребности.
              </p>
              <p className={styles.section_desc}>
                Сотрудничая с лучшими отелями, авиакомпаниями и местными гидами,
                мы создаем туры, которые полностью соответствуют вашим
                интересам. Будь то пляжный отдых, экскурсионный тур или активное
                приключение — мы сделаем ваше путешествие исключительным.
              </p>
            </div>
            <iframe
              className={styles.about_us_video}
              src="https://www.youtube.com/embed/XhCkptbe7Z4?si=IHAC28OV7JmOefN2"
              frameBorder="0"
              title="Product Overview Video"
              aria-hidden="true"
            />
          </div>
        </Container>
      </section>
      <section className={styles.photos_anim_block}>
        <Container isVisible={true}>
          <div className={styles.photos_anim_inner}>
            <div className={styles.firstIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_1}
                alt="image 1"
              />
            </div>

            <div className={styles.secIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_2}
                alt="image 1"
              />
            </div>
            <div className={styles.thirdIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_3}
                alt="image 1"
              />
            </div>
            <div className={styles.forthIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_4}
                alt="image 1"
              />
            </div>
            <div className={styles.fifthIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_5}
                alt="image 1"
              />
            </div>
            <div className={styles.sixthIm}>
              <Image
                className={`${styles.photos_anim}`}
                src={image_6}
                alt="image 1"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.our_projects_block}>
        <div className={styles.background_block}></div>
        <Container>
          <h2 className={styles.section_title}>{about("ourProjects")}</h2>
          <div className={styles.projects_flex}>
            <div className={styles.our_projects_info}>
              <p className={styles.section_desc}>
                Нам доверяют, потому что за нашими плечами множество успешных
                проектов
              </p>
              <iframe
                className={styles.about_us_video}
                src="https://www.youtube.com/embed/XhCkptbe7Z4?si=IHAC28OV7JmOefN2"
                frameBorder="0"
                title="Product Overview Video"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.our_projects_info} ${styles.swiper_button_block}`}
            >
              <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  665: {
                    slidesPerView: 2,
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
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    alt={"Дом на воде"}
                    title={"Дом на воде"}
                    desc={"Дубай"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    alt={"Дом на воде"}
                    title={"Дом на воде"}
                    desc={"Дубай"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    alt={"Дом на воде"}
                    title={"Дом на воде"}
                    desc={"Дубай"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TourCard
                    imageSrc={photo_1}
                    alt={"Дом на воде"}
                    title={"Дом на воде"}
                    desc={"Дубай"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.faq_block}>
        <Container isVisible={true}>
          <h3 className={styles.section_title}>{about("faqBlockTitle")}</h3>

          <FaqComponent />
        </Container>
      </section>

      <ConsultForm />
    </>
  );
}
