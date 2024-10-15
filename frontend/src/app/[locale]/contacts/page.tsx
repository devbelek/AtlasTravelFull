import React from "react";
import styles from "./page.module.css";
import Container from "../components/layout/container/Container";
import mapImage from "@/assets/map.png";
import Image from "next/image";
import SocialIconsList from "../components/cards/social_icons/SocialIconsList";
import ConsultForm from "../components/default_sections/consult_form/ConsultForm";
import { useTranslations } from "next-intl";

const Contacts = () => {

  const t = useTranslations("Header");

  return (
    <main className={styles.contacts_page}>
      <section className={styles.contacts_block}>
        <div className={styles.background_block}></div>
        <Container>
          <div className={styles.contacts_block_inner}>
            <div className={styles.contacts_map}>
              <Image src={mapImage} alt="Map" />
            </div>

            <div className={styles.contacts_info_block}>
              <h1 className={styles.contacts_title}>{t("contacts")}</h1>
              <p className={styles.contacts_desc}>
                Мы будем рады помочь вам с выбором тура, бронированием и любыми
                вопросами, связанными с путешествиями!
              </p>
              <p className={styles.contacts_desc}>
                Мы всегда на связи и готовы ответить на любые ваши вопросы!
                Свяжитесь с нами удобным для вас способом:
              </p>

              <div className={styles.contacts_flex}>
                <div className={styles.contacts_flex_item}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0013 28.3333C22.3651 28.3333 28.3346 22.3638 28.3346 15C28.3346 7.63619 22.3651 1.66666 15.0013 1.66666C7.63751 1.66666 1.66797 7.63619 1.66797 15C1.66797 22.3638 7.63751 28.3333 15.0013 28.3333Z"
                      stroke="#F1A018"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9.66666V15L17.6667 17.6667"
                      stroke="#F1A018"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className={styles.contacts_flex_item_inner}>
                    <h2 className={styles.contacts_flex_title}>Режим работы</h2>
                    <span className={styles.contacts_flex_desc}>
                      Понедельник – пятница <br /> 9:00 - 21:00
                    </span>
                  </div>
                </div>
                <div className={styles.contacts_flex_item}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.14834 9.95167C2.35834 8.575 1.97667 7.45 1.74667 6.31C1.40667 4.62333 2.18501 2.97583 3.47417 1.92417C4.01917 1.48 4.64417 1.6325 4.96667 2.21L5.69417 3.51583C6.27084 4.55083 6.55917 5.0675 6.50251 5.61583C6.44501 6.165 6.05584 6.61167 5.27834 7.505L3.14834 9.95167ZM3.14834 9.95167C4.74751 12.74 7.25667 15.2517 10.0483 16.8517M10.0483 16.8517C11.4258 17.6417 12.55 18.0233 13.69 18.2533C15.3767 18.5933 17.0242 17.815 18.075 16.5258C18.52 15.9808 18.3675 15.3558 17.79 15.0333L16.4842 14.3058C15.4492 13.7292 14.9325 13.4408 14.3842 13.4975C13.835 13.555 13.3883 13.9442 12.495 14.7217L10.0483 16.8517Z"
                      stroke="#F1A018"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={styles.contacts_flex_item_inner}>
                    <h2 className={styles.contacts_flex_title}>Телефон</h2>
                    <span className={styles.contacts_flex_desc}>
                      +996 123 432 123 <br />
                      +996 123 432 123
                    </span>
                  </div>
                </div>
                <div className={styles.contacts_flex_item}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66666 6L9.57966 9.917C12.1287 11.361 13.2047 11.361 15.7537 9.917L22.6667 6"
                      stroke="#F1A018"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.68265 13.4761C2.74765 16.5411 2.78065 18.0741 3.91165 19.2091C5.04265 20.3451 6.61665 20.3841 9.76565 20.4631C11.7057 20.5131 13.6277 20.5131 15.5677 20.4631C18.7167 20.3841 20.2906 20.3451 21.4216 19.2091C22.5526 18.0741 22.5857 16.5411 22.6517 13.4761C22.6717 12.4901 22.6717 11.5101 22.6517 10.5241C22.5857 7.45908 22.5526 5.92608 21.4216 4.79108C20.2906 3.65508 18.7167 3.61608 15.5677 3.53708C13.634 3.48829 11.6993 3.48829 9.76565 3.53708C6.61665 3.61608 5.04265 3.65508 3.91165 4.79108C2.78065 5.92608 2.74765 7.45908 2.68165 10.5241C2.6606 11.508 2.6616 12.4922 2.68265 13.4761Z"
                      stroke="#F1A018"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={styles.contacts_flex_item_inner}>
                    <h2 className={styles.contacts_flex_title}>
                      Электронная почта
                    </h2>
                    <span className={styles.contacts_flex_desc}>
                      email@gmail.com
                    </span>
                  </div>
                </div>
                <div className={styles.contacts_flex_item}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1667 9C15.1667 9.66304 14.9033 10.2989 14.4344 10.7678C13.9656 11.2366 13.3297 11.5 12.6667 11.5C12.0036 11.5 11.3677 11.2366 10.8989 10.7678C10.43 10.2989 10.1667 9.66304 10.1667 9C10.1667 8.33696 10.43 7.70107 10.8989 7.23223C11.3677 6.76339 12.0036 6.5 12.6667 6.5C13.3297 6.5 13.9656 6.76339 14.4344 7.23223C14.9033 7.70107 15.1667 8.33696 15.1667 9Z"
                      stroke="#F1A018"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6666 20C18.6666 21.105 15.9806 22 12.6666 22C9.35265 22 6.66665 21.105 6.66665 20M13.9236 17.494C13.5859 17.819 13.1354 18.0005 12.6666 18.0005C12.1979 18.0005 11.7474 17.819 11.4096 17.494C8.32065 14.501 4.18165 11.158 6.19965 6.304C7.29265 3.679 9.91265 2 12.6666 2C15.4206 2 18.0416 3.68 19.1336 6.304C21.1496 11.151 17.0206 14.511 13.9236 17.494Z"
                      stroke="#F1A018"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={styles.contacts_flex_item_inner}>
                    <h2 className={styles.contacts_flex_title}>Адрес</h2>

                    <span className={styles.contacts_flex_desc}>
                      г.Бишкек, ул.Горького 14
                    </span>
                  </div>
                </div>
              </div>

              <SocialIconsList />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.consultation_block}>
        <ConsultForm />
      </section>
    </main>
  );
};

export default Contacts;
