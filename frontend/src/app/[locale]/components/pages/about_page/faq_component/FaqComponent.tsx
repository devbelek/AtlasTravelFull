import { useEffect, useState } from "react";
import styles from "./faq.module.css";
import { axiosGetFaqs } from "@/services/about-us";
import { useTranslations } from "next-intl";
import Container from "../../../layout/container/Container";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem} onClick={toggleOpen}>
      <div className={styles.question}>
        {question}
        <span
          className={`${isOpen ? styles.arrowOpen : styles.arrowClosed} ${
            styles.arrow
          }`}
        ></span>
      </div>
      <div
        className={isOpen ? styles.answerOpen : styles.answerClosed}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

interface FAQData {
  question: string;
  answer: string;
  id: number;
}

const FAQ: React.FC = () => {
  const [faqData, setFaqData] = useState<FAQData[]>([]);
  const [faqDataHalf, setFaqDataHalf] = useState<FAQData[]>([]);
  const [error, setError] = useState("");

  const about = useTranslations("AboutPage");

  useEffect(() => {
    const loadData = async () => {
      try {
        const faqs = await axiosGetFaqs();

        const half = Math.ceil(faqs.length / 2);
        const firstHalfData = faqs.slice(0, half);
        const secondHalfData = faqs.slice(half, faqs.length);
        setFaqData(firstHalfData);
        setFaqDataHalf(secondHalfData);
      } catch (error) {
        console.error("Ошибка загрузки данных: ", error);
        setError("Не удалось загрузить данные");
      }
    };

    loadData();
  }, []);

  return (
    <section className={styles.faq_block}>
      <Container isVisible={true}>
        <h3 className={styles.section_title}>{about("faqBlockTitle")}</h3>

        <div className={styles.faqContainer}>
          <div className={styles.faqContainerInner}>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className={styles.faqContainerInner}>
            {faqDataHalf.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
