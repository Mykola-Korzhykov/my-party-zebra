import { FC } from 'react';
import Image from 'next/legacy/image';

import styles from './Faq.module.scss';

type Props = {
    title: string;
    colorTitle: string;
    image: any;
}

const FaqContent: FC<Props> = ({title, colorTitle, image}) => {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <Image src={image} blurDataURL={image} alt="FAQ Image" placeholder="blur" layout="fill" />
            </div>

            <h3 className={styles.title}>
                {title} <span className={styles.colorTitle}>{colorTitle}</span>
            </h3>
        </div>
    );
}
 
export default FaqContent;