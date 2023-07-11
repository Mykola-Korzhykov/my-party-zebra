import { FC, useRef } from "react";
import Image from "next/legacy/image";

import { SwiperRef } from "swiper/react";

import { IUpload, IUploadFullWithoutData } from "@shared/interfaces/IUpload";
import UploadDTO from "@shared/dto/uploadDTO";

import GalleryButtons from "./GalleryButtons";
import GalleryImages from "./GalleryImages";

import styles from "./Gallery.module.scss";
import Cubic from "./Cubic";

type Props = {
  data: {
    sectionTitle: string;
    sectionId: string;
    images: { data: IUploadFullWithoutData[] };
  };
};

const Gallery: FC<Props> = ({ data }) => {
  const { sectionTitle, sectionId, images } = data;
  const swiperRef = useRef<SwiperRef | null>(null);

  const sortImages: IUpload[] = [];
  images.data.forEach((image) => sortImages.push(new UploadDTO(image)));

  const previousSlide = () => swiperRef.current.swiper.slidePrev();
  const nextSlide = () => swiperRef.current.swiper.slideNext();

  return (
    <section className={styles.section} id={sectionId} data-aos="fade-up">
      <div className="container" style={{ position: "relative" }}>
        <Cubic className="cubicBefore" />
        <div className={styles.sectionRow}>
          <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
          <GalleryButtons previousSlide={previousSlide} nextSlide={nextSlide} />
        </div>

        <GalleryImages images={sortImages} swiperRef={swiperRef} />

        <Cubic className="cubicAfter" />
      </div>
    </section>
  );
};

export default Gallery;
