"use client";

import React, { useEffect, useState } from "react";
import styles from "../privacy.module.css";
import Container from "../components/layout/container/Container";
import { Privacy } from "@/types/privacy";
import { axiosGetReturnPolicy } from "@/services/privacy";
import { translate } from "@/constants/locale";

const ReturnPolicyPage = () => {
  const [info, setInfo] = useState<Privacy>();
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const privacyPolicy = await axiosGetReturnPolicy();
        setInfo(privacyPolicy[0]);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <main className={styles.policy_page}>
      <Container>
        <h1 className={styles.page_title}>
          {translate(info?.title_ru ?? "", info?.title_ky, info?.title_en)}
        </h1>
        <p
          className={styles.page_desc}
          dangerouslySetInnerHTML={{
            __html: translate(
              info?.content_ru ?? "",
              info?.content_ky,
              info?.content_en
            ),
          }}
        ></p>
      </Container>
    </main>
  );
};

export default ReturnPolicyPage;
