import { FC, useState, useRef, useEffect } from 'react';

import Router from 'next/router';
import Link from 'next/link';

import { IUploadFull } from '@shared/interfaces/IUpload';
import UploadDTO from '@shared/dto/uploadDTO';

import anchorClick from '@helpers/anchorClick';

import IPrograms from '@shared/interfaces/Data/Programs/IPrograms';
import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';
import ISelectedProgramsItem from '@shared/interfaces/Data/Programs/ISelectedProgramsItem';

import Button from '@components/ui/Button/Button';
import ProgramsList from './ProgramsList';

import styles from './Programs.module.scss';

type IFullProgramsItem = Pick<IProgramsItem, Exclude<keyof IProgramsItem, 'image'>> & {
    image: IUploadFull;
}

type IFullPrograms = Pick<IPrograms, Exclude<keyof IPrograms, 'list'>> & {
    list: IFullProgramsItem[];
}

type Props = {
    data: IFullPrograms;
}

const Programs: FC<Props> = ({data}) => {
    const {sectionTitle, sectionId, list, showButtonText, hideButtonText, selectButtonText, selectedButtonText} = data;

    const fixList: IProgramsItem[] = [];
    list.forEach((item) => {
        fixList.push({...item, image: new UploadDTO(item.image)});
    });
    const sortList = fixList.filter((item, index) => (index + 1) <= 4);

    const [selectedList, setSelectedList] = useState<ISelectedProgramsItem[]>([]);
    const [isListFull, setIsListFull] = useState<boolean>(false);
    
    const sectionRef = useRef<HTMLElement | null>(null);

    const handleClick = () => {
        setIsListFull(!isListFull);
        if(isListFull) sectionRef?.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        localStorage.setItem('selectedPrograms', JSON.stringify(selectedList));
    }, [selectedList]);

    useEffect(() => {
        localStorage.removeItem('selectedPrograms');
    }, []);

    return (
        <section className={styles.section} id={sectionId} ref={sectionRef} data-aos="fade-up">
            <div className="container">
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

                <ProgramsList list={isListFull ? fixList : sortList} selectButtonText={selectButtonText} selectedButtonText={selectedButtonText} selectedList={selectedList} setSelectedList={setSelectedList} />

                {((selectedList.length > 0 && !isListFull) || (isListFull && selectedList.length === 0) || (selectedList.length === 0 && !isListFull)) && 
                <Button type="button" 
                        variety="theme" 
                        text={isListFull ? hideButtonText : showButtonText} 
                        handleClick={handleClick} customClass={styles.button} />}
            </div>
        </section>
    );
}
 
export default Programs;