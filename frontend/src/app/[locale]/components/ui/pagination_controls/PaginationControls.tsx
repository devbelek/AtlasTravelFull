"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination_controls.module.css";

interface PaginationControlsProps {
  itemQuantity: number; // Общее количество элементов
  url: string; // URL для навигации
  per_page: number; // Количество элементов на странице
}

const PaginationControls: FC<PaginationControlsProps> = ({
  itemQuantity,
  url,
  per_page,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1", 10); // Текущая страница
  const totalPages = Math.ceil(itemQuantity / per_page); // Общее количество страниц

  const handlePageChange = (newPage: number) => {
    router.push(url + `?page=${newPage}&per_page=${per_page}`, {
      scroll: false,
    });

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination_buttons_block}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pagination_button} ${
              page === index + 1 ? styles.active : ""
            }`}
            disabled={page === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationControls;
