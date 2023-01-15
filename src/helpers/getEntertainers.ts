const getEntertainers = (num: number): string =>
  `${num} entertain${num === 1 ? 'er' : 'ers'}`;

export default getEntertainers;