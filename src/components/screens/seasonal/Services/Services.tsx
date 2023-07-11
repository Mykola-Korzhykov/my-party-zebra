import { FC } from "react";

import { IUploadFull } from "@shared/interfaces/IUpload";
import IServicesItem from "@shared/interfaces/Data/Seasonal/IServicesItem";

import ServicesList from "./ServicesList";

import UploadDTO from "@shared/dto/uploadDTO";

import styles from "./Services.module.scss";

type IFullServicesItem = Pick<
  IServicesItem,
  Exclude<keyof IServicesItem, "image">
> & {
  image: IUploadFull;
};

type Props = {
  data: {
    sectionTitle: string;
    sectionId: string;
    list: IFullServicesItem[];
  };
};

const Services: FC<Props> = ({ data }) => {
  const { sectionTitle, sectionId, list } = data;

  const sortList: IServicesItem[] = [];
  list.forEach(({ title, image, button }) => {
    sortList.push({ title, button, image: new UploadDTO(image) });
  });

  return (
    <section className={styles.section} id={sectionId} data-aos="fade-up">
      <div className="container">
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <ServicesList list={sortList} />
      </div>
    </section>
  );
};

export default Services;
