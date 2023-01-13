import { FC } from 'react';

import styles from '../Navigation/Navigation.module.scss';

const InfoIcon: FC = () => {
    return (
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <circle cx="37" cy="37" r="37" fill="#F6F5EE"/>
            <path d="M43.25 20.75H30.75V27H43.25V20.75Z" stroke="#BFB0E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43.25 23.25H48.25C48.5815 23.25 48.8995 23.3817 49.1339 23.6161C49.3683 23.8505 49.5 24.1685 49.5 24.5V50.75C49.5 51.0815 49.3683 51.3995 49.1339 51.6339C48.8995 51.8683 48.5815 52 48.25 52H25.75C25.4185 52 25.1005 51.8683 24.8661 51.6339C24.6317 51.3995 24.5 51.0815 24.5 50.75V24.5C24.5 24.1685 24.6317 23.8505 24.8661 23.6161C25.1005 23.3817 25.4185 23.25 25.75 23.25H30.75" stroke="#BFB0E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 40.75H42" stroke="#BFB0E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 35.75H42" stroke="#BFB0E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
 
export default InfoIcon;