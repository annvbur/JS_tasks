
function firstWord(){
	var first = "No";
	console.log(first);
}



function secondWord(){
	var second = "pain";	
	console.log(second);
}



function thirtWord(){
	var thirt = "no";	
	console.log(thirt);
}



function forthWord(){
	var forth = "gain";	
	console.log(forth);
}

//эксперимент
// function compose(){
// 	var sourceArgs = arguments;
// 	for (var i =0; i<sourceArgs.length; i++){
// 		if (typeof sourceArgs[i]==='function'){
// 			return function(){
// 				for (var i =0; i<sourceArgs.length; i++){
// 					sourceArgs[i].apply(this, arguments);
// 				}
// 			}
// 		}	
// 	}
// }


// var composeThem = compose(firstWord, secondWord, thirtWord, forthWord);
// composeThem();




//правильно
function compose(){
	var sourceArgs = arguments;
return function(){
	for (var i =0; i<sourceArgs.length; i++){
		if (typeof sourceArgs[i]==='function'){
			sourceArgs[i].apply(this, arguments);
			}
		}
	}	
}


var composeThem = compose(firstWord, secondWord, thirtWord, forthWord);
composeThem();
































































