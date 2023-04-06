import {getRandomNumber} from './util.js';

const DESCRIPTIONS = [
  'пляж с шезлонгами', 'указатель к пляжу', 'океан', 'девушка на пляже', 'рис с карри, блюдо', 'черная машина', 'клубника на тарелке', 'освежающий напиток в кружке', 'самолет над пляжем', 'обувница', 'дорога к пляжу', 'белая машина', 'обед', 'которолл', 'домашние тапки-луноходы', 'самолет в облаках', 'концерт', 'ретроавтомобиль', 'тапочки с подсветкой', 'пальмы ночью', 'салат', 'океан на закате', 'краб', 'атмосфера на концерте', 'сафари джип рядом с бегемотом'
];

const MESSAGE = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Дмитрий', 'Лидия', 'Матвей', 'Надежда', 'Дерзкий Лис', 'Тотошка', 'Ольга', 'Кот Лесной', 'Жульбарс', 'Прохожий'];

const createComment = () => ({
  id: getRandomNumber(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: MESSAGE[getRandomNumber(0,5)],
  name: NAMES[getRandomNumber(0,9)]
});

const createComments = () => Array.from({length: getRandomNumber(1, 20)}, () => createComment());

const photoInfo = (index) => ({
  id: index,
  description: DESCRIPTIONS[index - 1],
  url: `photos/${index}.jpg`,
  likes: getRandomNumber(15, 200),
  commentsText: createComments(),
  comments: createComments()
});

const allPhotoInfo = () => Array.from({length: 25}, (_, index) => photoInfo(index + 1));

export {createComment, allPhotoInfo};
