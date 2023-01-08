import { FC } from 'react';

import ILink from '@shared/interfaces/Button/ILink';

import styles from './FirstScreen.module.scss';
import Button from '@components/ui/Button/Button';

type Props = {
    data: {
        title: string;
        colorTitle: string;
        description: string;
        button: ILink
    }
};

const FirstScreen: FC<Props> = ({data}) => {
    const {title, colorTitle, description, button} = data;

    return (
        <section className={styles.section} id="first-screen">
            <div className="container">
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        {title} <span className={styles.colorTitle}>{colorTitle}</span>
                    </h1>
                    <p className={styles.description}>{description}</p>
                    <Button type="link" variety="theme" href={button.href} text={button.text} customClass={styles.button} />
                </div>
            </div>
        </section>
    );
}
 
export default FirstScreen;