function sumSalary(salaries) {
  let sum = 0;

  //перебираем свойства объекта
  for (let property in salaries) {
    //проверяем тип значения на число
    if (typeof salaries[property] === 'number') {
      //проверяем число на зп (не NaN, Infinity, -Infinity)
      if(!isNaN(salaries[property]) && isFinite(salaries[property])) {
        sum += salaries[property];
      }
    }
  }
  return sum
}
