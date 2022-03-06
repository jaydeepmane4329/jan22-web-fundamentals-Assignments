function add() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let addition = parseInt(num1) + parseInt(num2);

  let sum = document.getElementById("sum");

  sum.innerText = addition;
}
