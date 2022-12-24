import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

type Props = {siteName: string}

const Logo: FC<Props> = ({siteName}) => {
    const {pathname} = useRouter();

    return (
        <div className={styles.wrapper}>
            {pathname === '/' && 
            <a href="#first-screen" className={styles.text} onClick={anchorClick}>
                {siteName}
            </a>}

            {pathname !== '/' &&
            <Link href="/" className={styles.text}>
                {siteName}
            </Link>}
        </div>
    );
}

export default Logo;