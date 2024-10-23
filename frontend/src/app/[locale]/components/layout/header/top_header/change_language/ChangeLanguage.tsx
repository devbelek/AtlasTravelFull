"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./change_language.module.css";

import arrowIcon from "@/assets/icons/arrow.svg";
import ruFlag from "@/assets/flags/twemoji_flag-russia.svg";
import kgFlag from "@/assets/flags/twemoji_flag-kyrgyzstan.svg";
import enFlag from "@/assets/flags/twemoji_flag-us-outlying-islands.svg";
import Image, { StaticImageData } from "next/image";

type Language = {
  key: string;
  title: string;
  flag: StaticImageData;
  altTitle: string;
};

const ChangeLanguage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    {
      key: "ru",
      title: "Рус",
      flag: ruFlag,
      altTitle: "Русский флаг",
    },
    {
      key: "en",
      title: "Eng",
      flag: enFlag,
      altTitle: "American flag",
    },
    {
      key: "kg",
      title: "Кыр",
      flag: kgFlag,
      altTitle: "Кыргызстандын желеги",
    },
  ];

  const [rotation, setRotation] = useState(180);

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("currentLanguage") as string) || "ru";
    const language = languages.find((lang) => lang.key === savedLanguage) || languages[0];
    setCurrentLanguage(language);
  }, []);

  const toggleLanguageMenu = () => {
    setOpen(!isOpen);
    setRotation((prevRotation) => prevRotation + 180);
  };

  const selectLanguage = (key: string) => {
    const selectedLanguage = languages.find((lang) => lang.key === key);
    if (selectedLanguage) {
      setCurrentLanguage(selectedLanguage);
      localStorage.setItem("currentLanguage", key);

      const currentPath = window.location.pathname;
      const newPathname = currentPath.replace(/^(\/ru|\/en|\/kg)/, `/${key}`);

      if (!newPathname.startsWith(`/${key}`)) {
        window.location.href = `/${key}${currentPath}`;
      } else {
        window.location.href = newPathname;
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
        setRotation((prevRotation) => prevRotation + 180);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button className={styles.change_language} onClick={toggleLanguageMenu}>
        {currentLanguage && (
          <>
            <Image
              src={currentLanguage.flag}
              width={24}
              height={24}
              alt={currentLanguage.altTitle}
              className={styles.current_language_flag}
            />
            {currentLanguage.title}
          </>
        )}
        <Image
          src={arrowIcon}
          width={10}
          height={6}
          alt="Arrow Icon"
          className={styles.current_language_arrow_icon}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease",
          }}
        />
        {isOpen && (
          <ul className={styles.language_menu}>
            {languages
              .filter((lang) => lang.key !== currentLanguage?.key) 
              .map((lang) => (
                <li
                  className={styles.other_languages}
                  key={lang.key}
                  onClick={() => selectLanguage(lang.key)}
                >
                  <Image
                    src={lang.flag}
                    width={24}
                    height={24}
                    alt={lang.altTitle}
                  />
                  {lang.title}
                </li>
              ))}
          </ul>
        )}
      </button>
    </div>
  );
};

export default ChangeLanguage;
