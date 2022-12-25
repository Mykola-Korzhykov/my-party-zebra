import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@store/hook';
import { showLoader, hideLoader } from '@store/slices/loaderSlice';

import ILocale from '@shared/interfaces/ILocale';

import useWindowSize from '@hooks/useWindowSize';

import styles from './Header.module.scss';
import menuStyles from '@components/ui/Menu/Menu.module.scss';

type Props = {
    locales: ILocale[];
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const Locales: FC<Props> = ({locales, isMenuOpen, toggleMenu}) => {
    const windowSize = useWindowSize();

    const router = useRouter();
    const dispatch = useAppDispatch();
    
    const {pathname, locale} = router;
    
    const localeHandleClick = (code: string) => {
        dispatch(showLoader())
        router.push(pathname, pathname, {locale: code});
        
        if(windowSize.width < 993) {
            toggleMenu();
        }

        setTimeout(() => dispatch(hideLoader()), 100);
    }

    return (
        <ul className={`${styles.locales} ${isMenuOpen ? menuStyles.show : ''} ${windowSize.width < 993 && !isMenuOpen ? menuStyles.hide : ''}`}>
            {locales.map(({name, code}, index) => (
                <li className={`${styles.localesItem} ${locale === code ? styles.localesItemActive : ''}`} 
                    onClick={() => localeHandleClick(code)}
                    style={{width: index === locales.length - 1 && index % 2 === 0 ? '100%' : '50%'}} key={index}>
                    <p>
                        {windowSize.width < 993 ? name.split(' ')[0] : name.split(' ')[0].slice(0, 3)}
                    </p>
                </li>
            ))}
        </ul>
    );
}
 
export default Locales;