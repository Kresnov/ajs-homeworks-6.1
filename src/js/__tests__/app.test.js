import Character from '../app.js';

test('Успех', () => {
  const recieved = new Character('Alex', 'Swordsman');
  const expected = {
    name: 'Alex',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toEqual(expected);
});

test('Ошибка в имени', () => {
  const recieved = () => new Character(23.3, 'Swordsman');
  expect(recieved).toThrowError('Имя должно быть строкой');
});

test('Мало символов', () => {
  const recieved = () => new Character('A', 'Swordsman');
  expect(recieved).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('Много символов', () => {
  const recieved = () => new Character('Alex Wizard The Best', 'Swordsman');
  expect(recieved).toThrowError('Имя должно содержать от 2 до 10 символовв');
});

test('Неверный тип персонажа', () => {
  const recieved = () => new Character('Alex', 'God');
  expect(recieved).toThrowError('Такого типа не существует');
});
