import { FC, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@store/hook';
import { setThemeInput, setVenueInput, setOtherVendors, setBudgetSelect } from '@store/slices/formSlice';

import ISelectItem from '@shared/interfaces/Select/ISelectItem';
import IInput from '@shared/interfaces/Data/Inputs/IInput';
import ISelect from '@shared/interfaces/Data/Inputs/ISelect';
import ICheckBox from '@shared/interfaces/Data/Inputs/ICheckBox';

import TagIcon from '../Icons/TagIcon';
import AddressIcon from '../Icons/AddressIcon';

import Select from '@components/ui/Select/Select';
import CheckBox from '@components/ui/CheckBox/CheckBox';

import styles from '../Organize.module.scss';

type Props = {
    isActive: boolean;
    themeInput: IInput;
    venueInput: IInput;
    budgetSelect: ISelect;
    otherVendors: ICheckBox;
}

const FirstStep: FC<Props> = ({isActive, themeInput, venueInput, budgetSelect, otherVendors}) => {
    const dispatch = useAppDispatch();

    const themeInputState = useAppSelector(state => state.form.themeInput);
    const venueInputState = useAppSelector(state => state.form.venueInput);
    const budgetSelectState = useAppSelector(state => state.form.budgetSelect);
    const otherVendorsState = useAppSelector(state => state.form.otherVendors);

    const themeInputRef = useRef<HTMLInputElement>(null);
    const venueInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`${styles.step} ${isActive ? styles.stepActive : ''}`}>
            <div className={styles.inputRow}>
                <div className="input-wrapper">
                    <label htmlFor="theme">{themeInput.label}</label>
                    <div className={`input-container`}>
                        <input type="text" name="theme" placeholder={themeInput.placeholder} id="theme-input" value={themeInputState.value}
                               onInput={e => dispatch(setThemeInput({...themeInputState, value: (e.target as HTMLInputElement).value}))} ref={themeInputRef} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="place">{venueInput.label}</label>
                    <div className={`input-container`}>
                        <input type="text" name="place" placeholder={venueInput.placeholder} id="venue-input" value={venueInputState.value}
                               onInput={e => dispatch(setVenueInput({...venueInputState, value: (e.target as HTMLInputElement).value}))} ref={venueInputRef} />

                        <AddressIcon />
                    </div>
                </div>
            </div>

            <div className={styles.secondRow}>
                <Select label={budgetSelect.label} placeholder={budgetSelect.placeholder} list={budgetSelect.list} customClass={styles.budgetSelect}
                        stateValue={budgetSelectState} setStateValue={setBudgetSelect} id="budget-select" />

                <div>
                    <label>{otherVendors.label}</label>
                    <div className={styles.checkBoxes}>
                        {otherVendors.items.map(({text, isDefault}, index) => (
                            <CheckBox value={text} stateValue={otherVendorsState} setStateValue={setOtherVendors} isDefault={isDefault} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FirstStep;