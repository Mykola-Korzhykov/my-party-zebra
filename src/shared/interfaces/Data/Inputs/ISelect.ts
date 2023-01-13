import ISelectItem from '@shared/interfaces/Select/ISelectItem';

export default interface ISelect {
    label: string;
    placeholder: string;
    list: ISelectItem[];
}