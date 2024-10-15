"use client";

import Container from "@/app/[locale]/components/layout/container/Container";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import image_1 from "@/assets/blog_page/turtle.jpeg";
import image_2 from "@/assets/blog_page/boat.jpeg";
import image_3 from "@/assets/blog_page/boats.jpeg";
import SocialIconsList from "@/app/[locale]/components/cards/social_icons/SocialIconsList";
import { useTranslations } from "next-intl";

const BlogDetails = () => {
  const images = [image_1, image_2, image_3];

  const t = useTranslations("Footer");

  return (
    <main className={styles.blog_details_page}>
      <Container>
        <h1 className={styles.blog_title}>
          Как провести идеальный день на острове Хорватии
        </h1>
        <Image src={image_1} alt="turtle" className={styles.blog_cover} />

        <div className={styles.blog_info_block}>
          <h2 className={styles.blog_info_title}>
            Не ждите. Цель нашей жизни — быть счастливыми!
          </h2>
          <p className={styles.blog_info_desc}>
            По прибытии ваши чувства будут вознаграждены приятным ароматом масла
            лемонграсса, которым очищают натуральное дерево, найденное по всей
            комнате, создавая расслабляющую атмосферу в пространстве.
          </p>
          <p className={styles.blog_info_desc}>
            Чудесная безмятежность овладела всей моей душой, как эти сладкие
            весенние утра, которыми я наслаждаюсь всем своим сердцем. Я один и
            чувствую очарование существования в этом месте, которое было создано
            для блаженства душ, подобных моей. Я так счастлив, мой дорогой друг,
            так поглощен изысканным.
          </p>
        </div>

        <div className={styles.blog_images_block}>
          <div
            className={`${styles.blog_images_info} ${
              images[1] ? styles.halfWidth : styles.fullWidth
            }`}
          >
            <h3 className={styles.blog_images_title}>
              Главное не то, как долго вы прожили, а то, насколько хорошо вы
              прожили.
            </h3>
            <p className={styles.blog_images_desc}>
              Когда вы будете готовы побаловать себя, ознакомьтесь с
              ассортиментом возможностей для водных видов спорта в
              водно-спортивном центре курорта. Хотите избавиться от стресса на
              воде? На курорте есть каяки, доски для серфинга или скромные
              водные велосипеды. Также доступно снаряжение для сноркелинга,
              чтобы вы могли ощутить постоянно меняющуюся подводную среду.
            </p>
            <p className={styles.blog_images_desc}>
              Посетители гостевого дома не только получают уникальный взгляд на
              место, которое они посещают, но и могут выбрать специальные
              пакеты, недоступные в других отелях. Гостиницы типа «постель и
              завтрак» могут легко сотрудничать с местными предприятиями для
              плавно организованного и высокоперсонализированного отдыха.
              Гостиница Fife and Drum Inn предлагает такие варианты, как пакет
              Historic Triangle, который включает три ночи в гостинице, завтраки
              и входные билеты в исторические города Уильямсбург, Джеймстаун и
              Йорктаун. Гостиницы типа «постель и завтрак» также располагают к
              романтике.
            </p>
            <p className={styles.blog_images_desc}>
              Часть очарования гостевого дома заключается в его уникальности:
              искусство, декор и еда объединены для создания полноценного опыта.
              Например, Fife and Drum сохраняет колониальный стиль этого района
              во всех своих гостевых номерах. Среди особенностей — антикварная
              мебель, элегантные кровати с балдахином в некоторых гостевых
              номерах, а также предметы народного искусства и артефакты периода
              реставрации исторической области, которыми могут насладиться
              гости.
            </p>
          </div>
          {images[1] && (
            <Image src={image_2} alt="boat" className={styles.imageStyle} />
          )}
        </div>

        <div className={styles.blog_images_block}>
          {images[2] && (
            <Image src={image_3} alt="boats" className={styles.imageStyle} />
          )}
          <div
            className={`${styles.blog_images_info} ${
              images[2] ? styles.halfWidth : styles.fullWidth
            }`}
          >
            <h3 className={styles.blog_images_title}>
              Главное не то, как долго вы прожили, а то, насколько хорошо вы
              прожили.
            </h3>
            <p className={styles.blog_images_desc}>
              Когда вы будете готовы побаловать себя, ознакомьтесь с
              ассортиментом возможностей для водных видов спорта в
              водно-спортивном центре курорта. Хотите избавиться от стресса на
              воде? На курорте есть каяки, доски для серфинга или скромные
              водные велосипеды. Также доступно снаряжение для сноркелинга,
              чтобы вы могли ощутить постоянно меняющуюся подводную среду.
            </p>
            <p className={styles.blog_images_desc}>
              Посетители гостевого дома не только получают уникальный взгляд на
              место, которое они посещают, но и могут выбрать специальные
              пакеты, недоступные в других отелях. Гостиницы типа «постель и
              завтрак» могут легко сотрудничать с местными предприятиями для
              плавно организованного и высокоперсонализированного отдыха.
              Гостиница Fife and Drum Inn предлагает такие варианты, как пакет
              Historic Triangle, который включает три ночи в гостинице, завтраки
              и входные билеты в исторические города Уильямсбург, Джеймстаун и
              Йорктаун. Гостиницы типа «постель и завтрак» также располагают к
              романтике.
            </p>
            <p className={styles.blog_images_desc}>
              Часть очарования гостевого дома заключается в его уникальности:
              искусство, декор и еда объединены для создания полноценного опыта.
              Например, Fife and Drum сохраняет колониальный стиль этого района
              во всех своих гостевых номерах. Среди особенностей — антикварная
              мебель, элегантные кровати с балдахином в некоторых гостевых
              номерах, а также предметы народного искусства и артефакты периода
              реставрации исторической области, которыми могут насладиться
              гости.
            </p>
          </div>
        </div>

        <div className={styles.share_block}>
          <div className={styles.dashed_border}></div>
          <div className={styles.share_block_inner}>
            <span>{t("share")}:</span>
            <SocialIconsList />
          </div>
          <div className={styles.dashed_border}></div>
        </div>
      </Container>
    </main>
  );
};

export default BlogDetails;
