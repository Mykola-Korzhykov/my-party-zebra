import { FC } from 'react';
import Image from 'next/legacy/image';

import { IUploadFull } from '@shared/interfaces/IUpload';
import ILink from '@shared/interfaces/Button/ILink';
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
        button: ILink;
        image: string;
        sectionId: string;
    };

    themeColor: string;
}

const Screen: FC<Props> = ({data, themeColor}) => {
    const {title, colorTitle, colorTitlePlace, description, button, image, sectionId} = data;

    const imageUrl = screenImages[image][themeColor];

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {colorTitlePlace === 'start' && <span className={styles.colorTitle}>{colorTitle}</span>} {title} {colorTitlePlace === 'end' && <span className={styles.colorTitle}>{colorTitle}</span>} 
                        </h1>

                        <p className={styles.description}>{description}</p>
                        <Button type="link" variety="theme" text={button.text} href={button.href}  customClass={styles.button} />
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