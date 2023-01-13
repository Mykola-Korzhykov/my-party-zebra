import { FC, useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/legacy/image';

import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';
import ISelectedProgramsItem from '@shared/interfaces/Data/Programs/ISelectedProgramsItem';

import Button from '@components/ui/Button/Button';

import styles from './Programs.module.scss';

type Props = {
    content: IProgramsItem;
    selectButtonText: string;
    selectedButtonText: string;
    setSelectedList: Dispatch<SetStateAction<ISelectedProgramsItem[]>>;
}

const ProgramsItem: FC<Props> = ({content, selectButtonText, selectedButtonText, setSelectedList}) => {
    const {title, firstText, secondText, thirdText, image} = content;

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const chooseProgram = () => {
        setIsSelected(!isSelected);
        
        if(!isSelected) {
            setSelectedList((oldValue) => [...oldValue, {title, animatorsCount: 1}]);
        } else {
            setSelectedList((oldValue) => oldValue.filter(item => item.title !== title));
        }
    }

    return (
        <li className={styles.item}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <Image src={image.url} blurDataURL={image.url} alt={image.alt} layout="fill" />
                </div>

                <div className={styles.content}>
                    <h4 className={styles.title}>{title}</h4>

                    <p className={styles.text}>{firstText}</p>
                    <p className={styles.text}>{secondText}</p>
                    <p className={styles.text}>{thirdText}</p>
                </div>
            </div>

            <Button type="button" 
                    variety="themeGhost" 
                    text={isSelected ? selectedButtonText : selectButtonText} 
                    handleClick={chooseProgram} 
                    customClass={`${styles.chooseButton} ${isSelected ? styles.chooseActiveButton : ''}`} />
        </li>
    );
}

export default ProgramsItem;