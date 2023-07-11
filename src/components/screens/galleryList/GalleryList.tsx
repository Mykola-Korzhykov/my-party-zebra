import { FC } from "react";

import IGalleryItem from "@shared/interfaces/Data/Gallery/IGalleryItem";
import GalleryItem from "./GalleryItem";

import styles from "./Gallery.module.scss";

type Props = {
  lists: IGalleryItem[];
};

const GalleryList: FC<Props> = ({ lists }) => {
  return (
    <ul className={styles.list}>
      {lists.map((item, index) => (
        <GalleryItem content={item} key={index} />
      ))}
    </ul>
  );
};

export default GalleryList;
