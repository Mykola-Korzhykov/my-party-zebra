import { FC } from 'react';

import ILink from '@shared/interfaces/Button/ILink';
import Button from '@components/ui/Button/Button';

import styles from './Content404.module.scss';

type Props = {
    title: string;
    description: string;
    button: ILink
}

const Content404: FC<Props> = ({title, description, button}) => {
    const {text, href} = button;

    return (
        <section className={styles.section} id="content-404">
            <div className="container">
                <h1 className={styles.status}></h1>
                
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                    
                <Button type="link" variety="theme" href={href} text={text} customClass={styles.button} />
            </div>
        </section>
    );
}
 
export default Content404;