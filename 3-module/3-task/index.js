function camelize(str) {
  //Разбиваем строку на массив слов по дефису
  const words = str.split('-');

  //Перебираем массив слов
  for (let i = 1; i < words.length; i++) {
    //Преобразуем первое слово в нижний регистр
    words[0] = words[0].toLowerCase();

    //Преобразуем первую букву каждого слова после первого в верхний регистр
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  //Соединияем массив обратно в строку
  return words.join('');
}