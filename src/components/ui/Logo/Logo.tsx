import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

type Props = {
    siteName: string;
    className?: string;
}

const Logo: FC<Props> = ({siteName, className = ''}) => {
    const {pathname} = useRouter();

    return (
        <div className={styles.wrapper}>
            {pathname === '/' && 
            <a href="#first-screen" className={`${styles.text} ${className}`} onClick={anchorClick}>
                {siteName}
            </a>}

            {pathname !== '/' &&
            <Link href="/" legacyBehavior>
                <a className={`${styles.text} ${className}`}>{siteName}</a>
            </Link>}
        </div>
    );
}

export default Logo;