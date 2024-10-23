export interface BlogPost {
    id: number;
    title: string;
    title_ru: string;
    title_ky: string;
    title_en: string | null;
    main_image: string;
    second_title: string;
    second_title_ru: string;
    second_title_ky: string;
    second_title_en: string | null;
    content: string;
    content_ru: string;
    content_ky: string;
    content_en: string;
    created_at: string;
    updated_at: string;
    sections: BlogSection[];
  }
  
  interface BlogSection {
    id: number;
    title: string;
    title_ru: string;
    title_ky: string;
    title_en: string;
    content: string;
    content_ru: string;
    content_ky: string;
    content_en: string;
    image: string;
    order: number;
    blog_post: number;
  }
  