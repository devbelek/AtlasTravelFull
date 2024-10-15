import React from "react";
import styles from "./ticket_form.module.css";
import { useTranslations } from "next-intl";

const TransferForm = () => {
  const t = useTranslations("TicketPicker");

  return (
    <form className={styles.ticket_picker_form}>
      <div className={styles.input_section}>
        <label htmlFor="country_city">{t("countryCity")}</label>
        <input type="text" name="country_city" id="country_city" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="car_mark">{t("carBrand")}</label>
        <input type="text" name="car_mark" id="car_mark" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="pick_up_date">{t("getDate")}</label>
        <input type="text" name="pick_up_date" id="pick_up_date" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="drop_off_date">{t("giveDate")}</label>
        <input type="text" name="drop_off_date" id="drop_off_date" />
      </div>
      <div className={styles.input_section}>
        <label htmlFor="passengers">{t("passengers")}</label>
        <input type="text" name="passengers" id="passengers" />
      </div>
      <div className={`${styles.input_section} ${styles.button}`}>
        <button>{t("ticketPickerButton")}</button>
      </div>
    </form>
  );
};

export default TransferForm;
