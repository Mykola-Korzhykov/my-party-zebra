import { FC } from 'react';

import NextSlide from './Arrows/NextSlide';
import PrevSlide from './Arrows/PrevSlide';

import styles from './Gallery.module.scss';

type Props = {
    previousSlide: () => void;
    nextSlide: () => void;
}

const GalleryButtons: FC<Props> = ({previousSlide, nextSlide}) => {
    return (
        <div className={styles.buttons}>
            <button type="button" className={styles.prevSlide} onClick={previousSlide} aria-label="Previous Slide">
                <PrevSlide />
            </button>
            <button type="button" className={styles.nextSlide} onClick={nextSlide} aria-label="Next Slide">
                <NextSlide />
            </button>
        </div>
    );
}
 
export default GalleryButtons;