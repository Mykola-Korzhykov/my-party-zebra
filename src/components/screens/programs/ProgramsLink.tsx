import { FC } from 'react';

import styles from './Programs.module.scss';

type Props = {
    isShow: boolean
}

const ProgramsLink: FC<Props> = ({isShow}) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.link} ${isShow ? styles.linkShow : ''}`}>
            <ellipse cx="27" cy="27" rx="27" ry="27" fill="#BFB0E9" />
            <path d="M16 27H38" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29 18L38 27L29 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
 
export default ProgramsLink;