import React, { useState, useEffect, useRef } from "react";
import styles from "./ticket_form.module.css";
import { useTranslations } from "next-intl";
import { axiosGetCities } from "@/services/cities"; // Ваш API запрос для получения городов
import { translate } from "@/constants/locale";

const FlightForm = () => {
  const t = useTranslations("TicketPicker");

  const [cities, setCities] = useState<any[]>([]);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const loadCities = async () => {
    const data = await axiosGetCities();
    setCities(data);
  };

  const handleCitySelect = (
    city: string,
    setCity: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setCity(city);
    setShowFromDropdown(false);
    setShowToDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fromRef.current &&
        !fromRef.current.contains(event.target as Node) &&
        toRef.current &&
        !toRef.current.contains(event.target as Node)
      ) {
        setShowFromDropdown(false);
        setShowToDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section} ref={fromRef}>
        <label htmlFor="from">{t("fromWhere")}</label>
        <input
          type="text"
          name="from"
          id="from"
          value={fromCity}
          onFocus={() => {
            setShowFromDropdown(true);
            loadCities();
          }}
          onChange={(e) => setFromCity(e.target.value)}
        />
        {showFromDropdown && (
          <div className={styles.dropdown}>
            {cities
              .filter((city) =>
                city.name.toLowerCase().includes(fromCity.toLowerCase())
              )
              .map((city) => (
                <div
                  key={city.id}
                  className={styles.dropdown_item}
                  onClick={() => handleCitySelect(city.name, setFromCity)}
                >
                  {translate(city.name_ru, city.name_ky, city.name_en)}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className={styles.input_section} ref={toRef}>
        <label htmlFor="to">{t("toWhere")}</label>
        <input
          type="text"
          name="to"
          id="to"
          value={toCity}
          onFocus={() => {
            setShowToDropdown(true);
            loadCities();
          }}
          onChange={(e) => setToCity(e.target.value)}
        />
        {showToDropdown && (
          <div className={styles.dropdown}>
            {cities
              .filter((city) =>
                city.name.toLowerCase().includes(toCity.toLowerCase())
              )
              .map((city) => (
                <div
                  key={city.id}
                  className={styles.dropdown_item}
                  onClick={() => handleCitySelect(city.name, setToCity)}
                >
                  {translate(city.name_ru, city.name_ky, city.name_en)}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className={styles.input_section}>
        <label htmlFor="to_date">{t("toWhereDate")}</label>
        <input type="text" name="to_date" id="to_date" />
      </div>

      <div className={styles.input_section}>
        <label htmlFor="back_date">{t("toBackDate")}</label>
        <input type="text" name="back_date" id="back_date" />
      </div>

      <div className={styles.input_section}>
        <label htmlFor="passengers_and_class">{t("passengersAndClass")}</label>
        <input type="text" name="passengers_and_class" id="passengers_and_class" />
      </div>

      <div className={`${styles.input_section} ${styles.button}`}>
        <button type="submit">{t("ticketPickerButton")}</button>
      </div>
    </form>
  );
};

export default FlightForm;
