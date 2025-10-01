const NAMES = ['Артём', 'Кирилл', 'Леха', 'Максим', 'Виктория', 'Диана', 'Дмитрий', 'Настя', 'Георгий']
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!']
const DESCRIPTIONS = ['Отдыхаю на море!', 'Сегодня был в кофейне, там мне дали печенько!', 'Как же прекрасен ночной Уралмаш...',
  'Не придумал что тут писать:)', 'С мужиками в парилке.']

//Генерация случайного числа в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

//Рандомный элемент массива
const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Написание объекта с комментариями
const createComment = (element) => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElements(MESSAGE),
  name: getRandomArrayElements(NAMES),
});

//Рандомный комментарий
const getRandomCommets = Array.from({length: getRandomInteger(0, 30)}, createComment);

//Описание фотографии
const createUsers = () => ({
  idUser: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getRandomCommets
});

//Массив с 25 объектами
const GeneratedUsers = Array.from({length: 25}, createUsers);


