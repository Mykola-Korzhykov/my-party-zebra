import IMenuItem from '../Menu/IMenuItem';

interface IHeader {
    menu: IMenuItem[]
}

export default interface ILayout {
    header: IHeader
}