import UploadDTO from './UploadDTO';
import IUpload from '@shared/interfaces/IUpload';

class MetaDTO {
    title: string;
    description: string;
    themeColor: string;
    url: string;
    preview: IUpload;
    favicon: IUpload;
    appleTouchIcon: IUpload;
    appleTouchIcon152: IUpload;
    appleTouchIcon167: IUpload;

    constructor(metaData: any) {
        const {title, description, themeColor, url} = metaData;
        const {preview, favicon} = metaData;
        const {appleTouchIcon, appleTouchIcon152, appleTouchIcon167} = metaData;

        this.title = title;
        this.description = description;
        this.themeColor = themeColor;
        this.url = url;

        this.preview = new UploadDTO(preview);
        this.favicon = new UploadDTO(favicon);
        this.appleTouchIcon = new UploadDTO(appleTouchIcon);
        this.appleTouchIcon152 = new UploadDTO(appleTouchIcon152);
        this.appleTouchIcon167 = new UploadDTO(appleTouchIcon167);
    }
}

export default MetaDTO;