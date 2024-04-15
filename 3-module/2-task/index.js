/*
function filterRange(arr, a, b) {
  //Создаем новый массив для хранения отфильтрованных элементов
  const filtered = [];

  //Перебираем массив arr с помощью 'forEach'
  arr.forEach(function(element) {
    //Проверяем попадает ли элемент в диапазон [a, b]
    if (element >= a && element <= b) {
      //если да, то добавляем в массив 'filtered'
      filtered.push(element);
    }
  });

  //Возвращаем массив 'filtered'
  return filtered;
}
*/
function filterRange(arr, a, b) {
  const filtered = arr.filter(function(num) {
    return num >= a && num <= b;
  });

  return filtered;
}
