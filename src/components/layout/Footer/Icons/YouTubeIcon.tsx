import { FC } from 'react';

import styles from '../Footer.module.scss';

const YouTubeIcon: FC = () => {
    return ( 
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.icon} ${styles.tiktokIcon}`}>
            <rect x="1.05" y="5.7502" width="29.9" height="20.4" rx="4.95" stroke="black" stroke-width="2.1"/>
            <path d="M21.0105 16.2201L12.8686 20.6075C12.702 20.6972 12.5 20.5766 12.5 20.3874V11.6126C12.5 11.4234 12.702 11.3028 12.8686 11.3925L21.0105 15.7799C21.1858 15.8743 21.1858 16.1257 21.0105 16.2201Z" stroke="black" stroke-width="2.1"/>
        </svg>
    );
}
 
export default YouTubeIcon;