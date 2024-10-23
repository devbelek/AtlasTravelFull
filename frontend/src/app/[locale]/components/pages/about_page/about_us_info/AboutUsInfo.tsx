"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Container from "../../../layout/container/Container";
import { axiosGetAboutUs } from "@/services/about-us";
import { translate } from "@/constants/locale";
import { youtube_parser } from "@/constants/youtube_convert";
import { YOU_TUBE_URL } from "@/constants/default_api";

interface AboutUsImage {
  id: number;
  image: string;
  order: number;
  about_us: number;
}

interface AboutUs {
  id: number;
  images: AboutUsImage[];
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  youtube_video_url: string;
}

const AboutUsInfo = () => {
  const [info, setInfo] = useState<AboutUs>();
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const aboutUs = await axiosGetAboutUs();
        setInfo(aboutUs);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.about_us_block}>
      <Container>
        <div className={styles.about_us_flex}>
          <div className={styles.about_us_info}>
            <h1 className={styles.section_title}>
              {translate(info?.title_ru ?? "", info?.title_ky, info?.title_en)}
            </h1>
            <p
              className={styles.section_desc}
              dangerouslySetInnerHTML={{
                __html: translate(
                  info?.description_ru ?? "",
                  info?.description_ky,
                  info?.description_en
                ),
              }}
            ></p>
          </div>
          <iframe
            className={styles.about_us_video}
            src={YOU_TUBE_URL + youtube_parser(info?.youtube_video_url ?? "")}
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsInfo;
