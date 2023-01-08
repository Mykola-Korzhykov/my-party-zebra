import { FC } from 'react';

import styles from './Services.module.scss';

type Props = {fill: string};

const ServicesArrow: FC<Props> = ({fill}) => {
    return (
        <svg width="100%" height="16" viewBox="0 0 242 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
            <path d="M241.707 8.70711C242.098 8.31658 242.098 7.68342 241.707 7.29289L235.343 0.928932C234.953 0.538408 234.319 0.538408 233.929 0.928932C233.538 1.31946 233.538 1.95262 233.929 2.34315L239.586 8L233.929 13.6569C233.538 14.0474 233.538 14.6805 233.929 15.0711C234.319 15.4616 234.953 15.4616 235.343 15.0711L241.707 8.70711ZM0 9H241V7H0V9Z" fill={fill} />
        </svg>
    );
}

export default ServicesArrow;