import { FC } from 'react';

import useWindowSize from '@hooks/useWindowSize';

import IMenuItem from '@shared/interfaces/Menu/IMenuItem';
import IFooter from '@shared/interfaces/Data/Layout/IFooter';

import Logo from '@components/ui/Logo/Logo';
import Menu from '@components/ui/Menu/Menu';
import Map from '@components/ui/Map/Map';

import FooterContacts from './FooterContacts';
import FooterInfo from './FooterInfo';

import styles from './Footer.module.scss';

type Props = {
    siteName: string;
    menu: IMenuItem[];
    data: IFooter;
}

const Footer: FC<Props> = ({siteName, menu, data}) => {
    const {city, phone, link, otherLink, map, socials} = data;

    const windowSize = useWindowSize();

    return (
        <footer className={styles.wrapper} id="footer">
            <div className="container">
                <Logo siteName={siteName} className={styles.logo} />

                <div className={styles.row}>
                    <Menu place="footer" list={menu} />
                    <div className={styles.rowWrapper}>
                        <Map mapData={map} />
                        {windowSize.width > 993 && <FooterContacts city={city} phone={phone} socials={socials} />}
                    </div>
                </div>
                
                {windowSize.width < 993 && <FooterContacts city={city} phone={phone} socials={socials} />}

                <FooterInfo link={link} otherLink={otherLink} />
            </div>
        </footer>
    );
}
 
export default Footer;