import { FC } from 'react';

import styles from '../Organize.module.scss';

type Props = {
    handleClick: () => void
}

const RemoveIcon: FC<Props> = ({handleClick}) => {
    return (  
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick} className={styles.removeProgram}>
            <path d="M18.75 5.25L5.25 18.75" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.75 18.75L5.25 5.25" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
 
export default RemoveIcon;