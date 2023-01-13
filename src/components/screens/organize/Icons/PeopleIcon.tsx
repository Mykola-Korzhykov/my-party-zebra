import { FC } from 'react';

import styles from '../Navigation/Navigation.module.scss';

const PeopleIcon: FC = () => {
    return (
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <circle opacity="1" cx="37" cy="37" r="37" fill="#F6F5EE"/>
            <g opacity="1">
                <path d="M30.75 42C35.2373 42 38.875 38.3623 38.875 33.875C38.875 29.3877 35.2373 25.75 30.75 25.75C26.2627 25.75 22.625 29.3877 22.625 33.875C22.625 38.3623 26.2627 42 30.75 42Z" stroke="#282828" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M41.2832 26.0526C42.4007 25.7377 43.5728 25.666 44.7204 25.8422C45.8679 26.0184 46.9644 26.4386 47.936 27.0743C48.9075 27.7099 49.7316 28.5465 50.3526 29.5274C50.9737 30.5084 51.3773 31.6111 51.5363 32.7612C51.6953 33.9113 51.6059 35.0821 51.2743 36.1948C50.9427 37.3075 50.3765 38.3362 49.6139 39.2116C48.8513 40.0871 47.9099 40.7889 46.8531 41.2699C45.7964 41.7508 44.6489 41.9998 43.4878 41.9999" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.499 47.8432C20.768 46.0382 22.4526 44.565 24.4107 43.548C26.3687 42.531 28.5427 42.0001 30.7492 42C32.9556 41.9999 35.1296 42.5307 37.0878 43.5476C39.0459 44.5644 40.7306 46.0375 41.9997 47.8424" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M43.4883 42C45.6949 41.9984 47.8694 42.5285 49.8277 43.5455C51.786 44.5625 53.4704 46.0364 54.7383 47.8424" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );
}
 
export default PeopleIcon;