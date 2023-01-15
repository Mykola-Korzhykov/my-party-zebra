import IMeta from '../IMeta';
import IInput from '../Inputs/IInput';
import ISelect from '../Inputs/ISelect';
import ICheckBox from '../Inputs/ICheckBox';
import IStep from './IStep';
import IButton from './IButton';

export default interface IOrganizeContent {
    meta: IMeta;
    firstStep: IStep;
    secondStep: IStep;
    thirdStep: IStep;
    backButton: IButton;
    nextButton: IButton;
    finishButton: IButton;
    themeInput: IInput;
    venueInput: IInput;
    budgetSelect: ISelect;
    otherVendors: ICheckBox;
    serviceSelect: ISelect;
    programsSelect: ISelect;
    nameInput: IInput;
    phoneInput: IInput;
    emailInput: IInput;
    childrenSelect: ISelect;
    dateInput: IInput;
    timeInput: IInput;
    specialInput: IInput;
    placeParty: ICheckBox;
    otherDecors: ICheckBox;
    modalTitle: string;
    modalDescription: string;
    modalButtonText: string;
    animatorsMessage: string;
}