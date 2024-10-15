import React from "react";
import styles from "./darker_filter.module.css";

interface DarkerFilterProps {
  isAllowHover?: boolean;
}

const DarkerFilter: React.FC<DarkerFilterProps> = ({ isAllowHover = false }) => {
  return (
    <div
      className={`${styles.darker_filter} ${isAllowHover ? styles.allow_hover : ""}`}
    ></div>
  );
};

export default DarkerFilter;
