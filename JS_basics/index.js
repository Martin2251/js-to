node = JS version of Ruby
console.log (Hello) // displays text
34=number//number
34.2 = number
typeof("Dave");//string
typeof(34); //number
Number.parseInt('42', 10);
// => 42
(42).toString();
// => '42'
[ 'Hello', 'Le', 'Wagon', 42 ]    // Array

{ name: 'bob', age: 42 }          // Object
{ 'name': 'bob', 'age': 42 }      // Object (the exact same)
let age; // undefined
let name = null;
let // For a variable you will re-assign
const //For a variable you won’t re-assign
const firstName = "John";
console.log(firstName);

firstName = "Paul"; // TypeError: Assignment to constant variable.
const firstName = "Paul";
firstName.length;
// => 4
const firstName = "John";
firstName[0];
// => "J"

// Print all characters starting at index 1
firstName.substring(1)
const firstName = "Paul";
firstName.toUpperCase();
// => "PAUL"

firstName.toLowerCase();
// => "paul"
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
// => [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
months.length;
// => 12
const firstName = "Ringo";
const lastName = "Starr";

const message = `${firstName} ${lastName} is a drummer`;
// => "Ringo Starr is a drummer";
const fruits = [];
fruits.push("Apple"); // Create
fruits[0];            // Read
fruits[0] = "Banana"; // Update
fruits.splice(0, 1);  // Delete (1 item at index 0)

const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});

const age = 14;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}
false
undefined
null
0
NaN
""// fasy values
const raining = true;
const accessory = (raining ? "umbrella" : "sunglasses");
// => "umbrella"// ternary operator
if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log("I don't know this digit, sorry!");
}
const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

console.log(student);


console.log(student.firstName);
// => "Boris"
console.log(student['firstName']); // Another way
// => "Boris"



student.firstName = "Romain";
console.log(student.firstName);
// => "Romain"

// call a method
const sayHello = (name) => {
  return Hi there `${name}`;
};

console.log(sayHello("Martin"));

