import { FC, RefObject, useState } from 'react';

import Link from 'next/link';

import Logo from '@components/ui/Logo/Logo';
import Menu from '@components/ui/Menu/Menu';
import Locales from './Locales';

import IMenuItem from '@shared/interfaces/Menu/IMenuItem';
import ILocale from '@shared/interfaces/ILocale';

import styles from './Header.module.scss';
import menuStyles from '@components/ui/Menu/Menu.module.scss';

type Props = {
    siteName: string;
    menu: IMenuItem[];
    locales: ILocale[];
    isSticky: boolean;
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({siteName, menu, locales, isSticky, headerRef}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
                        <Locales locales={locales} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

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