import IHeader from './IHeader';
import IFooter from './IFooter';
import ILink from '@shared/interfaces/Button/ILink';

export default interface ILayout {
    header: IHeader;
    footer: IFooter;
    services: ILink[];
}