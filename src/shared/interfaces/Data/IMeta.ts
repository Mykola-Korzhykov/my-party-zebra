import { IUploadFull } from "../IUpload";

export default interface IMeta {
    siteName: string;
    title: string;
    description: string;
    themeColor: string;
    locale: string;
    preview: IUploadFull,
    appleTouchIcon: IUploadFull,
    appleTouchIcon152: IUploadFull;
    appleTouchIcon167: IUploadFull;
    favicon: IUploadFull;
}