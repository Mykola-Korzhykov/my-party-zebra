import { FC } from 'react';

import styles from './Programs.module.scss';

type Props = {
    isShow: boolean
}

const ProgramsLink: FC<Props> = ({isShow}) => {
    return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.link} ${isShow ? styles.linkShow : ''}`}>
            <path d="M11.25 19.5H27.75" stroke="#A1DFEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12.75L27.75 19.5L21 26.25" stroke="#A1DFEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="1" y="1" width="37" height="37" rx="18.5" stroke="#A1DFEE" strokeWidth="2"/>
        </svg>
    );
}
 
export default ProgramsLink;