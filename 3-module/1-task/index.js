function namify(users) {
  //Создаем пустой массив для хранения имен
  let names = [];

  //Перебираем массив при помощи цикла 'forEach'
  users.forEach(function(user) {
    //Добавляем имя каждого пользователя в массив 'names'
    names.push(user.name);
  });

  //Возвращаем массив 'names'
  return names;
}

let names = namify(users);
