"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import FaqComponent from "../components/pages/about_page/faq_component/FaqComponent";
import ConsultForm from "../components/default_sections/consult_form/ConsultForm";
import AboutUsInfo from "../components/pages/about_page/about_us_info/AboutUsInfo";
import AboutUsImages from "../components/pages/about_page/about_us_images/AboutUsImages";
import OurProjects from "../components/pages/about_page/our_projects/OurProjects";

export default function About() {
  return (
    <>
      <AboutUsInfo />
      <AboutUsImages />
      <OurProjects />
      <FaqComponent />
      <ConsultForm />
    </>
  );
}
