import { FC } from 'react';

import anchorClick from '@helpers/anchorClick';

import IAgeGroupsItem from '@shared/interfaces/Data/Home/IAgeGroupsItem';
import IAnchor from '@shared/interfaces/Button/IAnchor';

import styles from './AgeGroups.module.scss';

type Props = {
    data: {
        sectionTitle: string;
        sectionId: string;
        list: IAgeGroupsItem[];
        button: IAnchor;
    }
}

const AgeGroups: FC<Props> = ({data}) => {
    const {sectionTitle, sectionId, list, button} = data;

    return (
        <section className={styles.section} id={sectionId} data-aos="fade-up">
            <div className="container">
                <h3 className={styles.sectionTitle}>{sectionTitle}</h3>

                <ul className={styles.list}>
                    {list.map(({title, description}, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>{title}</h4>
                                <p className={styles.description}>{description}</p>
                            </div>

                            <a href={button.sectionId} className={styles.button} onClick={e => anchorClick(e)}>{button.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default AgeGroups;