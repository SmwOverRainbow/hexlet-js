import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error ('Функция не работает');
}

if (capitalize('') !== '') {
    throw new Error ('Функция не работает');
}

console.log ('Все тесты пройдены!');
