import React from "react";
import styles from "./triple_image.module.css"; 
import Image, { StaticImageData } from "next/image";

type TripleImageProps = {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
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
        quality={100}
        className={styles.car_1_image}
      />
      <div className={styles.middle_car}>
        <Image
          src={image2}
          layout="responsive"
          width={320}
          height={445}
          alt="car1"
          quality={100}
          className={styles.car_2_image}
        />
      </div>

      <Image
        src={image3}
        layout="responsive"
        width={200}
        height={280}
        alt="car1"
        quality={100}
        className={styles.car_3_image}
      />
    </div>
  );
};

export default TripleImage;
