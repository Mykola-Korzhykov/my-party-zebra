import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import Image from 'next/legacy/image';

import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';
import ISelectedProgramsItem from '@shared/interfaces/Data/Programs/ISelectedProgramsItem';

import Button from '@components/ui/Button/Button';

import styles from './Programs.module.scss';
import ProgramsItem from './ProgramsItem';

type Props = {
    list: IProgramsItem[];
    selectButtonText: string;
    selectedButtonText: string;
    selectedList: ISelectedProgramsItem[];
    setSelectedList: Dispatch<SetStateAction<ISelectedProgramsItem[]>>;
}

const ProgramsList: FC<Props> = ({list, selectButtonText, selectedButtonText, selectedList, setSelectedList}) => {
    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <ProgramsItem content={item} 
                              selectButtonText={selectButtonText} 
                              selectedButtonText={selectedButtonText} 
                              selectedList={selectedList} setSelectedList={setSelectedList} key={index} />
            ))}
        </ul>
    );
}
 
export default ProgramsList;