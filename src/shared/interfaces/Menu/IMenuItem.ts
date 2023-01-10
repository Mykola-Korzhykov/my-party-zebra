export default interface IMenuItem {
    type: 'button' | 'anchor' | 'internal_link' | 'external_link' | 'submit';
    text: string;
    href: string;
}