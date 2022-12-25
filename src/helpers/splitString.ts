const splitString = (text: string) => {
    const words = text.split(' ');

    if (words.length === 1) {
        return ['', words[0]];
    }

    return [words.slice(0, -1).join(' '), words.slice(-1)[0]];
}
  
export default splitString;