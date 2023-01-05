import { IUploadFull } from "../IUpload";

export default interface IMeta {
    siteName: string;
    title: string;
    description: string;
    theme: {color: string};
    locale: string;
    preview: IUploadFull,
    appleTouchIcon: IUploadFull,
    favicon: IUploadFull;
}