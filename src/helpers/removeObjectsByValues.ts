const removeObjectsByValues = (values: any[], arr: any[]): any[] => 
    arr.filter(item => !Object.values(item).some(val => values.includes(val)));

export default removeObjectsByValues;