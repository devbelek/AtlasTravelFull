import React from "react";
import styles from "./ticket_form.module.css";
import { useTranslations } from "next-intl";

const TourForm = () => {
  const t = useTranslations("TicketPicker");

  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section}>
        <label htmlFor="from">{t("fromWhere")}</label>
        <input type="text" name="from" id="from" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="to">{t("toWhere")}</label>
        <input type="text" name="to" id="to" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="departure_date">{t("departureDate")}</label>
        <input type="text" name="departure_date" id="departure_date" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="nights">{t("nights")}</label>
        <input type="text" name="nights" id="nights" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="tourists">{t("tourists")}</label>
        <input type="text" name="tourists" id="tourists" />
      </div>
      <div className={`${styles.input_section} ${styles.button}`}>
        <button>{t("ticketPickerButton")}</button>
      </div>
    </form>
  );
};

export default TourForm;
