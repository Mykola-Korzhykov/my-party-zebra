import { IUploadFull, IUploadFullWithoutData } from "@shared/interfaces/IUpload";

const UPLOADS_URL = process.env.UPLOADS_URL;

class UploadDTO {
    url: string;
    alt: string;

    constructor(uploadData: IUploadFull | IUploadFullWithoutData) {
        const {hash, ext, alternativeText} = 'attributes' in uploadData ? uploadData.attributes : uploadData.data.attributes;

        this.url = `${UPLOADS_URL}/${hash}${ext}`;
        this.alt = alternativeText;
    }
}

export default UploadDTO;