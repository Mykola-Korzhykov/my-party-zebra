import UploadDTO from './uploadDTO';
import IUpload from '@shared/interfaces/IUpload';

class MetaDTO {
    siteName: string;
    title: string;
    description: string;
    themeColor: string;
    preview: IUpload;
    favicon: IUpload;
    appleTouchIcon: IUpload;

    constructor(metaData: any) {
        const {siteName, title, description, themeColor} = metaData;
        const {preview, favicon} = metaData;
        const {appleTouchIcon, appleTouchIcon152, appleTouchIcon167} = metaData;

        this.siteName = siteName;
        this.title = title;
        this.description = description;
        this.themeColor = themeColor;

        this.preview = new UploadDTO(preview);
        this.favicon = new UploadDTO(favicon);
        this.appleTouchIcon = new UploadDTO(appleTouchIcon);
    }
}

export default MetaDTO;