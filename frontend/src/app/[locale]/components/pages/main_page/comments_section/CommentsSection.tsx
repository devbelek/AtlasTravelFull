import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Container from "../../../layout/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import { axiosGetComments } from "@/services/comments_section";
import Image from "next/image"; 
import star from "@/assets/icons/Star 4.svg";
import starGrey from "@/assets/icons/Star 5.svg";

interface Comment {
  id: number;
  rate: number;
  full_name: string;
  phone_number: string | null;
  text: string;
  date: string;
  is_approved: boolean;
}

const CommentsSection = () => {
  const t = useTranslations("OffersSwiperTitle");
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const results = await axiosGetComments();
        const cleanedComments = results.map((comment: Comment) => ({
          ...comment,
          text: comment.text.replace(/<\/?p>/g, ""), 
        }));

        setComments(cleanedComments);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.comments_block}>
      <Container>
        <div className={styles.comments_block_swiper}>
          <h2 className={styles.offer_title}>{t("comments")}</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              665: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: `.${styles.swiper_button_prev}`,
              nextEl: `.${styles.swiper_button_next}`,
            }}
            className={styles.swiper_comment_block}
          >
            <div className={styles.swiper_button_prev}>
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth={2} />
              </svg>
            </div>
            <div className={styles.swiper_button_next}>
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth={2} />
              </svg>
            </div>
            {comments.map((comment) => (
              <SwiperSlide key={comment.id} className={styles.comment_block}>
                <div className={styles.clent_info_block}>
                  <div className={styles.clent_info}>
                    <p className={styles.client_name}>{comment.full_name}</p>
                    <div className={styles.client_rate}>
                      {[...Array(5)].map((_, index) => (
                        <Image
                          key={index}
                          src={index < comment.rate ? star : starGrey}
                          width={17}
                          height={17}
                          alt="star rating"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className={styles.client_comment}
                  dangerouslySetInnerHTML={{ __html: comment.text }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default CommentsSection;
