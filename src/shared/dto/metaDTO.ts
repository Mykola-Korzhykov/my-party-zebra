import UploadDTO from './uploadDTO';

import { IUpload } from '@shared/interfaces/IUpload';
import IMeta from '@shared/interfaces/Data/IMeta';

class MetaDTO {
    siteName;
    title;
    description;
    themeColor;
    preview: IUpload;
    favicon: IUpload;
    appleTouchIcon: IUpload;

    constructor(metaData: IMeta) {
        const {siteName, title, description, themeColor} = metaData;
        const {preview, favicon, appleTouchIcon} = metaData;

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