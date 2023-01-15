import { FC } from 'react';

import ISocials from '@shared/interfaces/Data/Global/ISocials';

import InstagramIcon from './Icons/InstagramIcon';
import FacebookIcon from './Icons/FacebookIcon';
import TikTokIcon from './Icons/TikTokIcon';

import styles from './Footer.module.scss';

type Props = {
    socials: ISocials;
}

const FooterSocials: FC<Props> = ({socials}) => {
    const {instagram, facebook, tiktok} = socials;
    
    return (
        <ul className={styles.socials}>
            <li className={styles.socialsItem}>
                <a href={instagram} target="_blank" rel="nofollow noopener noreferrer" className={styles.socialsLink}>
                    <InstagramIcon />
                </a>
            </li>
            <li className={styles.socialsItem}>
                <a href={facebook} target="_blank" rel="nofollow noopener noreferrer" className={styles.socialsLink}>
                    <FacebookIcon />
                </a>
            </li>
            <li className={styles.socialsItem}>
                <a href={tiktok} target="_blank" rel="nofollow noopener noreferrer" className={styles.socialsLink}>
                    <TikTokIcon />
                </a>
            </li>
        </ul>
    );
}
 
export default FooterSocials;