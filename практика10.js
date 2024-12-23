function showMessage() {
    let message = "Привет, я Артем"; // локальная переменная
    alert(message);
  }
  
  showMessage(); // Привет, я JavaScript!
 // alert(message);  Ошибка

  function isPalindrome(str) {

    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome("боди в боди")); // true
  console.log(isPalindrome("hello")); // false


  function replaceNegativesWithSquares(arr) {
    if (arr.length <= 10) {
      throw new Error("Массив должен содержать больше 10 элементов.");
    }
    return arr.map(num => num < 0 ? num * num : num);
  }
  
  let numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12];
  let result = replaceNegativesWithSquares(numbers);
  console.log(result); // [1, 2, 9, 4, 25, 6, 49, 8, 81, 10, 121, 12]
  
  class User {
    constructor(name) {
      this.name = name;
    }
  
    displayUserName() {
      console.log(`Имя пользователя: ${this.name}`);
    }
  }
  
  const user1 = new User("Артем");
  user1.displayUserName(); // Имя пользователя

  class Greeter {
    constructor(userName) {
      this.userName = userName;
    }
  
    showMessage() {
      let message = `Привет, ${this.userName}`;
      alert(message);
    }
  }
  
  const greeter = new Greeter('я JavaScript!');//Привет 
  greeter.showMessage();

  class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverseName() {
      return this.name.split("").reverse().join("");
    }
  }
  
  const reverser = new NameReverser("Чикальник Артем");
  console.log(reverser.reverseName()); 


ы