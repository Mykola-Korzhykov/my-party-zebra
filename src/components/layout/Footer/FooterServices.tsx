import { FC } from 'react';
import Link from 'next/link';

import ILink from '@shared/interfaces/Button/ILink';

import styles from './Footer.module.scss';

type Props = {
    services: ILink[];
}

const FooterServices: FC<Props> = ({services}) => {
    return (
        <ul className={styles.services}>
            {services.map(({text, href}, index) => (
                <li className={styles.servicesItem} key={index}>
                    <Link href={href} legacyBehavior>
                        <a className={styles.servicesLink}>{text}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
 
export default FooterServices;