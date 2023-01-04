import { FC } from 'react';
import Image from 'next/legacy/image';

import { IUploadFull } from '@shared/interfaces/IUpload';
import ILink from '@shared/interfaces/Button/ILink';
import UploadDTO from '@shared/dto/uploadDTO';

import Button from '@components/ui/Button/Button';

import styles from './Offer.module.scss';

type Props = {
    data: {
        title: string;
        sectionId: string;
        firstText: string;
        secondText: string;
        button: ILink;
        image: IUploadFull
    }
}

const Offer: FC<Props> = ({data}) => {
    const {title, sectionId, firstText, secondText, button, image} = data;
    const imageUpload = new UploadDTO(image);

    return (
        <section className={styles.section} id={sectionId}>
            <div className={styles.image}>
                <Image src={imageUpload.url} blurDataURL={imageUpload.url} alt={imageUpload.alt} placeholder="blur" layout="fill" />
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{firstText}</p>
                <p className={styles.text}>{secondText}</p>

                <Button type="link" variety="white" text={button.text} href={button.href} customClass={styles.button} />
            </div>
        </section>
    );
}
 
export default Offer;