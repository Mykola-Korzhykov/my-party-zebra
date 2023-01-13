import IFields from './interfaces/IFields';

const validateFields = (fields: IFields): boolean => {
    let result = true;

    for(const key in fields) {
        const {value, id} = fields[key];
        const target = document.querySelector(`#${id}`);

        if(!value || value.length === 0) {
            if(result !== false) result = false;
            target.classList.add('error');
        }
    }

    return result;
}

export default validateFields;