import { FC } from 'react';

import styles from '../Navigation/Navigation.module.scss';

const DateIcon: FC = () => {
    return (
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.icon}`}>
            <circle opacity="1" cx="37" cy="37" r="37" fill="#F6F5EE"/>
            <g opacity="1">
                <path d="M49.5 23.25H24.5C23.8096 23.25 23.25 23.8096 23.25 24.5V49.5C23.25 50.1904 23.8096 50.75 24.5 50.75H49.5C50.1904 50.75 50.75 50.1904 50.75 49.5V24.5C50.75 23.8096 50.1904 23.25 49.5 23.25Z" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44.5 20.75V25.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.5 20.75V25.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.25 30.75H50.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31.375 37H35.75L33.25 40.125C33.6611 40.125 34.0658 40.2264 34.4283 40.4201C34.7909 40.6139 35.1 40.894 35.3285 41.2358C35.5569 41.5775 35.6975 41.9703 35.7379 42.3794C35.7783 42.7885 35.7172 43.2012 35.56 43.581C35.4028 43.9608 35.1544 44.296 34.8367 44.5569C34.5191 44.8178 34.142 44.9964 33.7388 45.0767C33.3357 45.1571 32.919 45.1369 32.5256 45.0177C32.1321 44.8986 31.7742 44.6843 31.4833 44.3938" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M39.5 38.875L42 37V45.125" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );
}
 
export default DateIcon;