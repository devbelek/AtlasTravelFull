"use client";

import Container from "@/app/[locale]/components/layout/container/Container";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

import image_1 from "@/assets/blog_page/turtle.jpeg";
import image_2 from "@/assets/blog_page/boat.jpeg";
import image_3 from "@/assets/blog_page/boats.jpeg";
import SocialIconsList from "@/app/[locale]/components/cards/social_icons/SocialIconsList";
import { useTranslations } from "next-intl";
import { axiosGetBlogs, axiosGetBlogsDetails } from "@/services/blogs";
import { usePathname } from "next/navigation";
import { BlogPost } from "@/types/blog";
import { translate } from "@/constants/locale";

const BlogDetails = () => {
  const images = [image_1, image_2, image_3];

  const t = useTranslations("Footer");

  const [blogs, setBlogs] = useState<BlogPost>();
  const [error, setError] = useState("");

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  if (!isNaN(Number(id))) {
    useEffect(() => {
      const loadData = async () => {
        try {
          const blogsArr = await axiosGetBlogsDetails(id ?? "");
          setBlogs(blogsArr);
        } catch (error) {
          console.error("Ошибка загрузки данных: ", error);
          setError("Не удалось загрузить данные");
        }
      };

      loadData();
    }, [id]);
  } else {
    setError("Некорректный идентификатор блога");
  }

  return (
    <main className={styles.blog_details_page}>
      <Container>
        <h1 className={styles.blog_title}>
          {translate(
            blogs?.title_ru ?? blogs?.title ?? "",
            blogs?.title_ky ?? blogs?.title ?? "",
            blogs?.title_en ?? blogs?.title ?? ""
          )}
        </h1>
        <Image
          src={blogs?.main_image ?? image_1}
          width={1290}
          height={600}
          quality={100}
          alt="turtle"
          className={styles.blog_cover}
        />

        <div className={styles.blog_info_block}>
          <h2 className={styles.blog_info_title}>
            {blogs?.second_title ??
              translate(
                blogs?.second_title_ru ?? blogs?.second_title ?? "",
                blogs?.second_title_ky ?? blogs?.second_title ?? "",
                blogs?.second_title_en ?? blogs?.second_title ?? ""
              )}
          </h2>

          <p
            className={styles.blog_info_desc}
            dangerouslySetInnerHTML={{
              __html:
                blogs?.content ??
                translate(
                  blogs?.content_ru ?? blogs?.content ?? "",
                  blogs?.content_ky ?? blogs?.content ?? "",
                  blogs?.content_en ?? blogs?.content ?? ""
                ),
            }}
          ></p>
        </div>

        {blogs?.sections.map((blog) => (
          <div
            className={`${styles.blog_images_block} ${
              blog.image ? styles.maxHeight : styles.textHeght
            }`}
          >
            <div
              className={`${styles.blog_images_info} ${
                blog.image ? styles.halfWidth : styles.fullWidth
              }`}
            >
              <h3 className={styles.blog_images_title}>
                {translate(
                  blog?.title_ru ?? blog?.title ?? "",
                  blog?.title_ky ?? blog?.title ?? "",
                  blog?.title_en ?? blog?.title ?? ""
                )}
              </h3>
              <p
                className={styles.blog_images_desc}
                dangerouslySetInnerHTML={{
                  __html:
                    blog?.content ??
                    translate(
                      blog?.content_ru ?? blog?.content ?? "",
                      blog?.content_ky ?? blog?.content ?? "",
                      blog?.content_en ?? blog?.content ?? ""
                    ),
                }}
              ></p>
            </div>
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                className={styles.imageStyle}
              />
            )}
          </div>
        ))}

        <div className={styles.share_block}>
          <div className={styles.dashed_border}></div>
          <div className={styles.share_block_inner}>
            <span>{t("share")}:</span>
            <SocialIconsList />
          </div>
          <div className={styles.dashed_border}></div>
        </div>
      </Container>
    </main>
  );
};

export default BlogDetails;
