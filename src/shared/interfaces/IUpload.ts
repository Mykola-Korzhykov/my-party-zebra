export interface IUploadFull {
    data: {
        attributes: {
            hash: string;
            ext: string;
            alternativeText: string;
        }
    }
}

export interface IUploadFullWithoutData extends Pick<IUploadFull, 'data'> {
    attributes: IUploadFull['data']['attributes'];
}

export interface IUpload {
    url: string;
    alt: string;
}