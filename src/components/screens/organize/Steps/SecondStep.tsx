import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '@store/hook';
import { useRouter } from 'next/router';

import { setServiceSelect, setProgramsSelect } from '@store/slices/formSlice';

import sortPrograms from '@helpers/sortPrograms';
import removeObjectsByValues from '@helpers/removeObjectsByValues';
import extractPropertyValues from '@helpers/extractPropertyValues';
import updateObjectProperty from '@helpers/updateObjectProperty';
import getEntertainers from '@helpers/getEntertainers';

import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';
import ISelectedProgramsItem from '@shared/interfaces/Data/Programs/ISelectedProgramsItem';
import ISelect from '@shared/interfaces/Data/Inputs/ISelect';

import Select from '@components/ui/Select/Select';
import RemoveIcon from '../Icons/RemoveIcon';

import styles from '../Organize.module.scss';

type Props = {
    isActive: boolean;
    serviceSelect: ISelect;
    programs: IProgramsItem[];
    programsSelect: ISelect;
    animatorsMessage: string;
}

const SecondStep: FC<Props> = ({isActive, serviceSelect, programs, programsSelect, animatorsMessage}) => {
    const [selectedPrograms, setSelectedPrograms] = useState<ISelectedProgramsItem[]>([]);

    const {locale} = useRouter();

    const serviceSelectState = useAppSelector(state => state.form.serviceSelect);
    const programsSelectState = useAppSelector(state => state.form.programsSelect);

    const getSelectedPrograms = () => JSON.parse(localStorage.getItem('selectedPrograms'));
    const changeSelectedPrograms = (programs: ISelectedProgramsItem[]) => {
        localStorage.setItem('selectedPrograms', JSON.stringify(programs))
    };

    const updateSelectedPrograms = () => {
        const selectedPrograms: ISelectedProgramsItem[] = getSelectedPrograms();
        if(selectedPrograms) {
            setSelectedPrograms(selectedPrograms);
            changeSelectedPrograms(selectedPrograms);
        }
    }

    const removeItem = (title: string) => {
        const oldList: ISelectedProgramsItem[] = getSelectedPrograms();
        const newList: ISelectedProgramsItem[] = oldList.filter(item => item.title !== title);

        changeSelectedPrograms(newList);
        setSelectedPrograms(newList);
    }

    const addAnimator = (e: any, title: string, animatorsCount: number) => {
        if(e.target.tagName !== 'svg') {
            const oldList: ISelectedProgramsItem[] = getSelectedPrograms();
            const newList: ISelectedProgramsItem[] = updateObjectProperty(oldList, 'title', title, 'animatorsCount', animatorsCount + 1);

            changeSelectedPrograms(newList);
            setSelectedPrograms(newList);
        }
    }

    useEffect(() => {
        const {value} = programsSelectState;
        if(value) {
            const newItem = {title: value, animatorsCount: 1};

            const oldList: ISelectedProgramsItem[] = getSelectedPrograms();
            const newList: ISelectedProgramsItem[] = oldList ? oldList.concat([{...newItem}]) : [{...newItem}];

            localStorage.setItem('selectedPrograms', JSON.stringify(newList));
            setSelectedPrograms(newList);
        }
    }, [programsSelectState]);

    useEffect(() => {
        const {value} = serviceSelectState;
        if(value !== serviceSelect.list[0].value) {
            localStorage.removeItem('selectedPrograms');
            setSelectedPrograms([]);
        }
    }, [serviceSelectState]);

    useEffect(() => {
        updateSelectedPrograms();
    }, []);

    return (
        <div className={`${styles.step} ${isActive ? styles.stepActive : ''}`}>
            <div className={styles.selectRow}>
                <Select label={serviceSelect.label} placeholder={serviceSelect.placeholder} list={serviceSelect.list} 
                        stateValue={serviceSelectState} setStateValue={setServiceSelect} id="service-select" />

                {(serviceSelectState.value === serviceSelect.list[0].value) && 
                <Select label={programsSelect.label} placeholder={programsSelect.placeholder} 
                        list={removeObjectsByValues(extractPropertyValues(selectedPrograms, 'title'), sortPrograms(programs))}
                        stateValue={programsSelectState} setStateValue={setProgramsSelect} clearAfterClick={true} id="programs-select" />}
            </div>

            <ul className={styles.programs}>
                {selectedPrograms && selectedPrograms.map(({title, animatorsCount}, index) => (
                    <li className={styles.programsItem} onClick={e => addAnimator(e, title, animatorsCount)} key={index}>
                        {title}, {getEntertainers(animatorsCount)}
                        <RemoveIcon handleClick={() => removeItem(title)} />
                    </li>
                ))}
            </ul>

            {selectedPrograms.length > 0 && <p className={styles.warning}>
                {animatorsMessage}
            </p>}
        </div>
    );
}
 
export default SecondStep;