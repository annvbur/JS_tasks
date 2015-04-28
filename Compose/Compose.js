
function firstWord(){
	var first = "No";
	//return first;
	console.log(first);
}

//firstWord();

function secondWord(){
	var second = "pain";
	//return second;
	console.log(second);
}

//secondWord();

function thirtWord(){
	var thirt = "no";
	//return thirt;
	console.log(thirt);
}

//thirtWord();

function forthWord(){
	var forth = "gain";
	//return forth;
	console.log(forth);
}

//forthWord();
console.log("compose function start");


function compose(fun1, fun2, fun3, fun4){
	var sourceArgs = arguments;
	console.log(sourceArgs);
	if (typeof fun1, fun2, fun3, fun4 === 'function') {
    return function () {
      if (arguments.length > 0) {
        return arguments.apply(this);
      } else {
        throw new Error('Something went wrong');
      }
    }
  }
  return null;

}
compose(firstWord, secondWord, thirtWord, forthWord);
compose(firstWord(), secondWord(), thirtWord(), forthWord());
//compose();













// var initialArray = [6, 10, 21, 14];


// result = initialArray.reduce(function(previousValue, item)
//   {return Math.max.apply(Math,initialArray);
//     console.log(result)});

// var result  = function(initialArray){
//   var x = 0;
//   initialArray.forEach(function(element, index, array){
//     if (element>x){
//       x = element;
//     }
//     return x;
    
//   });
//   console.log(x);
// };



//result (initialArray);

// var result2 = function(initialArray){
//   var x = 0;
//   initialArray.reduce(function(previousValue, item){
//     if (item>x){
//       x = item;
//     }
//     return x;
//   });
//   console.log(x);
// }

// result2 (initialArray);





















































