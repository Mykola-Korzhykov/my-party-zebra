import { FC, Dispatch, useState, RefObject, useEffect, useRef, SetStateAction } from 'react';
import { useAppDispatch } from '@store/hook';

import ISelectState from '@shared/interfaces/States/ISelectState';
import ISelectItem from '@shared/interfaces/Select/ISelectItem';
import ISelectedProgramsItem from '@shared/interfaces/Data/Programs/ISelectedProgramsItem';

import SelectArrow from '@components/ui/Select/SelectArrow';

import styles from './Select.module.scss';

type Props = {
    label: string;
    list: ISelectItem[];
    placeholder: string;
    customClass?: string;
    id: string;
    stateValue: ISelectState;
    setStateValue: any;
    clearAfterClick?: boolean;
    setSelectedPrograms?: Dispatch<SetStateAction<ISelectedProgramsItem[]>>;
}

const Select: FC<Props> = ({label, list, placeholder, stateValue, setStateValue, customClass = '', id, setSelectedPrograms, clearAfterClick = false}) => {
    const dispatch = useAppDispatch();

    const [sortList, setSortList] = useState<ISelectItem[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [value, setValue] = useState<string>(null);
    const [isShow, setIsShow] = useState<boolean>(false);

    const getSortList = (list: ISelectItem[], value: string): ISelectItem[] => list.filter((item, index) => item.value !== value);

    const selectRef = useRef<HTMLDivElement>(null);

    const toggleList = () => {
        const allSelects = document.querySelectorAll('.select');
        allSelects.forEach(item => item.classList.remove(styles.active));
        
        setIsShow(!isShow);
    };

    const selectItem = (value: string, index: number) => {
        const isProgramsSelect = id === 'programs-select';

        if(id === 'service-select' && value !== list[0].text) {
            localStorage.removeItem('selectedPrograms');
            setSelectedPrograms([]);
        }

        setActiveIndex(index);
        setValue(!clearAfterClick ? value : null);
        setIsShow(false);
        setSortList(getSortList(list, value));
        dispatch(setStateValue({...stateValue, value}));
        selectRef.current.classList.remove('error');
    }

    useEffect(() => {
        setSortList(list);

        if(id === 'service-select' && localStorage.getItem('isDecor') === 'true') {
            dispatch(setStateValue({...stateValue, value: list[1].text}));
        }

        if(id === 'service-select' && localStorage.getItem('isSeasonal') === 'true') {
            dispatch(setStateValue({...stateValue, value: list[list.length - 1].text}));
        }

        if(id === 'service-select' && localStorage.getItem('selectedPrograms')) {
            dispatch(setStateValue({...stateValue, value: list[0].text}));
        }
    }, [list]);

    return (
        <div className={`${styles.wrapper} ${customClass}`}>
            <label htmlFor={styles.input} className={styles.label}>{label}</label>
            <div className={`${styles.container} ${isShow ? styles.active : ''} select`}>
                <div className={styles.valueWrapper} onClick={toggleList} id={id} ref={selectRef}>
                    <p className={styles.value}>{stateValue.value ? stateValue.value : placeholder}</p>
                    <SelectArrow />
                </div>

                <ul className={styles.list}>
                    {sortList.map(({text, value}, index) => (
                        <li className={styles.item} onClick={() => selectItem(value, index)} key={index}>
                            {text}
                        </li>
                    ))}

                    {sortList.length === 0 && <li className={`${styles.item} ${styles.emptyItem}`}>Empty</li>}
                </ul>
            </div>
        </div>
    );
}
 
export default Select;