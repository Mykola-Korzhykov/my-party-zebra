import { FC } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { IUpload } from '@shared/interfaces/IUpload';
import IServicesItem from '@shared/interfaces/Data/Home/IServicesItem';
import ServicesArrow from './ServicesArrow';

import splitString from '@helpers/splitString';

import styles from './Services.module.scss';

type Props = {
    list: IServicesItem[]
}

const ServicesList: FC<Props> = ({list}) => {
    const colors = ['#F7A3B2', '#A1DFEE', '#F48456', '#BFB0E9'];

    return (
        <ul className={styles.list}>
            {list.map(({title, image, href}, index) => (
                <li className={styles.item} key={index}>
                    <div className={styles.wrapper}>
                        <div className={styles.image}>
                            <Image src={image.url} blurDataURL={image.url} alt={image.alt} placeholder="blur" layout="fill" />
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                {splitString(title)[0]} 
                                <span style={{color: colors[index % colors.length]}}>
                                    {splitString(title)[1]}
                                </span>
                            </h3>
                            <Link href={href ?? ''} className={styles.link} />
                        </div>
                    </div>

                    <ServicesArrow fill={colors[index % colors.length]} />
                </li>
            ))}
        </ul>
    );
}
 
export default ServicesList;