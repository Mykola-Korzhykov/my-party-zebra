import { FC } from 'react';
import Link from 'next/link';

import { ISomeListButtons } from '@shared/interfaces/Data/ISomeList';

import anchorClick from '@helpers/anchorClick';

import styles from './SomeList.module.scss';

type Props = {
    link: 'gallery' | 'book';
    buttons: ISomeListButtons;
    index: number;
    className: string;
}

const SomeListLinks: FC<Props> = ({link, buttons, index, className}) => {
    const colors = ['#BFB0E9', '#F48456', '#A7CCAA'];

    return (
        <>
            {link === 'gallery' && 
                <a href={buttons.gallery.href} 
                   className={className} 
                   style={{color: colors[index % colors.length]}}
                   onClick={e => anchorClick(e)}>
                   {buttons.gallery.text}
                </a>
            }

            {link === 'book' && 
                <Link href={buttons.book.href ?? ''} legacyBehavior>
                    <a className={className} 
                       style={{color: colors[index % colors.length]}}>
                       {buttons.book.text}
                    </a>
                </Link>
            }
        </>
    );
}
 
export default SomeListLinks;