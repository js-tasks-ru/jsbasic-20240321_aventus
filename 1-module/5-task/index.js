function truncate(str, maxlength) {
  // Проверка длины строки
  if (str.length <= maxlength) {
    return str;
  }

  // Усечение строки
  const newStr = str.substring(0, maxlength - 1);

  // Добавление знака троеточия
  return newStr + "…";
}
