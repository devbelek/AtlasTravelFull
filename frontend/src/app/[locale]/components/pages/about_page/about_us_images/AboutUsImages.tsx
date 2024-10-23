"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Container from "../../../layout/container/Container";
import Image from "next/image";
import { axiosGetAboutUsImages } from "@/services/about-us";
import image1 from "@/assets/photos_anim/photo_1.jpeg";

interface AboutUsImagesInerface {
  id: number;
  image: string;
  order: number;
}

const AboutUsImages = () => {
  const [info, setInfo] = useState<AboutUsImagesInerface[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const aboutUs = await axiosGetAboutUsImages();
        setInfo(aboutUs);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.photos_anim_block}>
      <Container isVisible={true}>
        <div className={styles.photos_anim_inner}>
          <div className={styles.firstIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[0]?.image ?? image1}
              alt="about-us-image 1"
              quality={100}
              width={320}
              height={500}
            />
          </div>

          <div className={styles.secIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[1]?.image ?? image1}
              alt="about-us-image 2"
              quality={100}
              width={350}
              height={450}
            />
          </div>
          <div className={styles.thirdIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[2]?.image ?? image1}
              alt="about-us-image 3"
              quality={100}
              width={260}
              height={300}
            />
          </div>
          <div className={styles.forthIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[3]?.image ?? image1}
              alt="about-us-image 4"
              quality={100}
              width={260}
              height={300}
            />
          </div>
          <div className={styles.fifthIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[4]?.image ?? image1}
              alt="about-us-image 5"
              quality={100}
              width={350}
              height={450}
            />
          </div>
          <div className={styles.sixthIm}>
            <Image
              className={`${styles.photos_anim}`}
              src={info[5]?.image ?? image1}
              alt="about-us-image 6"
              quality={100}
              width={320}
              height={500}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsImages;
