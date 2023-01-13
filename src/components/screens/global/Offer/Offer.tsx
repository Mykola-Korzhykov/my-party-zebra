import { FC } from 'react';
import Router from 'next/router';
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
        image: IUploadFull;
        isCustom: boolean;
    }
}

const Offer: FC<Props> = ({data}) => {
    const {title, sectionId, firstText, secondText, button, image, isCustom} = data;
    const imageUpload = new UploadDTO(image);

    const toOrganize = () => {
        Router.push({pathname: '/organize'});
        localStorage.setItem('isDecor', 'true');
    }

    return (
        <section className={styles.section} id={sectionId} data-aos="fade-up">
            <div className={styles.image}>
                <Image src={imageUpload.url} blurDataURL={imageUpload.url} alt={imageUpload.alt} placeholder="blur" layout="fill" />
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{firstText}</p>
                <p className={styles.text}>{secondText}</p>

                {!isCustom && <Button type="link" variety="white" text={button.text} href={button.href} customClass={styles.button} />}
                {isCustom && <Button type="button" variety="white" text={button.text} customClass={styles.button} handleClick={toOrganize} />}
            </div>
        </section>
    );
}
 
export default Offer;