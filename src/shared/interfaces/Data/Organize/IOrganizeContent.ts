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
    parentSelect: ISelect;
    childrenSelect: ISelect;
    dateInput: IInput;
    timeInput: IInput;
    modalTitle: string;
    modalDescription: string;
    modalButtonText: string;
}