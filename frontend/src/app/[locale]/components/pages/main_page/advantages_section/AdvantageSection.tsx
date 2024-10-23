import React, { useEffect, useState } from "react";
import AdvantageCard from "./advantages_card/AdvantageCard";
import styles from "./styles.module.css";
import Container from "../../../layout/container/Container";
import { useTranslations } from "next-intl";
import { axiosGetBenefits } from "@/services/benefits";
import { translate } from "@/constants/locale";

interface Benefit {
  id: number;
  icon: string;
  title: string;
  title_ru: string;
  title_ky: string;
  title_en: string;
  description: string;
  description_ru: string;
  description_ky: string;
  description_en: string;
  order: number;
  max_width: number;
  max_height: number;
  quality: number;
}

const AdvantageSection = () => {
  const t = useTranslations("BenefitsSection");

  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const benefitsArr = await axiosGetBenefits();
        setBenefits(benefitsArr);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.advantages_block}>
      <h4 className={styles.section_title}>{t("title")}</h4>
      <div className={styles.advantages_block_inner}>
        <Container isVisible={true}>
          <div className={styles.advantages_flex}>
            {benefits.map((benefit) => (
              <div className={styles.advantages_flex_item} key={benefit.id}>
                <AdvantageCard
                  imageSrc={benefit.icon}
                  alt={`${benefit.title} icon`}
                  title={translate(
                    benefit.title_ru,
                    benefit.title_ky,
                    benefit.title_en
                  )}
                  desc={translate(
                    benefit.description_ru,
                    benefit.description_ky,
                    benefit.description_en
                  )}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AdvantageSection;
