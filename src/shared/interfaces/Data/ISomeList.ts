import { IUploadFull } from '../IUpload';

export interface ISomeListButtons {
    gallery: {
        text: string;
        href: string;
    };

    book: {
        text: string;
        href: string;
    };
}

export interface ISomeListItem {
    title: string;
    description: string;
    link: 'gallery' | 'book';
    image: IUploadFull;
}