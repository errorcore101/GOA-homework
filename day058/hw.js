function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Ana", 25);
const user2 = new User("Giorgi", 30);

const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

numbers.push(60);

console.log(numbers);