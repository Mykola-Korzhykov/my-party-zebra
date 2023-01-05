import { FC } from 'react';

import styles from './Gallery.module.scss';

type Props = { className: string }

const Cubic: FC<Props> = ({className}) => {
    return (
        <svg width="151" height="163" viewBox="0 0 151 163" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.cubic} ${styles[className]}`}>
            <path d="M40.4961 163C18.4047 163 0.496093 145.091 0.496092 123L0.49609 75C0.496088 33.5786 34.0747 -1.46777e-06 75.4961 -3.27835e-06L110.496 -4.80825e-06C132.587 -5.7739e-06 150.496 17.9086 150.496 40L150.496 163L40.4961 163Z" fill="#F48456"/>
        </svg>
    );
}
 
export default Cubic;