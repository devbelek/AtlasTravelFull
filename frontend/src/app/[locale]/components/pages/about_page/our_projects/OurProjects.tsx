import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Container from "../../../layout/container/Container";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TourCard from "../../../cards/tours_cards/TourCard";
import { useTranslations } from "next-intl";
import { axiosGetOurProjects } from "@/services/about-us";
import { IMAGE_API_URL, YOU_TUBE_URL } from "@/constants/default_api";
import { translate } from "@/constants/locale";
import { youtube_parser } from "@/constants/youtube_convert";
import { Flight, Hotel, Tour, Transfer } from "@/types/tour";

type Project = Tour | Flight | Hotel | Transfer;

interface OurProjects {
  id: number;
  title: string;
  description: string;
  youtube_video_url: string;
  projects: Project[];
}

interface CityInfo {
  id: number;
  name: string;
  name_ru: string;
  name_ky: string;
  name_en: string;
}

interface Image {
  id: number;
  image: string;
}

const OurProjects = () => {
  const about = useTranslations("AboutPage");

  const [ourProjects, setOurProjects] = useState<OurProjects>();
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const ourProjectsArr = await axiosGetOurProjects();
        setOurProjects(ourProjectsArr);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
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
              src={YOU_TUBE_URL + youtube_parser(ourProjects?.youtube_video_url ?? "")}
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

              {ourProjects?.projects.map((tour) => (
                <SwiperSlide key={tour.id}>
                  <TourCard
                    imageSrc={IMAGE_API_URL + tour.image.image}
                    index={tour.id}
                    linkTo={tour.linkTo}
                    title={translate(
                      tour.title_ru,
                      tour.title_ky,
                      tour.title_en
                    )}
                    desc={translate(
                      tour.cityInfo.name_ru,
                      tour.cityInfo.name_ky,
                      tour.cityInfo.name_en
                    )}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
