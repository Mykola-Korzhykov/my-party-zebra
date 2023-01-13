import { FC } from 'react';

import ILink from '@shared/interfaces/Button/ILink';
import Button from '@components/ui/Button/Button';

import styles from './FirstScreen.module.scss';

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
                    <h1 className={styles.title} data-aos="fade-up">
                        {title} <span className={styles.colorTitle}>{colorTitle}</span>
                    </h1>
                    <p className={styles.description} data-aos="fade-up">{description}</p>
                    <Button type="link" variety="theme" href={button.href} text={button.text} customClass={styles.button} dataAos="fade-up" />
                </div>
            </div>
        </section>
    );
}
 
export default FirstScreen;