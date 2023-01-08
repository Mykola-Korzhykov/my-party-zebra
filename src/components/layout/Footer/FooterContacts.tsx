import { FC } from 'react';
import Link from 'next/link';

import useWindowSize from '@hooks/useWindowSize';

import ILink from '@shared/interfaces/Button/ILink';
import ISocials from '@shared/interfaces/Data/Global/ISocials';

import FooterSocials from './FooterSocials';

import styles from './Footer.module.scss';

type Props = {
    city: string;
    phone: string;
    socials: ISocials;
}

const FooterContacts: FC<Props> = ({city, phone, socials}) => {
    const phoneReplaced = phone.replace(/[^+\d]/g, '');

    const windowSize = useWindowSize();

    return (
        <div className={styles.contacts}>
            <div className={styles.contactsWrapper}>
                <p className={styles.city}>{city}</p>
                {windowSize.width < 993 && <a href={`tel:${phoneReplaced}`} className={styles.phone}>{phone}</a>}
            </div>

            {windowSize.width > 993 && <a href={`tel:${phoneReplaced}`} className={styles.phone}>{phone}</a>}

            <FooterSocials socials={socials} />
        </div>
    );
}
 
export default FooterContacts;