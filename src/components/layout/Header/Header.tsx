import { FC, RefObject, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import Logo from '@components/ui/Logo/Logo';
import Menu from '@components/ui/Menu/Menu';
import Button from '@components/ui/Button/Button';
import Locales from './Locales';

import IMenuItem from '@shared/interfaces/Menu/IMenuItem';
import ILocale from '@shared/interfaces/ILocale';

import styles from './Header.module.scss';
import menuStyles from '@components/ui/Menu/Menu.module.scss';
import useWindowSize from '@hooks/useWindowSize';

type Props = {
    siteName: string;
    menu: IMenuItem[];
    locales: ILocale[];
    isSticky: boolean;
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({siteName, menu, locales, isSticky, headerRef}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const windowSize = useWindowSize();

    const {locale, pathname} = useRouter();

    const toggleMenu = () => {
        document.body.classList.toggle('lock-scroll');
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className={styles.navigation}>
                    <Logo siteName={siteName} />
                    <div className={`${styles.other} ${isMenuOpen ? styles.otherOpacity : ''}`}>
                        <Menu place="header" list={menu} isOpen={isMenuOpen} toggleMenu={toggleMenu} />

                        <div className={styles.row}>
                            <Locales locales={locales} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                            {(pathname !== '/organize' && (windowSize.width > 992 && windowSize.width <= 1300)) &&
                                <Button type="link" variety="theme"
                                        href="/organize" text={locale === 'ru' ? 'Забронировать' : 'Book a party'} 
                                        customClass={styles.button} />}
                        </div>

                        {(pathname !== '/organize' && (windowSize.width < 993 || windowSize.width > 1300)) &&
                                <Button type="link" variety="theme"
                                        href="/organize" text={locale === 'ru' ? 'Забронировать' : 'Book a party'} 
                                        customClass={styles.button} />}

                        <button type="button" 
                                aria-label="Toggle Menu" 
                                className={`${menuStyles.open_btn} ${isMenuOpen ? menuStyles.close_btn : ''}`} 
                                onClick={toggleMenu}>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;