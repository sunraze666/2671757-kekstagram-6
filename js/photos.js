import { getRandomInteger, getRandomArrayElements } from './utils.js';
import { DESCRIPTIONS } from './data.js';
import { getRandomComments } from './comments.js';
import { generateUniqueId } from './utils.js';

export const createUsers = () => ({
  id: generateUniqueId(),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getRandomComments,
});

export const generatedPhotos = Array.from({ length: 25 }, createUsers);
