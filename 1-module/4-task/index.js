function checkSpam(str) {
  //преобразуем в нижний регистр
  const lowerStr = str.toLowerCase(); 
  
  //проверяем есть ли запрещенка
  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}
