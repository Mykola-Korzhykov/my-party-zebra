export interface IUploadFull {
    data: {
        attributes: {
            hash: string;
            ext: string;
            alternativeText: string;
        }
    }
}

export interface IUpload {
    url: string;
    alt: string;
}