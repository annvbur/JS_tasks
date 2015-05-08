
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


function compose(){
	var sourceArgs = arguments;
return function(){
for (var i =0; i<sourceArgs.length; i++){
	if (typeof sourceArgs[i]==='function'){
		sourceArgs[i].apply(this, arguments);
	}
}
};	
}


var composeThem = compose(firstWord, secondWord, thirtWord, forthWord);
composeThem();

//console.log(composeThem);




// function compose(){
// 	var sourceArgs = arguments;
// 	//if (typeof sourceArgs === 'function', 'function', 'function', 'function') {
// 		if (typeof sourceArgs[0] === 'function'){
//     	return function () {
//       		for (i = 0; i < sourceArgs.length; i++) {  //- счетчик для каждого sourceArgs
//       			if(sourceArgs.length > 0){
//         return sourceArgs.apply(this);
//       } else {
//         throw new Error('Something went wrong');
//       }
//     }
//   }
//   return null;
// }
// }


// var composeThem = compose(firstWord, secondWord, thirtWord, forthWord);

// console.log(composeThem);












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





















































