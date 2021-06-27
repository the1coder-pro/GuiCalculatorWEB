// console.log(document.querySelector("#calc1"));
// const a = 1;
// console.log(resultInput.defaultValue);
var numbers = [];
var intgetNumbers = [];
var result;

function addValue(btn) {
  
    var resultInput = document.getElementById('calc1');
   
    if (btn.value == "+"){
      numbers.push(resultInput.value);

    } else if (btn.value == "="){
      numbers.push(resultInput.value);
      result = +numbers[0] + +numbers[1];
      console.log(result);
      resultInput.value += result;
    }

     resultInput.value += btn.value;
     if (result != undefined) {
       resultInput.value = result;
     }
    //  if (resultInput != NaN){

    //  }
    //  resultInput.value += resultInput;
    // console.log(resultInput.value.split('+'));
    

    


    // console.log(btn.value);
}



function deleteChr() {

    var resultInput = document.getElementById('calc1');


    resultInput.value = resultInput.value.substring(0, resultInput.value.length - 1);

}

function calculate(){
        var resultInput = document.getElementById('calc1');

      //  if(typeof document.getElementById("calc1").value == "+")
      //  {
      //     var num = splitedValue[0];
      //  }      

      var numbers = [];

      var splitedValue = resultInput.value.split('+');
      console.log(splitedValue);
      for (number in splitedValue) {
        numbers.push(parseInt(number));
      }
     
}



