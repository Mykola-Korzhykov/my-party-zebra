import IUpload from '@shared/interfaces/IUpload';

export default interface IServicesItem {
    title: string;
    image: IUpload;
    href: string;
}