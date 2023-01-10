import { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { IUploadFull } from '@shared/interfaces/IUpload';
import UploadDTO from '@shared/dto/uploadDTO';

import anchorClick from '@helpers/anchorClick';

import IPrograms from '@shared/interfaces/Data/Programs/IPrograms';
import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';

import Button from '@components/ui/Button/Button';
import ProgramsList from './ProgramsList';
import ProgramsLink from './ProgramsLink';

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

    const [selectedList, setSelectedList] = useState<IProgramsItem[]>([]);
    const [isListFull, setIsListFull] = useState<boolean>(false);
    const [isLinkShow, setIsLinkShow] = useState<boolean>(false);

    const sectionRef = useRef(null);

    const handleClick = () => setIsListFull(!isListFull);

    useEffect(() => {
        sectionRef?.current.scrollIntoView({behavior: 'smooth'});
    }, [isListFull]);

    useEffect(() => {
        selectedList.length > 0 ? setIsLinkShow(true) : setIsLinkShow(false);

        console.log(selectedList)
    }, [selectedList]);

    return (
        <section className={styles.section} id={sectionId} ref={sectionRef}>
            <div className="container">
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

                <ProgramsList list={isListFull ? fixList : sortList} selectButtonText={selectButtonText} selectedButtonText={selectedButtonText} setSelectedList={setSelectedList} />

                {((isLinkShow && !isListFull) || (isListFull && !isLinkShow) || (!isLinkShow && !isListFull)) && 
                <Button type="button" 
                        variety="theme" 
                        text={isListFull ? hideButtonText : showButtonText} 
                        handleClick={handleClick} customClass={styles.button} />}

                <Link href="/book">
                    <ProgramsLink isShow={isLinkShow} />
                </Link>
            </div>
        </section>
    );
}
 
export default Programs;