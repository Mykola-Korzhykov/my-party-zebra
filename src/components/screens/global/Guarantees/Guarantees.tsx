import { FC } from 'react';
import Image from 'next/legacy/image';

import IGuaranteesItem from '@shared/interfaces/Data/Items/IGuaranteesItem';

import styles from './Guarantees.module.scss';

type Props = {
    data: {
        sectionTitle: string;
        sectionId: string;
        list: IGuaranteesItem[];
    }
}

type IconsType = {
    [key: string]: any
}

const Guarantees: FC<Props> = ({data}) => {
    const {sectionTitle, sectionId, list} = data;

    const iconsURL = '/img/guarantees';
    const icons: IconsType = {
        image: `${iconsURL}/image-icon.svg`,
        bot: `${iconsURL}/bot-icon.svg`,
        clock: `${iconsURL}/clock-icon.svg`,
        smile: `${iconsURL}/smile-icon.svg`,
        security: `${iconsURL}/security-icon.svg`,
        car: `${iconsURL}/car-icon.svg`,
    }

    return (
        <section className={styles.section} id={sectionId} data-aos="fade-up">
            <div className="container">
                <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                <ul className={styles.list}>
                    {list.map(({title, description, icon}, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.image}>
                                <Image src={icons[icon]} blurDataURL={icons[icon]} alt="Icon" placeholder="blur" layout="fill" />
                            </div>

                            <h4 className={styles.title}>{title}</h4>
                            <p className={styles.description}>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Guarantees;