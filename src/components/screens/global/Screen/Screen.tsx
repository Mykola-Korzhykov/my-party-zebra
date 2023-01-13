import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';

import { IUploadFull } from '@shared/interfaces/IUpload';
import IMenuItem from '@shared/interfaces/Menu/IMenuItem';
import UploadDTO from '@shared/dto/uploadDTO';

import Button from '@components/ui/Button/Button';

import screenImages from '@data/screenImages';
import styles from './Screen.module.scss';

type Props = {
    data: {
        title: string;
        colorTitle: string;
        colorTitlePlace: 'start' | 'end';
        description: string;
        button: IMenuItem;
        image: string;
        sectionId: string;
    };

    themeColor: string;
}

const Screen: FC<Props> = ({data, themeColor}) => {
    const {title, colorTitle, colorTitlePlace, description, button, image, sectionId} = data;

    const router = useRouter();

    const imageUrl = screenImages[image][themeColor];
    const buttonType = button.type === 'internal_link' || button.type === 'external_link' ? 'link' : button.type;

    const toOrganize = () => {
        router.push({pathname: '/organize'});
        localStorage.setItem('isDecor', 'true');
    }

    return (
        <section className={styles.section} id={sectionId} data-aos="fade-up">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {colorTitlePlace === 'start' && <span className={styles.colorTitle}>{colorTitle}</span>} {title} {colorTitlePlace === 'end' && <span className={styles.colorTitle}>{colorTitle}</span>} 
                        </h1>

                        <p className={styles.description}>{description}</p>

                        {(buttonType === 'link' && button.href === '/organize' && router.pathname === '/decor') ?
                        <Button type="button" variety="theme" text={button.text} handleClick={toOrganize} customClass={styles.button} /> :
                        <Button type={buttonType} variety="theme" text={button.text} href={button.href}  customClass={styles.button} />}
                    </div>
                
                    <div className={styles.image}>
                        <Image src={imageUrl} blurDataURL={imageUrl} alt="Screen Image" placeholder="blur" layout="fill" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Screen;