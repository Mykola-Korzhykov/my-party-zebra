import { FC } from 'react';
import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

type Props = {
    previousPageTitle: string,
    pageTitle: string;
};

const Breadcrumbs: FC<Props> = ({previousPageTitle, pageTitle}) => {
    return (
        <section className={styles.section} id="breadcrumbs">
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.link}>{previousPageTitle}</a>
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <p className={`${styles.text} ${styles.current}`}>{pageTitle}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
 
export default Breadcrumbs;