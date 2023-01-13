import { FC } from 'react';

import styles from './Select.module.scss';

const SelectArrow: FC = () => {
    return (
        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
            <path d="M21.5 1L11.5 11L1.5 1" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
 
export default SelectArrow;