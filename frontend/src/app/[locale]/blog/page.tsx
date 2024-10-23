"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import BlogCard from "../components/cards/blog_cards/BlogCard";
import Container from "../components/layout/container/Container";
import { axiosGetBlogs } from "@/services/blogs";
import { BlogPost } from "@/types/blog";
import { translate } from "@/constants/locale";
const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const blogsArr = await axiosGetBlogs();
        setBlogs(blogsArr);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <main className={styles.blog_page}>
      <Container>
        <div className={styles.blog_list}>
        {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          index={blog.id}
          src={blog.main_image}
          alt={blog.title}
          title={translate(blog.title_ru, blog.title_ky, blog.title_en ?? "")}
          desc={(index === 2 || index === 3 || index === 10 || index === 11 || index === 14) ? translate(blog.content_ru, blog.content_ky, blog.content_en ?? "") : ""}
          isCardBig={(index === 2 || index === 3 || index === 10 || index === 11 || index === 14)}
        />
      ))}
          
        </div>
      </Container>
    </main>
  );
};

export default Blog;
