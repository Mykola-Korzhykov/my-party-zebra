import IProgramsItem from './IProgramsItem';

export default interface IPrograms {
    sectionTitle: string;
    sectionId: string;
    list: IProgramsItem[];
    showButtonText: string;
    hideButtonText: string;
    selectButtonText: string;
    selectedButtonText: string;
}