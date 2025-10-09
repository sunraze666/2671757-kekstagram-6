import { getRandomInteger, getRandomArrayElements } from './utils.js';
import { MESSAGE, NAMES } from './data.js';

export const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElements(MESSAGE),
  name: getRandomArrayElements(NAMES),
});

export const getRandomComments = Array.from({ length: getRandomInteger(0, 30) }, createComment);
