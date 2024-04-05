function showSalary(users, age) {
  //Фильтруем массив пользователей
  const filteredUsers = users.filter(user => user.age <= age);

  //Перебираем массив пользователей
  let result = '';
  for (const user of filteredUsers) {
    //Формируем строку с именем и балансом
    result += `${user.name}, ${user.balance}\n`;
  }

  return result.slice(0, -1); //Без последнего символа /n
}
