import IFields from '@helpers/tg-request/interfaces/IFields';

const createMessage = (fields: IFields) => {
    let message = '';

    for(const key in fields) {
        const field = fields[key];
        message += `${field.smile} <b>${field.text}:</b> ${field.value}\n`;
    }
    
    return encodeURIComponent(message);
}

export default createMessage;