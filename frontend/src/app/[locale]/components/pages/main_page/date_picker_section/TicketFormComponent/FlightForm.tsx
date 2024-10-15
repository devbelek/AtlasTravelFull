import React from "react";
import styles from "./ticket_form.module.css";
import { useTranslations } from "next-intl";

const FlightForm = () => {

  const t = useTranslations("TicketPicker");

  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section}>
        <label htmlFor="from">{t("fromWhere")}</label>
        <input type="text" name="from" id="from"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="to">{t("toWhere")}</label>
        <input type="text" name="to" id="to"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="to_date">{t("toWhereDate")}</label>
        <input type="text" name="to_date" id="to_date"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="back_date">{t("toBackDate")}</label>
        <input type="text" name="back_date" id="back_date"/>
      </div>
      <div className={styles.input_section}>
        <label htmlFor="passangers_and_class">{t("passengersAndClass")}</label>
        <input type="text" name="passangers_and_class" id="passangers_and_class"/>
      </div>
      <div className={`${styles.input_section} ${styles.button}`}>
        <button>{t("ticketPickerButton")}</button>
      </div>
    </form>
  );
};

export default FlightForm;
