let i;
for (i = 1; i <= 100; i++) {
  // number divisible by 3 and 5 will
  // always be divisible by 15, print
  // 'FizzBuzz' in place of the number
  if (i % 15 === 0) document.write("FizzBuzz" + " ");
  // number divisible by 3? print 'Fizz'
  // in place of the number
  else if (i % 3 === 0) document.write("Fizz" + " ");
  // number divisible by 5, print 'Buzz'
  // in place of the number
  else if (i % 5 === 0) document.write("Buzz" + " ");
  // print the number
  else document.write(i + " ");
}

for (let i = 1; i <= 100; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(out || i);
}
