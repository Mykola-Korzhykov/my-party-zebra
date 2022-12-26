const getIndexWithZero = (index: number) => {
    const number = index + 1;
    return number < 10 ? `0${number}` : `${number}`;
}

export default getIndexWithZero;