import React from "react";
import styles from "./triple_image.module.css"; // Импортируйте стили, если необходимо
import Image, { StaticImageData } from "next/image";

type TripleImageProps = {
  image1: StaticImageData; // Путь к первому изображению
  image2: StaticImageData; // Путь ко второму изображению
  image3: StaticImageData; // Путь к третьему изображению
};

const TripleImage: React.FC<TripleImageProps> = ({
  image1,
  image2,
  image3,
}) => {
  return (
    <div className={styles.tripleImageContainer}>
      <Image
        src={image1}
        layout="responsive"
        width={200}
        height={280}
        alt="car1"
        className={styles.car_1_image}
      />
      <div className={styles.middle_car}>
        <Image
          src={image2}
          layout="responsive"
          width={320}
          height={445}
          alt="car1"
          className={styles.car_2_image}
        />
      </div>

      <Image
        src={image3}
        layout="responsive"
        width={200}
        height={280}
        alt="car1"
        className={styles.car_3_image}
      />
    </div>
  );
};

export default TripleImage;
