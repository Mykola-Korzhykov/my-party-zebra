import { FC, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import { setNameInput, setPhoneInput, setParentSelect, setChildrenSelect, setDateInput, setTimeInput } from '@store/slices/formSlice';

import Select from '@components/ui/Select/Select';

import IInput from '@shared/interfaces/Data/Inputs/IInput';
import ISelect from '@shared/interfaces/Data/Inputs/ISelect';

import styles from '../Organize.module.scss';

type Props = {
    isActive: boolean;
    nameInput: IInput;
    phoneInput: IInput;
    parentSelect: ISelect;
    childrenSelect: ISelect;
    dateInput: IInput;
    timeInput: IInput;
}

const ThirdStep: FC<Props> = ({isActive, nameInput, phoneInput, parentSelect, childrenSelect, dateInput, timeInput}) => {
    const dispatch = useAppDispatch();

    const nameInputState = useAppSelector(state => state.form.nameInput);
    const phoneInputState = useAppSelector(state => state.form.phoneInput);
    const parentSelectState = useAppSelector(state => state.form.parentSelect);
    const childrenSelectState = useAppSelector(state => state.form.childrenSelect);
    const dateInputState = useAppSelector(state => state.form.dateInput);
    const timeInputState = useAppSelector(state => state.form.timeInput);

    const nameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`${styles.step} ${isActive ? styles.stepActive : ''}`}>
            <div className={styles.grid}>
                <div className="input-wrapper">
                    <label htmlFor="theme">{nameInput.label}</label>
                    <div className={`input-container`}>
                        <input type="text" name="theme" placeholder={nameInput.placeholder} id="name-input" value={nameInputState.value}
                                onInput={e => dispatch(setNameInput({...nameInputState, value: (e.target as HTMLInputElement).value}))} ref={nameInputRef} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="theme">{phoneInput.label}</label>
                    <div className={`input-container`}>
                        <input type="tel" onKeyUp={(e: any) => e.target.value = e.target.value.replace("/[^\d]/g,''")} name="theme" placeholder={phoneInput.placeholder} id="phone-input" value={phoneInputState.value}
                                onInput={e => dispatch(setPhoneInput({...phoneInputState, value: (e.target as HTMLInputElement).value}))} ref={phoneInputRef} />
                    </div>
                </div>

                <Select label={parentSelect.label} placeholder={parentSelect.placeholder} list={parentSelect.list} customClass={styles.parentSelect}
                        stateValue={parentSelectState} setStateValue={setParentSelect} id="parent-select" />

                <Select label={childrenSelect.label} placeholder={childrenSelect.placeholder} list={childrenSelect.list} customClass={styles.childrenSelect}
                        stateValue={childrenSelectState} setStateValue={setChildrenSelect} id="children-select" />
            </div>

            <div className={styles.flex}>
                <div className="input-wrapper">
                    <label htmlFor="theme">{dateInput.label}</label>
                    <div className={`input-container`}>
                        <input type="date" name="theme" placeholder={dateInput.placeholder} id="date-input" value={dateInputState.value}
                                onInput={e => dispatch(setDateInput({...dateInputState, value: (e.target as HTMLInputElement).value}))} ref={dateInputRef} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="theme">{timeInput.label}</label>
                    <div className={`input-container`}>
                        <input type="time" name="theme" placeholder={timeInput.placeholder} id="time-input" value={timeInputState.value}
                                onInput={e => dispatch(setTimeInput({...timeInputState, value: (e.target as HTMLInputElement).value}))} ref={timeInputRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ThirdStep;