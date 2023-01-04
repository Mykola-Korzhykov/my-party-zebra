import { FC, RefObject } from 'react';
import Image from 'next/legacy/image';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IUpload } from '@shared/interfaces/IUpload';
import getSwiperOptions from '@helpers/getSwiperOptions';

import styles from './Gallery.module.scss';

type Props = { 
    images: IUpload[];
    swiperRef: RefObject<SwiperRef>
}

const GalleryImages: FC<Props> = ({images, swiperRef}) => {
    return (
        <Swiper {...getSwiperOptions()} slidesPerView='auto' className={styles.slides} ref={swiperRef}>
            {images.map(({url, alt}, index) => (
                <SwiperSlide className={styles.slide} key={index}>
                    <div className={styles.image}>
                        <Image src={url} blurDataURL={url} alt={alt} placeholder="blur" layout="fill" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
 
export default GalleryImages;