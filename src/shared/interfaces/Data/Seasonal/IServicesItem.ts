import { IUpload } from '@shared/interfaces/IUpload';
import ILink from '@shared/interfaces/Button/ILink';

export default interface IServicesItem {
    image: IUpload;
    title: string;
    button: ILink;
}