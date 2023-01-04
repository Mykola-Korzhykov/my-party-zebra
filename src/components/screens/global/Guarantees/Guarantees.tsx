import { FC } from 'react';
import Image from 'next/legacy/image';

import imageIcon from '@public/img/guarantees/image-icon.svg';
import botIcon from '@public/img/guarantees/bot-icon.svg';
import clockIcon from '@public/img/guarantees/clock-icon.svg';
import smileIcon from '@public/img/guarantees/smile-icon.svg';
import securityIcon from '@public/img/guarantees/security-icon.svg';
import carIcon from '@public/img/guarantees/car-icon.svg';

import IGuaranteesItem from '@shared/interfaces/Data/IGuaranteesItem';

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

    const icons: IconsType = {
        image: imageIcon,
        bot: botIcon,
        clock: clockIcon,
        smile: smileIcon,
        security: securityIcon,
        car: carIcon
    }

    return (
        <section className={styles.section} id={sectionId}>
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