import { FC } from 'react';

import MenuItem from './MenuItem';
import IMenuItem from '@shared/interfaces/Menu/IMenuItem';

import styles from './Menu.module.scss';

type Props = { 
    place: 'header' | 'footer',
    list: IMenuItem[],
    isOpen?: boolean
    toggleMenu?: () => void
}

const Menu: FC<Props> = ({place, list, isOpen, toggleMenu}) => {
    return (
        <ul className={`${styles[`list_` + place]} ${isOpen ? styles.show : ''}`}>
            {list.map(({text, href, type}, index) => (
                <MenuItem text={text} 
                          href={href} 
                          type={type} 
                          toggleMenu={toggleMenu} 
                          key={index} />
            ))}
        </ul>
    );
}
 
export default Menu;