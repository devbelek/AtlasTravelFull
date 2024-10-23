import React, { useEffect, useState } from "react";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import Instagram from "./Instagram";
import TikTok from "./TikTok";
import FaceBook from "./FaceBook";
import YouTube from "./YouTube";
import styles from "./social_icons.module.css";
import { axiosGetContacts } from "@/services/contacts";

interface SocialIconsListProps {
  whatsAppLink: string;
  telegramLink: string;
  instagramLink: string;
  tiktokLink: string;
  facebookLink: string;
  youtubeLink: string;
}

const SocialIconsList = () => {
  const [contacts, setContacts] = useState<SocialIconsListProps>();
  const [error, setError] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const contactsInfo = await axiosGetContacts();
        setContacts({
          whatsAppLink: contactsInfo[0].whatsapp,
          telegramLink: contactsInfo[0].telegram,
          instagramLink: contactsInfo[0].instagram,
          tiktokLink: contactsInfo[0].tiktok,
          facebookLink: contactsInfo[0].facebook,
          youtubeLink: contactsInfo[0].youtube,
        });
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <ul className={styles.icons_list}>
      {contacts?.whatsAppLink && (
        <li>
          <Whatsapp href={contacts.whatsAppLink} />
        </li>
      )}
      {contacts?.telegramLink && (
        <li>
          <Telegram href={contacts.telegramLink} />
        </li>
      )}
      {contacts?.instagramLink && (
        <li>
          <Instagram href={contacts.instagramLink} />
        </li>
      )}
      {contacts?.tiktokLink && (
        <li>
          <TikTok href={contacts.tiktokLink} />
        </li>
      )}
      {contacts?.facebookLink && (
        <li>
          <FaceBook href={contacts.facebookLink} />
        </li>
      )}
      {contacts?.youtubeLink && (
        <li>
          <YouTube href={contacts.youtubeLink} />
        </li>
      )}
    </ul>
  );
};

export default SocialIconsList;
