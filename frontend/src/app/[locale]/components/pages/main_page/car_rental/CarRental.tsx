import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Container from "../../../layout/container/Container";
import PageLink from "../../../ui/page_link/PageLink";
import { useTranslations } from "next-intl";
import TripleImage from "../../../ui/triple_image/TripleImage";
import { axiosGetCarRental } from "@/services/rent-of-car";
import { StaticImageData } from "next/image";
import { useLocale } from "@/constants/locale";

type ImageObject = {
  id: number;
  image: StaticImageData;
};

type DescriptionObject = {
  id: number;
  description: string;
};

type CarRentalData = {
  title: string;
  images: ImageObject[];
  descriptions: DescriptionObject[];
};

const CarRental = () => {
  const locale = useLocale();
  const button = useTranslations("Buttons");
  const [carRentalData, setCarRentalData] = useState<CarRentalData | null>(
    null
  );

  const [error, setError] = useState("");

  const removeHtmlTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const results = await axiosGetCarRental();
        setCarRentalData(results);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.cars_block}>
      <Container>
        <div className={styles.car_block_inner}>
          <div className={styles.car_images_block}>
            {carRentalData && carRentalData.images && (
              <TripleImage
                image1={carRentalData.images[0].image}
                image2={carRentalData.images[1].image}
                image3={carRentalData.images[2].image}
              />
            )}
          </div>
          <div className={styles.car_desc_block}>
            <div className={styles.title_block}>
              <h4>Путешествуйте</h4>
              <span className={styles.stroke}></span>
            </div>

            <h4 className={styles.car_block_title}>
              {carRentalData ? carRentalData.title : "Загрузка..."}
            </h4>
            <ul className={styles.desc_list}>
              {carRentalData?.descriptions.map((desc, index) => (
                <li key={index} className={styles.desc_list_item}>
                  {removeHtmlTags(desc.description)}
                </li>
              ))}
            </ul>

            <PageLink linkTo={locale + "/car-rental"} text={button("link")} />
          </div>
        </div>
        {error && <div className={styles.error_message}>{error}</div>}
      </Container>
    </section>
  );
};

export default CarRental;
