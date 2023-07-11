import { FC } from "react";
import Image from "next/legacy/image";

import IGalleryItem from "@shared/interfaces/Data/Gallery/IGalleryItem";
import styles from "./Gallery.module.scss";

type Props = {
  content: IGalleryItem;
};

const GalleryItem: FC<Props> = ({ content }) => {
  const { image } = content;

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image
          src={image.url}
          blurDataURL={image.url}
          alt={image.alt}
          layout="fill"
        />
      </div>
    </li>
  );
};

export default GalleryItem;
