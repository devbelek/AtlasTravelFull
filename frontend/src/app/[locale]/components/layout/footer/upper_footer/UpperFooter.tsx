"use client";

import React from "react";
import styles from "./upper_footer.module.css";
import Image from "next/image";
import logo from "@/assets/logo_dark.svg";
import Link from "next/link";

import phoneIcon from "@/assets/icons/hugeicons_call.svg";
import mailIcon from "@/assets/icons/hugeicons_mail-01.svg";
import geoIcon from "@/assets/icons/hugeicons_location-05.svg";
import SocialIconsList from "@/app/[locale]/components/cards/social_icons/SocialIconsList";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const UpperFooter = () => {
  let locale: string;

  const footer = useTranslations("Footer");
  const t = useTranslations("Header");

  const pathname = usePathname();
  if (pathname.includes("ru")) {
    locale = "/ru";
  } else if (pathname.includes("en")) {
    locale = "/en";
  } else {
    locale = "/kg";
  }

  return (
    <div className={styles.upper_footer_block}>
      <div className={styles.company_info}>
        <Image
          className={styles.company_logo}
          src={logo}
          width={350}
          height={50}
          quality={100}
          alt="atlas logo"
        />

        <SocialIconsList />

        <nav className={styles.politic_nav}>
          <ul className={styles.politic_link_list}>
            <li className={styles.politic_link_list_item}>
              <Link
                className={styles.politic_link}
                href={locale + "/privacy-policy"}
              >
                {footer("privacyPolicy")}
              </Link>
            </li>
            <li className={styles.politic_link_list_item}>
              <Link
                className={styles.politic_link}
                href={locale + "/user-agreement"}
              >
                {footer("userAgreement")}
              </Link>
            </li>
            <li className={styles.politic_link_list_item}>
              <Link
                className={styles.politic_link}
                href={locale + "/return-policy"}
              >
                {footer("returnPolicy")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.company_contacts}>
        <h6 className={styles.section_title}>{t("contacts")}</h6>
        <ul className={styles.contacts_list}>
          <li className={styles.contacts_list_item}>
            <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
            +996 700 123 123
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
            +996 700 123 123
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={mailIcon} alt="Mail Icon" width={24} height={24} />
            email@gmail.com
          </li>
          <li className={styles.contacts_list_item}>
            <Image src={geoIcon} alt="Geo Icon" width={24} height={24} />
            г.Бишкек, ул.Горького 14
          </li>
        </ul>
      </div>
      <div className={styles.company_menu}>
        <h6 className={styles.section_title}>{footer("menu")}</h6>
        <ul className={styles.menu_list}>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={"/"}>
              {t("main")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/about-us"}>
              {t("about")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/tours"}>
              {t("tours")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/flights"}>
              {t("flights")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/hotels"}>
              {t("hotels")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/transfer"}>
              {t("transfer")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/blog"}>
              {t("blog")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/services"}>
              {t("services")}
            </Link>
          </li>
          <li className={styles.menu_list_item}>
            <Link className={styles.menu_link} href={locale + "/contacts"}>
              {t("contacts")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperFooter;
