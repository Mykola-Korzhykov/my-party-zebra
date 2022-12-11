const UPLOADS_URL = process.env.UPLOADS_URL;

class UploadDTO {
    url: string;
    alt: string;

    constructor(uploadData: any) {
        const {hash, ext, alternativeText} = uploadData.data.attributes;

        this.url = `${UPLOADS_URL}/${hash}${ext}`;
        this.alt = alternativeText;
    }
}

export default UploadDTO;