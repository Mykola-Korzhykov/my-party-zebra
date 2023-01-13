import { FC, useState, RefObject, useEffect, useRef } from 'react';
import { useAppDispatch } from '@store/hook';

import ISelectState from '@shared/interfaces/States/ISelectState';
import ISelectItem from '@shared/interfaces/Select/ISelectItem';

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
}

const Select: FC<Props> = ({label, list, placeholder, stateValue, setStateValue, customClass = '', id, clearAfterClick = false}) => {
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
            dispatch(setStateValue({value: list[list.length - 1].text}));
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