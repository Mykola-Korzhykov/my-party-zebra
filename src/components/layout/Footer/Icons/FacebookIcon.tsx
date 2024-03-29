import { FC } from 'react';

import styles from '../Footer.module.scss';

const FacebookIcon: FC = () => {
    return ( 
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.icon} ${styles.facebookIcon}`}>
            <path d="M20.1592 7.0937H22.6658V2.8537C21.4522 2.72749 20.2327 2.66519 19.0125 2.66703C15.3858 2.66703 12.9058 4.88037 12.9058 8.9337V12.427H8.8125V17.1737H12.9058V29.3337H17.8125V17.1737H21.8925L22.5058 12.427H17.8125V9.40037C17.8125 8.00037 18.1858 7.0937 20.1592 7.0937Z" stroke="#BFB0E9" strokeWidth="2"/>
        </svg>
    );
}
 
export default FacebookIcon;