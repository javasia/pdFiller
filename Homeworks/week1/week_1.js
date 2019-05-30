/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
  return arr.filter(el => !itemsToExclude.includes(el));
}

difference([2, 1, 5], [2, 3])
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, key) {
  return array.reduce((grouped, el) => (grouped[el[key]] = (grouped[el[key]] || []).concat(el), grouped), {})
}

groupBy([{ gender: 'male', name: 'Max' }, { gender: 'male', name: 'Fred' }, { gender: 'female', name: 'Jane' }], 'gender');
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
 */
function flatten(array) {
  return array.flat();
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  return [... new Set(array)]
}

uniq([2, 1, 2]);
// => [2, 1]

/**
 * 
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  return size <= 0 ? [] :
    Array(Math.ceil(array.length / size))
      .fill()
      .map((empty, idx) => array.splice(0, size))
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]