import React from "react";
import styles from "./bottom_footer.module.css";
import remotionLogo from "@/assets/remotion_logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const BottomFooter = () => {

  const t = useTranslations("Footer");

  return (
    <div className={styles.bottom_footer_block}>
      <p className={styles.copyright_text}>
        © {t("copyrights")} 
      </p>
      <p className={styles.remotion_ad}>
        {t("remotion")}
        <Image src={remotionLogo} width={195} height={50} alt="remotion logo" />
      </p>
    </div>
  );
};

export default BottomFooter;
