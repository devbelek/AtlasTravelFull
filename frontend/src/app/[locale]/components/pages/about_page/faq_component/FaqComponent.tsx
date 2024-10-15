import { useState } from "react";
import styles from "./faq.module.css";

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
        <span className={`${isOpen ? styles.arrowOpen : styles.arrowClosed} ${styles.arrow}`}>
          
        </span>
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
}

const FAQ: React.FC = () => {
  const faqData: FAQData[] = [
    {
      question: "Какие направления вы предлагаете?",
      answer:
        "Мы предлагаем туры по всему миру, включая пляжные, экскурсионные, горнолыжные и круизные маршруты...",
    },
    {
      question: "Как можно оплатить тур?",
      answer:
        "Вы можете оплатить тур различными способами: банковской картой (Visa, MasterCard, Мир), через банковский перевод, а также в рассрочку или с помощью электронных платежных систем. Для получения более подробной информации о способах оплаты свяжитесь с нашими менеджерами.",
    },
    {
      question: "Можно ли изменить даты или маршрут поездки?",
      answer:
        "Да, вы можете изменить даты или маршрут поездки. Однако это может зависеть от доступности новых дат и условий бронирования. Мы рекомендуем связываться с нами как можно раньше, чтобы минимизировать возможные штрафы и получить наилучшие варианты для изменения.",
    },
    {
      question: "Есть ли поддержка во время поездки?",
      answer:
        "Да, мы предоставляем круглосуточную поддержку нашим клиентам во время всей поездки. Вы можете связаться с нами по телефону или через мессенджеры, если возникнут вопросы или непредвиденные ситуации.",
    },
    {
      question: "Вы помогаете с оформлением виз?",
      answer:
        "Да, мы предоставляем помощь в оформлении виз для большинства направлений. Наши специалисты помогут вам собрать все необходимые документы, а также проконсультируют по требованиям консульств и срокам подачи заявок.",
    },
    {
      question: "Предоставляете ли вы страховку для путешествий?",
      answer:
        "Мы предлагаем туристические страховки, которые покрывают широкий спектр рисков: от медицинских расходов до страхования багажа и отмены поездки. Вы можете выбрать страховой пакет, который наиболее соответствует вашим потребностям.",
    },
    {
      question: "Есть ли у вас специальные предложения и скидки?",
      answer:
        "Да, у нас регулярно действуют специальные предложения и скидки на различные направления. Мы рекомендуем подписаться на нашу рассылку или следить за обновлениями на сайте, чтобы быть в курсе всех акций.",
    },
    {
      question: "Что делать, если поездка отменяется?",
      answer:
        "В случае отмены поездки, вы должны как можно быстрее связаться с нами. Мы поможем вам урегулировать все вопросы, связанные с возвратом средств, возможными штрафами и перенесением тура на другие даты. Условия возврата зависят от политики конкретных отелей и авиакомпаний, а также от времени отмены.",
    },
  ];

  const half = Math.ceil(faqData.length / 2);
  const firstHalfData = faqData.slice(0, half);
  const secondHalfData = faqData.slice(half, faqData.length);

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqContainerInner}>
        {firstHalfData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className={styles.faqContainerInner}>
        {secondHalfData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
