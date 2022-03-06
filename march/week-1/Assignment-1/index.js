function fizzBuzz() {
  let n = parseInt(prompt("enter a number"));

  if (isNaN(n)) {
    alert("this is not a number");
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write("FizzBuzz");
    } else if (i % 3 == 0) {
      document.write("Fizz");
    } else if (i % 5 == 0) {
      document.write("Buzz");
    } else {
      document.write(i);
    }
    document.write("<br>");
  }
}
