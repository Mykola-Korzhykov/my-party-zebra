import { FC, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import { setNameInput, setPhoneInput, setEmailInput, setChildrenSelect, setDateInput, setTimeInput, setSpecialInput, setPlaceParty, setOtherDecors } from '@store/slices/formSlice';

import Select from '@components/ui/Select/Select';
import CheckBox from '@components/ui/CheckBox/CheckBox';

import IInput from '@shared/interfaces/Data/Inputs/IInput';
import ISelect from '@shared/interfaces/Data/Inputs/ISelect';
import ICheckBox from '@shared/interfaces/Data/Inputs/ICheckBox';

import styles from '../Organize.module.scss';

type Props = {
    isActive: boolean;
    nameInput: IInput;
    phoneInput: IInput;
    emailInput: IInput;
    childrenSelect: ISelect;
    dateInput: IInput;
    timeInput: IInput;
    specialInput: IInput;
    placeParty: ICheckBox;
    otherDecors: ICheckBox;
}

const ThirdStep: FC<Props> = ({isActive, nameInput, phoneInput, emailInput, childrenSelect, dateInput, timeInput, specialInput, placeParty, otherDecors}) => {
    const dispatch = useAppDispatch();

    const nameInputState = useAppSelector(state => state.form.nameInput);
    const phoneInputState = useAppSelector(state => state.form.phoneInput);
    const emailInputState = useAppSelector(state => state.form.emailInput);
    const childrenSelectState = useAppSelector(state => state.form.childrenSelect);
    const dateInputState = useAppSelector(state => state.form.dateInput);
    const timeInputState = useAppSelector(state => state.form.timeInput);
    const specialInputState = useAppSelector(state => state.form.specialInput);
    const placePartyState = useAppSelector(state => state.form.placeParty);
    const otherDecorsState = useAppSelector(state => state.form.otherDecors);

    const nameInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);
    const specialInputRef = useRef<HTMLInputElement>(null);

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
                        <input type="tel" name="theme" placeholder={phoneInput.placeholder} id="phone-input" value={phoneInputState.value}
                                onInput={e => dispatch(setPhoneInput({...phoneInputState, value: (e.target as HTMLInputElement).value}))} ref={phoneInputRef} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="theme">{emailInput.label}</label>
                    <div className={`input-container`}>
                        <input type="email" name="theme" placeholder={emailInput.placeholder} id="email-input" value={emailInputState.value}
                                onInput={e => dispatch(setEmailInput({...emailInputState, value: (e.target as HTMLInputElement).value}))} ref={emailInputRef} />
                    </div>
                </div>

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

                <div className="input-wrapper">
                    <label htmlFor="theme">{specialInput.label}</label>
                    <div className={`input-container`}>
                        <input type="text" name="theme" placeholder={specialInput.placeholder} id="special-input" value={specialInputState.value}
                                onInput={e => dispatch(setSpecialInput({...specialInputState, value: (e.target as HTMLInputElement).value}))} ref={specialInputRef} />
                    </div>
                </div>
            </div>

            <div className={styles.secondFlex}>
                <div>
                    <label>{placeParty.label}</label>
                    <div className={styles.checkBoxes}>
                        {placeParty.items.map(({text, isDefault}, index) => (
                            <CheckBox value={text} stateValue={placePartyState} setStateValue={setPlaceParty} isDefault={isDefault} key={index} />
                        ))}
                    </div>
                </div>

                <div>
                    <label>{otherDecors.label}</label>
                    <div className={styles.checkBoxes}>
                        {otherDecors.items.map(({text, isDefault}, index) => (
                            <CheckBox value={text} stateValue={otherDecorsState} setStateValue={setOtherDecors} isDefault={isDefault} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ThirdStep;