"use client";

import React, { useEffect, useState } from "react";
import styles from "./consult_form.module.css";
import Image from "next/image";
import person from "@/assets/person/61707a9cb228242dcf1d7bf90c3323c9.png";
import phone from "@/assets/icons/carbon_phone.svg";
import Whatsapp from "../../cards/social_icons/Whatsapp";
import Telegram from "../../cards/social_icons/Telegram";
import Instagram from "../../cards/social_icons/Instagram";
import Container from "../../layout/container/Container";
import { useTranslations } from "next-intl";
import { axiosGetConsultant, Consultant } from "@/services/consultant";
import { axiosPostNumberConsultant } from "@/services/consultant";

const ConsultForm = () => {
  const t = useTranslations("ConsultSection");
  const button = useTranslations("Buttons");
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const results = await axiosGetConsultant();
        setConsultant(results);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const phoneRegex = /^\d+$/;

    if (!phoneRegex.test(phoneNumber)) {
      setError("Номер телефона должен содержать только цифры");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axiosPostNumberConsultant(phoneNumber);
      if (response) {
        setSuccess(true);
      } else {
        setError("Ошибка при отправке.");
      }
    } catch (err) {
      setError("Ошибка при отправке.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.request_block}>
      <Container>
        <div className={styles.request_block_inner}>
          <div className={styles.form_block}>
            <h4 className={styles.form_block_title}>
              {t("consultSectionTitle")}
            </h4>
            <p className={styles.form_block_desc}>{t("consultSectionDesc")}</p>

            <form className={styles.request_form} onSubmit={handleSubmit}>
              <input
                type="tel"
                placeholder={t("consultSectionInputPlaceholder")}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className={styles.request_form_input}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : button("send")}
              </button>
            </form>
            {error && <p className={styles.message}>{error}</p>}
            {success && (
              <p className={styles.message}>{t("consultRequestSuccess")}</p>
            )}
          </div>

          <div className={styles.consultant_block}>
            <Image
              className={styles.consultant_image}
              src={person}
              alt={`${consultant?.surname} ${consultant?.name}`}
              quality={100}
            />

            <div className={styles.consultant_info}>
              <p className={styles.consultant_name}>
                {consultant?.surname} {consultant?.name}
              </p>
              <p className={styles.consultant_work}>{t("job")}</p>
              <p className={styles.consultant_phone}>
                <Image src={phone} width={20} height={20} alt="Phone Icon" />
                {consultant?.phone_number}
              </p>
              <div className={styles.consultant_contacts}>
                <Whatsapp href={consultant?.whatsapp} />
                <Telegram href={consultant?.telegram} />
                <Instagram href={consultant?.instagram} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConsultForm;
