const getFullTitle = (title: string, colorTitle: string, colorTitlePlace: 'start' | 'end') => {
    let result = '';

    if(colorTitlePlace === 'start') result += colorTitle;
    result += title;
    if(colorTitlePlace === 'end') result += ' ' + colorTitle;

    return result;
}

export default getFullTitle;