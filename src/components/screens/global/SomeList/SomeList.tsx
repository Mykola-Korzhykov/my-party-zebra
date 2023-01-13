import { FC } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { ISomeListItem, ISomeListButtons } from '@shared/interfaces/Data/ISomeList';
import { IUpload } from '@shared/interfaces/IUpload';
import UploadDTO from '@shared/dto/uploadDTO';

import getIndexWithZero from '@helpers/getIndexWithZero';

import styles from './SomeList.module.scss';
import SomeListLinks from './SomeListLinks';

type Props = {
    data: {
        sectionTitle: string;
        sectionId: string;
        list: ISomeListItem[];
    },
    buttons: ISomeListButtons
}

type ISortSomeListItem = Pick<ISomeListItem, Exclude<keyof ISomeListItem, 'image'>> & {
    image: IUpload;
}

const SomeList: FC<Props> = ({data, buttons}) => {
    const {sectionTitle, sectionId, list} = data;

    const sortList: ISortSomeListItem[] = [];
    list.forEach(({title, description, link, image}) => {
        sortList.push({title, description, link, image: new UploadDTO(image)});
    });

    return (
        <section className={styles.section} id={sectionId} data-aos="fade-up">
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.sectionTitleItem}>
                        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                    </li>

                    {sortList.map(({title, description, link, image}, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.wrapper}>
                                <div className={styles.image}>
                                    <Image src={image.url} blurDataURL={image.url} alt={image.alt} placeholder="blur" layout="fill" />
                                    <div className={styles.overlay}></div>
                                    <p className={styles.index}>{getIndexWithZero(index)}</p>
                                </div>

                                <div className={styles.content}>
                                    <h4 className={styles.title}>{title}</h4>
                                    <p className={styles.description}>{description}</p>
                                    <SomeListLinks link={link} buttons={buttons} index={index} className={styles.link} />
                                </div>
                            </div>

                            <SomeListLinks link={link} buttons={buttons} index={index} className={styles.linkTablet} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default SomeList;