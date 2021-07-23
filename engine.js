// console.log(document.querySelector("#calc1"));
// const a = 1;
// console.log(resultInput.defaultValue);
var numbers = [];
var intgetNumbers = [];
var result;

function addValue(btn) {
  var resultInput = document.getElementById("calc1");
  if (btn.value == "=" && resultInput.value.indexOf("+") == -1) {
    resultInput.value = parseInt(resultInput.value) + parseInt(resultInput.value);
  } else if (btn.value == "=") {
    resultInput.value = eval(resultInput.value);
  } else {
    resultInput.value += btn.value;
  }
}

function clearInput() {
  document.getElementById("calc1").value = "";
}

function deleteChr() {
  var resultInput = document.getElementById("calc1");

  resultInput.value = resultInput.value.substring(
    0,
    resultInput.value.length - 1
  );
}

function calculate() {
  var resultInput = document.getElementById("calc1");

  //  if(typeof document.getElementById("calc1").value == "+")
  //  {
  //     var num = splitedValue[0];
  //  }

  var numbers = [];

  var splitedValue = resultInput.value.split("+");
  console.log(splitedValue);
  for (var number in splitedValue) {
    numbers.push(parseInt(number));
  }
}
