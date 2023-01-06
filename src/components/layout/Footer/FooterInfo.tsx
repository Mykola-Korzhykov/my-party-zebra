import { FC } from 'react';

import ILink from '@shared/interfaces/Button/ILink';

import styles from './Footer.module.scss';

type Props = {
    link: ILink;
    otherLink: ILink;
}

const FooterInfo: FC<Props> = ({link, otherLink}) => {
    return (
        <div className={styles.info}>
            <a href={link.href} className={styles.link}>{link.text}</a>
            <a href={otherLink.href} className={styles.link}>{otherLink.text}</a>
        </div>
    );
}
 
export default FooterInfo;