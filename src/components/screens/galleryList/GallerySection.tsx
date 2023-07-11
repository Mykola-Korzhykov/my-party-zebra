import { FC } from "react";

import IGalleryItem from "@shared/interfaces/Data/Gallery/IGalleryItem";
import GalleryList from "./GalleryList";

import styles from "./Gallery.module.scss";

type Props = {
  data: {
    sectionId: string;
    list: IGalleryItem[];
  };
};

const GallerySection: FC<Props> = ({ data }) => {
  const { list } = data;

  return (
    <section className={styles.section} data-aos="fade-up">
      <div className="container">
        <GalleryList lists={list} />
      </div>
    </section>
  );
};

export default GallerySection;
