import IProgramsItem from "@shared/interfaces/Data/Programs/IProgramsItem";
import ISelectItem from "@shared/interfaces/Select/ISelectItem";

const sortPrograms = (programs: IProgramsItem[]) => {
    const list: ISelectItem[] = [];
    programs.forEach(({title, animatorsCount}, index) => list.push({text: title, value: title}));
    return list;
}

export default sortPrograms;