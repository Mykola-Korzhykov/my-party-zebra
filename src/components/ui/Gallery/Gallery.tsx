import { FC, useRef } from 'react';
import Image from 'next/legacy/image';

import { IUpload, IUploadFullWithoutData } from '@shared/interfaces/IUpload';
import UploadDTO from '@shared/dto/uploadDTO';

import styles from './Gallery.module.scss';
import GalleryImages from './GalleryImages';

type Props = {
    data: {
        sectionTitle: string;
        sectionId: string;
        images: {data: IUploadFullWithoutData[]};
    }
}

const Gallery: FC<Props> = ({data}) => {
    const {sectionTitle, sectionId, images} = data;
    const swiperRef = useRef(null);

    const sortImages: IUpload[] = [];
    images.data.forEach((image) => sortImages.push(new UploadDTO(image)));

    const previousSlide = () => swiperRef.current.swiper.slidePrev();
    const nextSlide = () => swiperRef.current.swiper.slideNext();

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.sectionRow}>
                    <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.prevSlide} onClick={previousSlide} aria-label="Previous Slide"></button>
                        <button type="button" className={styles.nextSlide} onClick={nextSlide} aria-label="Next Slide"></button>
                    </div>
                </div>

                <GalleryImages images={sortImages} swiperRef={swiperRef} />
            </div>
        </section>
    );
}
 
export default Gallery;