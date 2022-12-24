import { FC, MouseEvent } from 'react';
import Link from 'next/link';

import IMenuItem from '@shared/interfaces/Menu/IMenuItem';
import anchorClick from '@helpers/anchorClick';

import useWindowSize from '@hooks/useWindowSize';

import styles from './Menu.module.scss';

interface Props extends IMenuItem {
    toggleMenu: () => void;
}

const MenuItem: FC<Props> = ({text, href, type, toggleMenu}) => {
    const windowSize = useWindowSize();

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if(windowSize.width < 993) toggleMenu();
        anchorClick(e);
    }

    return (
        <li className={styles.item}>
            {type === 'internal_link' &&
            <Link href={href} legacyBehavior>
                <a className={styles.link}>{text}</a>
            </Link>}

            {type === 'external_link' &&
            <a href={href} className={styles.link} target="_blank" rel="noreferrer">{text}</a>}

            {type === 'anchor' &&
            <a href={href} className={styles.link} onClick={anchorHandleClick}>
                {text}
            </a>}
        </li>
    );
}
 
export default MenuItem;