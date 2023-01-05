import { FC } from 'react';
import Image from 'next/legacy/image';

import IFaqItem from '@shared/interfaces/Data/Items/IFaqItem';
import FaqContent from './FaqContent';
import FaqList from './FaqList';

import faqImages from '@data/faqImages';

import styles from './Faq.module.scss';

type Props = {
    data: {
        title: string;
        colorTitle: string;
        sectionId: string;
        themeColor: string;
        list: IFaqItem[];
    };

    themeColor: string;
}

const Faq: FC<Props> = ({data, themeColor}) => {
    const {title, colorTitle, sectionId, list} = data;
    const image = faqImages[themeColor];

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <FaqContent title={title} colorTitle={colorTitle} image={image} />
                    <FaqList list={list} />
                </div>
            </div>
        </section>
    );
}
 
export default Faq;