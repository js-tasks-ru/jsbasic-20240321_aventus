function ucFirst(str) {
  // Проверка пустой строки
  if (str === "") {
    return "";
  }

  // Преобразование первой буквы в верхний регистр
  const firstLetter = str.charAt(0).toUpperCase();
  
  // Возвращение строки с заглавной первой буквой
  return firstLetter + str.slice(1);
}
