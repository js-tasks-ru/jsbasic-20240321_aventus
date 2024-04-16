function getMinMax(str) {
  //Разбиваем строку на массив чисел
  const numbers = str.split(' ').filter(Number);

  //Находим мин и макс значение в массиве
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  //Возвращаем объект со значениями
  return { min, max };
}
