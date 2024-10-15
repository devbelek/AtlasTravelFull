"use client";

import React, { useEffect, useState } from "react";
import styles from "./bottom_header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const BottomHeader = () => {
  const [activeNav, setActiveNav] = useState("main");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  let locale: string;

  if (pathname.includes("ru")) {
    locale = "/ru";
  } else if (pathname.includes("en")) {
    locale = "/en";
  } else {
    locale = "/kg";
  }

  const t = useTranslations('Header');

  const navArr = [
    {
      title: t('main'),
      pathname: "/",
    },
    {
      title: t('about'),
      pathname: "/about-us",
    },
    {
      title: t('tours'),
      pathname: "/tours",
    },
    {
      title: t('flights'),
      pathname: "/flights",
    },
    {
      title: t('hotels'),
      pathname: "/hotels",
    },
    {
      title: t('transfer'),
      pathname: "/car-rental",
    },
    {
      title: t('blog'),
      pathname: "/blog",
    },
    {
      title: t('services'),
      pathname: "/services",
    },
    {
      title: t('contacts'),
      pathname: "/contacts",
    },
  ];

  navArr.forEach((navPathname) => {
    navPathname.pathname = locale + navPathname.pathname;
  });

  const handleLinkClick = (navTitle: string) => {
    setActiveNav(navTitle);
    setIsSidebarOpen(false);
  };

  const toggleSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const currentNav = navArr.find((item) => {
      return (
        pathname === item.pathname || pathname.startsWith(item.pathname + "/")
      );
    });

    if (currentNav) setActiveNav(currentNav.title);
  }, [pathname]);

  return (
    <div className={styles.bottom_header}>
      <Link href="/">
        <Image
          className={styles.header_logo}
          src={logo}
          width={245}
          height={37.5}
          alt="Atlas Travel Logo"
          layout="responsive"
        />
      </Link>
      <nav>
        <ul
          className={`${styles.global_nav_list} ${
            isSidebarOpen ? styles.open : ""
          }`}
        >
          {navArr.map((item) => (
            <li className={styles.global_nav_list_item} key={item.title}>
              <Link
                className={[
                  styles.global_nav_link,
                  activeNav === item.title ? styles.active_nav : "",
                ].join(" ")}
                href={item.pathname}
                onClick={() => handleLinkClick(item.title)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.nav_aside_button} onClick={toggleSideBar}>
        <div className={styles.hamburger_icon} id="icon">
          <div
            className={`${styles.icon_1} ${isSidebarOpen ? styles.a : ""}`}
            id="a"
          ></div>
          <div
            className={`${styles.icon_2} ${isSidebarOpen ? styles.c : ""}`}
            id="b"
          ></div>
          <div
            className={`${styles.icon_3} ${isSidebarOpen ? styles.b : ""}`}
            id="c"
          ></div>

          <div className={styles.clear}></div>
        </div>
      </button>
    </div>
  );
};

export default BottomHeader;
