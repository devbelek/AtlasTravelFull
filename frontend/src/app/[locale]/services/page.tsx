import React from "react";
import styles from "./page.module.css";
import TripleImage from "../components/ui/triple_image/TripleImage";
import image_1 from "@/assets/services_page/image_1.jpeg";
import image_2 from "@/assets/services_page/image_2.jpeg";
import image_3 from "@/assets/services_page/image_3.jpeg";
import Container from "../components/layout/container/Container";
import PageLink from "../components/ui/page_link/PageLink";
import { useTranslations } from "next-intl";

const Services = () => {

  const buttons = useTranslations("Buttons");
  const slogan = useTranslations("SectionSlogans");

  return (
    <main className={styles.services_page}>
      <Container>
        <div className={styles.services_list}>
          <div className={styles.services_flex}>
            <div className={styles.services_flex_text_item}>
              <div className={styles.service_flex_item_slogan_block}>
                <h2>{slogan("travel")}</h2>
                <div className={styles.dashed_border}></div>
              </div>

              <h1 className={styles.services_flex_item_title}>
                Визовая поддержка
              </h1>
              <p className={styles.services_flex_item_desc}>
                Наша компания предоставляет полный спектр услуг по визовой
                поддержке для иностранных граждан и компаний. Мы поможем вам с
                подготовкой всех необходимых документов, оформлением визовых
                запросов и консультациями по вопросам пребывания в стране. Наши
                эксперты обеспечат вас актуальной информацией о требованиях к
                визам, сроках их получения и сопутствующих процедурах.
                Независимо от сложности вашей ситуации, мы гарантируем
                профессиональный подход и индивидуальное сопровождение на каждом
                этапе.
              </p>
              <p className={styles.services_flex_item_desc}>
                Обращайтесь к нам, и мы сделаем процесс получения визы
                максимально простым и быстрым!
              </p>
              <PageLink linkTo="/services/1" text={buttons("getDetailsShort")} />
            </div>
            <div className={styles.services_flex_image_item}>
              <TripleImage image1={image_1} image2={image_2} image3={image_3} />
            </div>
          </div>
          <div className={styles.services_flex}>
            <div className={styles.services_flex_image_item}>
              <TripleImage image1={image_1} image2={image_2} image3={image_3} />
            </div>
            <div className={styles.services_flex_text_item}>
              <div className={styles.service_flex_item_slogan_block}>
                <h2>{slogan("develop")}</h2>
                <div className={styles.dashed_border}></div>
              </div>

              <h1 className={styles.services_flex_item_title}>
                Визовая поддержка
              </h1>
              <p className={styles.services_flex_item_desc}>
                Наша компания предоставляет полный спектр услуг по визовой
                поддержке для иностранных граждан и компаний. Мы поможем вам с
                подготовкой всех необходимых документов, оформлением визовых
                запросов и консультациями по вопросам пребывания в стране. Наши
                эксперты обеспечат вас актуальной информацией о требованиях к
                визам, сроках их получения и сопутствующих процедурах.
                Независимо от сложности вашей ситуации, мы гарантируем
                профессиональный подход и индивидуальное сопровождение на каждом
                этапе.
              </p>
              <p className={styles.services_flex_item_desc}>
                Обращайтесь к нам, и мы сделаем процесс получения визы
                максимально простым и быстрым!
              </p>
              <PageLink linkTo="/services/1" text={buttons("getDetailsShort")} />
            </div>
          </div>
          <div className={styles.services_flex}>
            <div className={styles.services_flex_text_item}>
              <div className={styles.service_flex_item_slogan_block}>
                <h2>{slogan("travel")}</h2>
                <div className={styles.dashed_border}></div>
              </div>

              <h1 className={styles.services_flex_item_title}>
                Визовая поддержка
              </h1>
              <p className={styles.services_flex_item_desc}>
                Наша компания предоставляет полный спектр услуг по визовой
                поддержке для иностранных граждан и компаний. Мы поможем вам с
                подготовкой всех необходимых документов, оформлением визовых
                запросов и консультациями по вопросам пребывания в стране. Наши
                эксперты обеспечат вас актуальной информацией о требованиях к
                визам, сроках их получения и сопутствующих процедурах.
                Независимо от сложности вашей ситуации, мы гарантируем
                профессиональный подход и индивидуальное сопровождение на каждом
                этапе.
              </p>
              <p className={styles.services_flex_item_desc}>
                Обращайтесь к нам, и мы сделаем процесс получения визы
                максимально простым и быстрым!
              </p>
              <PageLink linkTo="/services/1" text={buttons("getDetailsShort")} />
            </div>
            <div className={styles.services_flex_image_item}>
              <TripleImage image1={image_1} image2={image_2} image3={image_3} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Services;
