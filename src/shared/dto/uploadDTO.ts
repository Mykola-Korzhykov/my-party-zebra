import { IUploadFullWithoutData } from "@shared/interfaces/IUpload";

const UPLOADS_URL = process.env.UPLOADS_URL;

class UploadDTO {
    url: string;
    alt: string;

    constructor(uploadData: IUploadFullWithoutData) {
        const {hash, ext, alternativeText} = uploadData.data ? uploadData.data.attributes : uploadData.attributes;

        this.url = `${UPLOADS_URL}/${hash}${ext}`;
        this.alt = alternativeText;
    }
}

export default UploadDTO;