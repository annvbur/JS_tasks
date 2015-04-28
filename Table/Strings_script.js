
function creatingDictionary(){
  var getName = document.getElementById("input1").value;
  var getSurname = document.getElementById("input2").value;
  var input = [{key: "getName", value: "getSurname"}];
  var result = input.push({key: "getName", value: "getSurname"});
  
  console.log(getName, getSurname, input, result);
 }
  

//   function reverse(initialString) {
//     var splittingOfInitialString = initialString.split(' ');
//     var reversing = splittingOfInitialString.reverse();
//     var resultingString = reversing.join(' ');
//     return resultingString;
// }


   