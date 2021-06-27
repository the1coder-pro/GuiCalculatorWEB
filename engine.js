// console.log(document.querySelector("#calc1"));
// const a = 1;
// console.log(resultInput.defaultValue);


function addValue(btn) {

    var resultInput = document.getElementById('calc1');

    console.log(resultInput);
    // resultInput.value += btn;
    console.log(btn.value);
    resultInput.value += btn.value;

}
function deleteChr() {

    var resultInput = document.getElementById('calc1');


    resultInput.value = resultInput.value.substring(0, resultInput.value.length - 1);

}


function calculateInput() {
  var resultInput = document.getElementById('calc1');

  var resultSplited = resultInput.value.split('');
  console.log(resultSplited);
  if (resultSplitd.includes())
}

// function myFunction() {
//     );
// }

