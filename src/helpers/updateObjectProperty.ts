const updateObjectProperty = (arr: any[], propName: string, propValue: string, newPropName: string, newPropValue: string | number) => {
    const newArr = arr.map(obj => {
        if (obj[propName] === propValue) {
            obj[newPropName] = newPropValue;
        }

        return obj;
    });

    return newArr;
}

export default updateObjectProperty;