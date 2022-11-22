document.write('hello world!')
//Function Expression Task
const calculateTotal =  function(subTotal,tax){
  return subTotal + tax ;
}
let order1 = calculateTotal(20,30);
let order2 = calculateTotal(38,83);
let order3 = calculateTotal(18,78);
console.log(order1,order2,order3);

//Object Creation Task
const car = {
  make : 'benz',
  model:'model1',
  year:2022,
  colors: ['black','white','grey'],
  hybrid: true,
  drive(){
    console.log('this is drive method');
  },
  stop(){
    console.log('this is stop method');
  }
}
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop()

//Conditional Statement Task
const person1 = {
  name : 'lalli',
  age : 20,
  status : 'resident'
}
const person2 = {
  name : 'lovely',
  age : 14,
  status : 'tourist'
}
const value1 = person1.age > 18 && person1.status === 'resident';
const value2 = person2.age > 18 && person2.status === 'resident';

if(value1){
    console.log('person1 condition is true');
}else{
    console.log('person1 condition is false');
}
if(value2){
  console.log('person2 condition is true');
}else{
  console.log('person2 condition is false');
}

//String Challenge
let fullName = function(firstName, lastName){
  return `${firstName} ${lastName}`.toUpperCase();
}
console.log(fullName('lalitha', 'devi'));

//PASSING PARAMS AS OBJECTS
function fulllName({firstName, lastName}){
  return `${firstName} ${lastName}`.toUpperCase();
}
console.log(fulllName({lastName:'akhila',firstName:'swathi'}));

