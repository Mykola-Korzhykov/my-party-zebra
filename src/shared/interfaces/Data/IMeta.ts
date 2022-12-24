import IUpload from '../IUpload';

export default interface IMeta {
    siteName: string;
    title: string;
    description: string;
    themeColor: string;
    locale: string;
    preview: IUpload,
    appleTouchIcon: IUpload,
    appleTouchIcon152: IUpload;
    appleTouchIcon167: IUpload;
    favicon: IUpload;
}