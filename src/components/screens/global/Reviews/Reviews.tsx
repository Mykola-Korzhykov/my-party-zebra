import { FC } from 'react';
import Link from 'next/link';

import ILink from '@shared/interfaces/Button/ILink';
import IReviewsItem from '@shared/interfaces/Data/IReviewsItem';

import styles from './Reviews.module.scss';
import Button from '@components/ui/Button/Button';

type Props = {
    data: {
        sectionTitle: string;
        sectionId: string;
        button: ILink;
        list: IReviewsItem[];
    }
}

const Reviews: FC<Props> = ({data}) => {
    const {sectionTitle, sectionId, button, list} = data;

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.sectionRow}>
                    <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                    <Button type="link" variety="theme" text={button.text} href={button.href} customClass={styles.button} />
                </div>

                <ul className={styles.list}>
                    {list.map(({name, text, link}, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.content}>
                                <h4 className={styles.name}>{name}</h4>
                                <p className={styles.text}>{text}</p>
                            </div>

                            <div className={styles.link}>
                                <Link href={link.href ?? ''}>{link.text}</Link>
                            </div>
                        </li>
                    ))}
                </ul>

                <Button type="link" variety="theme" text={button.text} href={button.href} customClass={styles.buttonMobile} />
            </div>
        </section>
    );
}
 
export default Reviews;