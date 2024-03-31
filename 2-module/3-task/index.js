let calculator = {
  //Метод для чтения и сохранения значений
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  //Метод для сложения
  sum() {
  return this.a + this.b;
  },
  //Метод для умножения
  mul() {
    return this.a * this.b;
  },
  
  /*Пример из учебника не рабочий
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },*/
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
