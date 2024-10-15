import React from "react";
import styles from "./ticket_form.module.css";
import { useTranslations } from "next-intl";

const HotelForm = () => {

    const t = useTranslations("TicketPicker");

  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section}>
        <label htmlFor="country_city">{t("countryCity")}</label>
        <input type="text" name="country_city" id="country_city"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="arrival_date">{t("arrivalDate")}</label>
        <input type="text" name="arrival_date" id="arrival_date"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="departure_date">{t("departureDate")}</label>
        <input type="text" name="departure_date" id="departure_date"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="nights">{t("nights")}</label>
        <input type="text" name="nights" id="nights"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="guests">{t("guests")}</label>
        <input type="text" name="guests" id="guests"/>
      </div>
      <div className={`${styles.input_section} ${styles.button}`}>
        <button>{t("ticketPickerButton")}</button>
      </div>
    </form>
  );
};

export default HotelForm;
