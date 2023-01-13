import { FC } from 'react';

import styles from './CheckBox.module.scss';

const CheckBoxIcon: FC = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <circle opacity="1" cx="15" cy="15" r="7" fill="#A4A39F"/>
            <circle opacity="1" cx="15" cy="15" r="14" stroke="#A4A39F" strokeWidth="2"/>
        </svg>
    );
}
 
export default CheckBoxIcon;