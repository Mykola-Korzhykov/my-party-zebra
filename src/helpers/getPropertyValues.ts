const getPropertyValues = (arr: any, prop: any, secondProp: any) => {
    return arr.map((obj: any) => `${obj[prop]}, ${obj[secondProp]} animators`).join(' | ');
}

export default getPropertyValues;