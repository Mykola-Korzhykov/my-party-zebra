import IUploadInfo from '../IUploadInfo';

export default interface IMeta {
    siteName: string;
    title: string;
    description: string;
    themeColor: string;
    locale: string;
    preview: IUploadInfo,
    appleTouchIcon: IUploadInfo,
    appleTouchIcon152: IUploadInfo;
    appleTouchIcon167: IUploadInfo;
    favicon: IUploadInfo;
}