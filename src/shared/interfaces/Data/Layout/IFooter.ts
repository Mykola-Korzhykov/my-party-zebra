import ILink from '@shared/interfaces/Button/ILink';
import IMap from '../Global/IMap';
import ISocials from '../Global/ISocials';

export default interface IFooter {
    city: string;
    phone: string;
    link: ILink;
    otherLink: ILink;
    map: IMap;
    socials: ISocials;
}