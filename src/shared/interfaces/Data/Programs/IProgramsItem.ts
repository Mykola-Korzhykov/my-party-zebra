import { IUpload } from '@shared/interfaces/IUpload';

export default interface IProgramsItem {
    title: string;
    animatorsCount: number;
    firstText: string;
    secondText: string;
    thirdText: string;
    image: IUpload;
}